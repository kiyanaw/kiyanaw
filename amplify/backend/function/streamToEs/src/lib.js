/* eslint no-await-in-loop: 0 */
/* eslint no-restricted-syntax: 0 */
/* eslint no-loop-func: 0 */
/* eslint no-param-reassign: 0 */

const AWS = require('aws-sdk')
const axios = require('axios')

const environment = process.env.ENV
const region = process.env.REGION
AWS.config.update({ region })
const es = 'https://search-kiyanaw-dev-grohpnfdchux2gvdyytpdpqr5m.us-east-1.es.amazonaws.com'
const esEndpoint = `${es}/app-search-${environment}/items`

const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
let tables = {
  dev: {
    enquiryTable: 'Enquiry-5cwvzbthlbccjcq6hv4oxa26em-dev',
    responseTable: 'Response-5cwvzbthlbccjcq6hv4oxa26em-dev',
  },
  prod: {
    enquiryTable: 'todo',
    responseTable: 'todo',
  },
}
tables = tables[environment]

async function getDoc(params) {
  return new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) {
        reject(err)
      }
      console.log('resolving doc', data)
      resolve(data)
    })
  })
}
async function getDocs(params) {
  return new Promise((resolve, reject) => {
    docClient.query(params, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

async function loadResponses(enquiryId) {
  const params = {
    TableName: tables.responseTable,
    IndexName: 'byEnquiry',
    KeyConditionExpression: 'HashKey = :hkey',
    ExpressionAttributeValues: {
      ':hkey': enquiryId,
    },
  }
  return getDocs(params).Items || []
}

async function loadEnquiry(enquiryId) {
  const params = {
    TableName: tables.enquiryTable,
    Key: {
      id: enquiryId,
    },
  }
  const response = await getDoc(params)
  console.log('loadEnquiry response', response)
  return response.Item
}

async function post(data) {
  console.log('posting response', data)
  console.log('post endpoint', esEndpoint)
  const response = await axios({
    method: 'post',
    url: esEndpoint,
    headers: { 'Content-Type': 'application/json' },
    data,
  })
  console.log('post response', response)
}

const handler = async (records) => {
  console.log('using tables', tables)

  // if we have an enquiry, get the responses
  records = records.filter((item) => ['enquiry', 'response'].includes(item.table))
    .filter((item) => item.type === 'phrase')

  if (!records.length) {
    return true
  }

  let updatedAt

  records = records.map(async (record) => {
    let enquiry
    let responses
    updatedAt = record.updatedAt
    if (record.table === 'enquiry') {
      console.log('Have enquiry, loading responses...')
      enquiry = record
      responses = await loadResponses(record.id)
      console.log('responses', responses)
    } else {
      console.log('Have response, loading enquiry...')
      responses = [record]
      enquiry = await loadEnquiry(record.enquiryId)
      console.log('enquiry', enquiry)
    }
    enquiry.responses = responses
    return enquiry
  })

  records = await Promise.all(records)

  console.log('post-lookup records', records)

  let responses
  for (const enquiry of records) {
    responses = enquiry.responses.map(async (response) => {
      const out = {
        enquiryId: enquiry.id,
        responseId: response.id,
        // TODO: scrub text (for Cree eg: ê -> e)
        // set up "search" field
        enquiryText: enquiry.text,
        responseText: response.text,
        searchText: `${enquiry.text} ${response.text}`,
        language: enquiry.languageIndex,
        updatedAt,
      }
      if (response.extra) {
        if (response.extra.dialect) {
          out.dialect = response.extra.dialect
        }
        if (response.extra.region) {
          out.region = response.extra.region
        }
      }
      try {
        return post(out)
      } catch (error) {
        console.warn(`Failed to post record ${out.enquiryId}`, error)
      }
    })
  }

  await Promise.all(responses)
  console.log('done')
  return true
}

module.exports = {
  handler, loadEnquiry, loadResponses, post,
}
