/* eslint no-await-in-loop: 0 */
/* eslint no-restricted-syntax: 0 */
const AWS = require('aws-sdk')
const { handler } = require('./lib')


exports.handler = async (event) => {
  const records = event.Records.map((record) => AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage))

  console.log('Incoming records:', records)
  return handler(records)
}
