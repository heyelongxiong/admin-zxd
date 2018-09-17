<template>
  <div id="arr1">
    我发送数据
    <Button @click="sendData" type="primary">发送</Button>
    <router-link to="/child/arr1">去arr1</router-link>
  </div>
</template>

<script>
import bus from '../../api/eventBus';
export default {
  name: 'arr1',
  data(){
  	return {
      msg:'紫漠大仙'
  	}
  },
  methods:{
    sendData(){
      bus.$emit('send',this.msg);
    }
  },
  mounted(){
    this.sendData();
  }
}
</script>

<style>
#arr1 {
  width:100%;
  height:100px;
  color:#fff;
  background:green;
}
</style>
