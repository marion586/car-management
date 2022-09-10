<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-typography-title :level="level">{{ text }}</a-typography-title>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
    text: {
      type: String,
      default: " ",
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
