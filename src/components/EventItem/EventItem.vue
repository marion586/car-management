<template>
  <div class="card-event-wrapper">
    <div :class="`card-event--${type} card-event`"></div>
    <p>Vente de voiture {{ car }}</p>
  </div>
</template>

<script>
export default {
  props: {
    car: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "current",
    },
  },
};
</script>

<style scoped lang="scss">
.card-event-wrapper {
  display: flex;
  gap: 10px;
}

.card-event {
  width: 20px;
  height: 20px;
  &--current {
    background: #0ec0ff;
  }
  &--before {
    background: #00a72c;
  }
  &--week {
    background: crimson;
  }
}
</style>
