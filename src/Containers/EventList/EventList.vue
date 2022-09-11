<template>
  <div class="event-list-wrapper">
    <div class="event-list-header">
      <Header :level="5" text="Dernières activités" />
      <Details Text=" Voir plus" />
    </div>
    <div>
      <div class="event-list-item">
        <label for="">Aujourd'hui</label>
        <div>
          <EventItemVue
            v-for="(current, index) in eventData.current"
            :key="index"
            :car="current"
            type="current"
          />
        </div>
      </div>
      <div class="event-list-item">
        <label for="">Hier</label>
        <div>
          <EventItemVue
            v-for="(before, index) in eventData.before"
            :key="index"
            :car="before"
            type="before"
          />
        </div>
      </div>
      <div class="event-list-item">
        <label for="">cette semaine</label>
        <div>
          <EventItemVue
            v-for="(week, index) in eventData.week"
            :key="index"
            :car="week"
            type="week"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const eventData = {
  current: ["toyota", "peugoaut", "Nissan"],
  before: ["toyota", "peugoaut", "Nissan"],
  week: ["toyota", "peugoaut", "Nissan"],
};

import EventItemVue from "@/components/EventItem/EventItem.vue";
import Header from "@/components/Header/Header.vue";
import Details from "../../components/Details/Details.vue";
export default {
  data() {
    return {
      eventData,
    };
  },
  components: {
    EventItemVue,
    Header,
    Details,
  },
};
</script>

<style lang="scss" scoped>
.event-list-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  label {
    font-size: 11px;
    color: grey;
  }
}

.event-list-header {
  display: flex;
  justify-content: space-between;
}
.event-list-wrapper {
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  padding: 20px;
  border-radius: 5px;
  gap: 10px;
  width: 25%;
}
</style>
