<template>
  <div>
    <MainVue>
      <SignUpVue />
    </MainVue>
  </div>
</template>

<script>
import MainVue from "@/components/Main/Main.vue";
import SignUpVue from "@/Containers/SignUp/SignUp.vue";
export default {
  components: {
    MainVue,
    SignUpVue,
  },
};
</script>

<style scoped></style>
