<template>
  <div id="one">
    <Arr1></Arr1>
    <Arr2></Arr2>
  </div>
</template>

<script>
import Arr1 from '../child/arr1';
import Arr2 from '../child/arr2';
export default {
  name: 'one',
  components:{
    Arr1,
    Arr2
  },
  data(){
  	return {

  	}
  }
}
</script>

<style>
#one {
  width:100%;
  height:100%;
  background:yellow;
}
</style>
