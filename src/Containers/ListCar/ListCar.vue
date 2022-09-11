<template>
  <div class="list-car-main">
    <HeaderVue :level="5" text="Liste des voiture :" />
    <div class="list-car-wrapper">
      <CardCarVue
        v-for="(listCard, index) in listCard"
        :key="index"
        :num-car="listCard.numCar"
        :nombre-stock="listCard.nombreSotck"
        :price="listCard.price"
        :marque="listCard.marque"
      />
    </div>
  </div>
</template>

<script>
const listCard = [
  {
    numCar: "1865 wwt",
    price: 1500,
    nombreSotck: 5,
    marque: "Toyota",
  },
  {
    numCar: "1865 wwt",
    price: 1500,
    nombreSotck: 5,
    marque: "Toyota",
  },
  {
    numCar: "1865 wwt",
    price: 1500,
    nombreSotck: 5,
    marque: "Toyota",
  },
  {
    numCar: "1865 wwt",
    price: 1500,
    nombreSotck: 5,
    marque: "Toyota",
  },
  {
    numCar: "1865 wwt",
    price: 1500,
    nombreSotck: 5,
    marque: "Toyota",
  },
];
import CardCarVue from "@/components/CardCar/CardCar.vue";
import HeaderVue from "@/components/Header/Header.vue";
export default {
  components: {
    CardCarVue,
    HeaderVue,
  },
  data() {
    return {
      listCard,
    };
  },
};
</script>

<style scoped>
.list-car-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.list-car-main {
  width: 75%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 5px;
}
</style>
