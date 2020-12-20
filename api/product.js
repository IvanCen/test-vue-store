import {getData} from './index'

export default {
  async list(filter) {
    const response = await getData.get('/product')
    if (filter) {
      return response.data.filter(item => item.category === Number(filter.category))
    }
    return response.data
  },
}
