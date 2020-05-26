import elasticsearch from 'elasticsearch'


const es = 'https://search-kiyanaw-dev-grohpnfdchux2gvdyytpdpqr5m.us-east-1.es.amazonaws.com'

// FIXME: fix the environment
const environment = 'dev'
// TODO: set up alias
const client = new elasticsearch.Client({
  host: es,
})


export default {
  async search(term) {
    let results
    if (term.length) {
      const query = {
        index: `app-search-${environment}`,
        type: 'items',
        body: { query: { wildcard: { searchText: `*${term}*` } } },
        // body: { query: { term: { text: { value: term } } } },
      }
      console.log('query', JSON.stringify(query))
      const raw = await client.search(query)
      console.log('raw', raw)
      results = raw.hits.hits.map((item) => item._source)
    }
    return results
  },
}
