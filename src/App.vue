<template>
  <div
    class="butn"
    :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }"
  >
    <a-button class="butn__primary" type="primary" ghost>Primary</a-button>
    <a-button ghost>Default</a-button>
    <a-button type="dashed" ghost>Dashed</a-button>
    <a-button type="primary" danger ghost>Danger</a-button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.butn {
  display: flex;
  flex-direction: column;

  &__primary {
    margin: 90px;
  }
}
</style>
