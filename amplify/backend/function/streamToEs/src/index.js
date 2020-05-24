/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

/* eslint no-await-in-loop: 0 */
/* eslint no-restricted-syntax: 0 */

const AWS = require('aws-sdk')
const axios = require('axios')

const environment = process.env.ENV
const region = process.env.REGION

const es = 'https://search-kiyanaw-dev-grohpnfdchux2gvdyytpdpqr5m.us-east-1.es.amazonaws.com'
const esEndpoint = `${es}/app-search-${environment}/items`


/**
 *   console.log('event', event)
  const record = event.Records[0]

  let env = db.dev
  let tTable = db.dev.transcriptionTable
  if (record.eventSourceARN.includes('-prod')) {
    console.log('Using prod db')
    env = db.prod
    tTable = db.prod.transcriptionTable
  }

  let newRegion, oldRegion
  if (record.dynamodb) {
    if (record.dynamodb.NewImage) {
      newRegion = record.dynamodb.NewImage
    }
    if (record.dynamodb.OldImage){
      oldRegion = record.dynamodb.OldImage
    }

  }
 */

exports.handler = async (event) => {
  let records = event.Records.map((record) => AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage))

  console.log('Incoming records:', records)
  // reduce record attributes
  records = records.map((record) => {
    const out = {
      id: record.id,
      text: record.text,
      languageIndex: record.languageIndex,
      type: record.type,
      table: record.table,
    }

    if (record.table === 'response' && record.type === 'phrase') {
      if (record.extra) {
        if (record.extra.dialect) {
          out.dialect = record.extra.dialect
        }
        if (record.extra.region) {
          out.region = record.extra.region
        }
      }
    }
    return out
  })

  console.log('Posting records:', records)

  // TODO: switch to bulk api
  for (const record of records) {
    try {
      await axios({
        method: 'post',
        url: esEndpoint,
        headers: { 'Content-Type': 'application/json' },
        data: record,
      })
    } catch (error) {
      console.warn(`Failed to post record ${record.id}`, error)
    }
  }

  return true
}
