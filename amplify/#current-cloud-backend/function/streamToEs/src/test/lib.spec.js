const assert = require('assert').strict
const sinon = require('sinon')

const lib = require('../lib')

const { handler } = lib

describe('lib.handler - enquiry data', () => {
  beforeEach(function () {
    this.sandbox = sinon.createSandbox()
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  it('should return if the record is a "word"', async function () {
    const postStub = this.sandbox.stub(lib, 'post')
    const loadEnquiryStub = this.sandbox.stub(lib, 'loadEnquiry')
    const loadResponsesStub = this.sandbox.stub(lib, 'loadResponses')
    const records = [{
      table: 'enquiry',
      type: 'word',
    }]
    const response = await handler(records)

    assert.equal(postStub.callCount, 0)
    assert.equal(loadEnquiryStub.callCount, 0)
    assert.equal(loadResponsesStub.callCount, 0)
    assert.equal(response, true)
  })

  it('should not post enquiry with no responses')

  it('should post responses for an enquiry', async () => {
    // const postStub = this.sandbox.stub(lib, 'post')
    // const loadEnquiryStub = this.sandbox.stub(lib, 'loadEnquiry')
    // const loadResponsesStub = this.sandbox.stub(lib, 'loadResponses').resolves([

    // ])
    // const records = [{
    //   id: '1234',
    //   text: 'an enquiry',
    //   languageIndex: 'crk',
    //   type: 'phrase',
    //   table: 'enquiry',
    // }]
  })

  // it('should ignore "word" enquiry', async () => {

  // })
})
