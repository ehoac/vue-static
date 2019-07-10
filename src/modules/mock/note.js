import Mock from 'mockjs'
const Random = Mock.Random
const pMenu = function () {
  let menu = []
  for (let i = 0; i < 5; i++) {
    let item = {
      code: Random.id(),
      title: Random.ctitle(2, 10),
      conId: Random.guid()
    }
    menu.push(item)
  }
  return {
    menu: menu
  }
}

export default {
  menu: () => pMenu()
}
