<template>
  <Layout>
    <Tooltip>
      this is some content
      <template #activator>Home.vue</template>
    </Tooltip>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";
import Tooltip from "@/components/tooltip/Tooltip.vue";

export default {
  name: "HomeView",
  components: {
    Layout,
    Tooltip,
  },
};
</script>
