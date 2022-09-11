<template>
  <div class="card-list">
    <CardInfoVue
      v-for="(CardInfoData, index) in CardInfoData"
      :key="index"
      :subtitle="CardInfoData.subtitle"
      :nombre="CardInfoData.nombre"
      :iconType="CardInfoData.iconType"
    />
  </div>
</template>

<script>
const CardInfoData = [
  {
    subtitle: "Nombre des Utilisateurs",
    iconType: "UsergroupDeleteOutlined",
    nombre: "88",
  },
  {
    subtitle: "Nombre des Vues",
    iconType: "UsergroupDeleteOutlined",
    nombre: "88",
  },
  {
    subtitle: "Nombre des Voitures",
    iconType: "UsergroupDeleteOutlined",
    nombre: "88",
  },
  {
    subtitle: "Nombre des Vente",
    iconType: "UsergroupDeleteOutlined",
    nombre: "88",
  },
];
import CardInfoVue from "@/components/CardInfo/CardInfo.vue";
export default {
  fetch() {
    console.log("first");
  },
  name: "HomeComponent",
  components: {
    CardInfoVue,
  },
  data() {
    return {
      CardInfoData,
    };
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
}
</style>
