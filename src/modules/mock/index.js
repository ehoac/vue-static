import Mock from 'mockjs'
import newsApi from './news'
import noteApi from './note'

Mock.mock(/\/news\/list/, 'get', newsApi.getexamUploader)

Mock.mock(/\/note\/menu/, 'get', noteApi.menu)
export default Mock
