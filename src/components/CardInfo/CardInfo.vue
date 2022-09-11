<template>
  <div>
    <div class="card-wrapper">
      <div class="card-left">
        <component :is="$antIcons[iconType]" />
        <span> {{ nombre }}</span>
        <label for=""> {{ subtitle }}</label>
      </div>
      <div class="card-right">
        <component :is="$antIcons['StockOutlined']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      default: "",
    },
    nombre: {
      type: Number,
      default: 88,
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 250px;
  height: 150px;
  background: #4ca3c1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
  .card-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: aliceblue;
    font-weight: bold;
    .anticon {
      padding: 5px;
      border-radius: 2px;
      background: #d9d9d9;
      color: #4ca3c1;
    }
  }
  .card-right {
    .anticon {
      font-size: 25px;
      color: #d9d9d9;
    }
  }
}
</style>
