<template>
  <div>
    <MainVue>
      <SignInVue />
    </MainVue>
  </div>
</template>

<script>
import MainVue from "@/components/Main/Main.vue";
import SignInVue from "@/Containers/SignIn/SignIn.vue";
export default {
  components: {
    MainVue,
    SignInVue,
  },
};
</script>

<style scoped></style>
