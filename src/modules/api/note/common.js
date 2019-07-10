import http from '@/modules/http'

const getNoteMenu = function (params) {
  return http({
    url: '/note/menu',
    method: 'get',
    params: params || {}
  })
}

export default {
  getNoteMenu: data => getNoteMenu(data)
}
