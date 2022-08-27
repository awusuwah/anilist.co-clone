<template>
  <Layout>
    <Header />
  </Layout>
</template>

<script>
import Layout from "../layouts/Default.vue";
import Header from "../components/header/Header.vue";

export default {
  name: "ProfileView",
  components: {
    Layout,
    Header,
  },
};
</script>
