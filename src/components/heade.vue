<template>
  <div id="heade">
  	  <div>{{ adminData.msg }}</div>
      <div v-for="item in adminData.list">{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'heade',
  props:["adminData"],
}
</script>

<style>-
#heade {
  width:100%;
  height:auto;
  font-size:18px;
  color:#000;
  background:#ccc;
}
</style>
