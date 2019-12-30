<template>
    <div  class ="header">
       <div class= "container">
        <div class = "logo"> Job Application</div>
    <ul class="text-right">
      <router-link to="/" tag ="li">
      <a> home</a> 
      </router-link> 
     
    
    <router-link to="/testt" tag = "li"> <a>Testt</a> </router-link>
    
    </ul>
       </div>
    </div>
</template>
<script>

export default {
    name : 'AppHeader'
}
</script>
<style lang="scss" scoped>
.header {
background-color :#333;
color :#FFF;
overflow: hidden;
     
}
.logo{
font-size : 24px;
padding : 20px;
float : left;
width :200px;

}
ul {
float : left;
width : calc(100%-200px);
margin:0;


}
li{

padding: 20px;
display: inline-block;
font-size: 18px;
a{
    color :#FFF;

}

}
</style>
