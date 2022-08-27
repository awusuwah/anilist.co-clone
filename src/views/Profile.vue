<template>
  <Layout>
    <Header />
    <Banner />
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default.vue";
import Banner from "@/components/banner/Banner.vue";
import Header from "@/components/header/Header.vue";

export default {
  name: "ProfileView",
  components: {
    Layout,
    Banner,
    Header,
  },
};
</script>
