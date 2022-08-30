<template>
  <section>
    <h2 class="ml-3 mb-2 text-sm text-gray-400 font-bold">Activity History</h2>

    <div class="bg-foreground p-4 rounded-md">
      <div class="activity-grid h-36">
        <div v-for="act in activity" :key="act.id"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ActivityHistory",
  data() {
    return {
      activity: [],
    };
  },
};
</script>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(7, 1fr);
}
</style>
