export default {
  title: 'Product',
  type: 'object',
  required: [
    'name',
    'latitude',
    'longitude'
  ],
  properties: {
    name: {
      type: 'string'
    },
    latitude: {
      type: ['number', 'string']
    },
    longitude: {
      type: ['number', 'string']
    }
  }
}
