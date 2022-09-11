<template>
  <div>
    <span class="details-list"
      >{{ Text }}... <component :is="$antIcons['RightOutlined']" />
    </span>
  </div>
</template>

<script>
export default {
  name: "detailsComponent",
  props: {
    Text: {
      type: String,
      default: "Details",
    },
  },
};
</script>

<style scoped>
.details-list {
  color: grey;
  font-size: 12px;
}
</style>
