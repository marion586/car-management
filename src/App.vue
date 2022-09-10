<template>
 <div class="main">
  <div
    class="car__content"
  >

    <connexion-pro></connexion-pro>
  </div>
 </div>
</template>

<script>
import ConnexionPro from './components/ConnexionPro.vue';
  
export default {
  name: "App",
  components: {
    ConnexionPro
},
};
</script>

<style lang="scss">
  html, .main{
    background: #eaeaea;
  }
  .main{
    height: 100vh;
    width: 100%;
  }

</style>
