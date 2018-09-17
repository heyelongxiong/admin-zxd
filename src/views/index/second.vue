<template>
  <div id="second">
    我是第二个页面
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'second',
  data(){
  	return {
  		msg:''
  	}
  },
  methods:{
  	
  },
  created(){
  	var that = this;
	this.$bus.$on('send',function(msg){
		that.msg = msg;
		console.log(that.msg)
	});
  },
  mounted(){
  	
  }
}
</script>

<style lang="scss" scoped>
#second {
  width:100%;
  height:100%;
  font-size:20px;
}
</style>
