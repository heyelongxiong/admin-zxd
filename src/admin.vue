<template>
  <div id="admin">
    <heade :adminData="adminData"></heade>
    <!-- <heade :list="list"></heade> -->
    <section class="container">
    	<nav class="nav-left">
    		<div v-for="(item,index) in routes">
    			<router-link v-for="child in item.children" :key="item.id" :to="{path:item.path + '' + child.path}">
    				{{ child.alias }}
    			</router-link>
    		</div>
    	</nav>
    	<section class="content">
    		<router-view></router-view>
    	</section>
    </section>
  </div>
</template>

<script>
import heade from './components/heade';
export default {
  name: 'admin',
  //注册组件
  components:{
  	heade
  },
  data(){
  	return {
  		routes:this.$router.options.routes,
      adminData:{
        msg:'我是第一个头部',
        list:['zimo','张丽','zhaowei']
      },
  		// msg:'我是第一个头部',
  		// list:['zimo','张丽','zhaowei']
  	}
  },
  methods:{

  }
}
</script>

<style lang='scss' scoped>

Wh{
	width:100%;
  	height:100%;
}

@mixin bacg{
	background:#ccc;
}

#admin {
  @extend Wh;
  @include bacg;
  overflow:hidden;
  .container{
		@extend Wh;
		display:flex;
		justify-content:flex-start;
		.nav-left{
			width:200px;
			height:100%;
			background:pink;
			a{
				display:block;
				width:100%;
				height:40px;
				text-align:center;
			}
		}
		.content{
			flex:1;
			height:100%;
			font-size:50px;
		}
	}
}
</style>
