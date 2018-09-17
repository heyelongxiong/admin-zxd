<template>
  <div id="child">
    child
    <Button @click="sendData" type="primary">发送数据</Button>
  </div>
</template>

<script>
export default {
  name: 'child',
  data(){
  	return {
  		message:'你好，紫漠上神！',
      zimo:'大仙',
      userList:['张丽','赵伟','大姐']
  	}
  },
  methods:{
    sendData(){
      this.$emit('send',this.message,this.userList);
    }
  },
  
  mounted(){
    //生命周期中的挂载中，也就是真实的DOM结构已经存在了，
    //而且是自动执行
  }

}
</script>

<style>
#child {
  width:100%;
  height:100px;
  color:#fff;
  background:green;
}
</style>
