<template>
  <div>
    <Tooltip>
      this is some content
      <template #activator>Home.vue</template>
    </Tooltip>
  </div>
</template>

<script>
import Tooltip from "../components/tooltip/Tooltip.vue";

export default {
  name: "HomeView",
  components: {
    Tooltip,
  },
};
</script>
