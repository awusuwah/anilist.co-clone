<template>
  <div>
    <router-view />

    <!-- Include all the icons -->
    <Icons />
  </div>
</template>

<script>
import Icons from "@/components/icon/Icons.vue";

export default {
  name: "App",
  components: {
    Icons,
  },
};
</script>
