import {getData} from './index'

export default {
  async list() {
    const response = await getData.get('/product-category')
    return response.data
  }
}
