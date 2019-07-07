import Mock from 'mockjs'
import newsApi from './news'

Mock.mock(/\/news\/list/, 'get', newsApi.getexamUploader)
export default Mock
