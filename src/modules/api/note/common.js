import http from '@/modules/http'

const getNoteMenu = function (params) {
  return http({
    url: '/note/menu',
    method: 'get',
    params: params || {}
  })
}

const selfTopMenu = function () {
  return http({
    url: '/note/selfTopMenu',
    method: 'get'
  })
}

export default {
  getNoteMenu: data => getNoteMenu(data),
  selfTopMenu: () => selfTopMenu()
}
