<template>
  <div id="two">
    <div>{{ msg }}</div>
    <div v-for="item in list">{{ item }}</div>
    <Childs @send="change"></Childs>
  </div>
</template>

<script>
import Childs from '../child/child';
export default {
  name: 'two',
  components:{
    Childs
  },
  data(){
  	return {
  		msg:'',
      list:[]
  	}
  },
  methods:{
    change(msg,list){
      this.msg = msg;
      this.list = list;
    }
  },
  updated(){
    console.log('我是更新后')
  },
  beforeUpdate(){
    console.log('我是更新前')
  },
  beforeMount(){
    console.log('我是挂载前')
  },
  beforeDestroy(){
    console.log('我是销毁前')
  },
  destroyed(){
    console.log('我是销毁后')
  },
  beforeCreate(){
    console.log('我是创建前')
  },
  mounted(){
    console.log('我是挂载中')
  },
  created(){
    console.log('我是创建完成了')
  }
}
</script>

<style>
#two {
  width:100%;
  height:100%;
}
</style>
