<template>
  <div>
    <a-card hoverable style="width: 200px">
      <template #cover>
        <img alt="example" :src="img" />
      </template>
      <template #actions>
        <div class="card-item-car">
          <component :is="$antIcons['PlusCircleOutlined']" />
          <label for=""> Add</label>
        </div>
        <div class="card-item-car">
          <component :is="$antIcons['EditOutlined']" />
          <label for=""> Details</label>
        </div>
      </template>
      <a-card :title="numCar" :bordered="false">
        <div class="item">
          <label for="">Price:</label>
          <span> {{ price }}</span>
        </div>
        <div class="item">
          <label for="">Marque:</label>
          <span> {{ marque }}</span>
        </div>
        <div class="item">
          <label for="">Nombre stock:</label>
          <span> {{ NombreStock }}</span>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script>
import img from "../../assets/connexion.jpg";
export default {
  data() {
    return {
      img,
    };
  },
  props: {
    numCar: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    marque: {
      type: String,
      default: "",
    },
    NombreStock: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.ant-card-body {
  padding: 10px !important;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  width: 100%;
}
.ant-card-head {
  padding: 2px;
}
.ant-card {
  width: 100%;
}
.item label {
  font-weight: bold;
}
.ant-card-head-title {
  font-weight: bold;
}
.card-item-car {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
