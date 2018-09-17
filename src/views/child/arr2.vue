<template>
  <div id="arr2">
    <div>我接收数据：{{ msg }}</div>
  </div>
</template>

<script>
import bus from '../../api/eventBus';
export default {
  name: 'arr2',
  data(){
  	return {
      msg:''
  	}
  },
  methods:{
    change(){
      var that = this;
      bus.$on('send',function(msg){
        that.msg = msg;
        console.log(that.msg)
      })
    }
  },
  mounted(){
    this.change()
  }
}
</script>

<style>
#arr2 {
  width:100%;
  height:100px;
  color:#fff;
  background:green;
}
</style>
