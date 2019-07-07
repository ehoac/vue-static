<template>
  <div class="layout main">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src='./assets/logo.png'/>
          </div>
          <div class="layout-nav">
            <router-link to='/news'>
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                News
              </MenuItem>
            </router-link>
            <router-link to='/note'>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Note
              </MenuItem>
            </router-link>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <router-view/>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
import newsList from '@/modules/api/news/get_news.js'

export default {
  data () {
    return {
      name: 'name'
    }
  },
  mounted () {
    this.getNewsList()
  },
  methods: {
    getNewsList () {
      let data = {
        pid: 0
      }
      newsList(data).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  /* position: relative; */
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  img{
    width: 100px;
    height: 30px;
    vertical-align: top;
  }
}

.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}

footer{
  position: fixed;
  bottom: 0;
}

.layout-footer-center{
  text-align: center;
}
</style>

<style scoped>
</style>
