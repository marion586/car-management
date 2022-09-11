<template>
  <div>
    <Sidebar>
      <div class="home-wrapper">
        <CardInfoVue />
        <div class="home-content">
          <ListCarVue />
          <EventListVue />
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script>
import Sidebar from "../../Containers/Sidebar/Sidebar.vue";
import CardInfoVue from "@/Containers/CardInfo/CardInfo.vue";
import ListCarVue from "@/Containers/ListCar/ListCar.vue";
import EventListVue from "@/Containers/EventList/EventList.vue";
export default {
  fetch() {
    console.log("first");
  },
  name: "HomeComponent",
  components: {
    Sidebar,
    CardInfoVue,
    ListCarVue,
    EventListVue,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home-content {
  display: flex;
  gap: 20px;
}
</style>
