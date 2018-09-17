<template>
  <div id="index">
      {{ msg }}
      <router-link to="/index/second">去第二个页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      msg:'紫漠成仙了'
    }
  },
  methods:{
    
  },
  destroyed(){
    this.$bus.$emit('send',this.msg);
    //发送完成数据就销毁了发送数据的监听方法 send
    this.$bus.$off('send');
  },
  mounted(){
    // this.sendData();
  }
}
</script>

<style lang="scss" scoped>
#index {
  width:100%;
  height:100%;
  font-size:20px;
}
</style>
