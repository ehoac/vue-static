import Http from '../../http'

export default function newsList (params) {
  return Http({
    url: '/news/list',
    method: 'get',
    params: params || {}
  })
}
