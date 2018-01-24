<template>
  <section>

      <search></search>
  </section>
</template>

<script>
import Search from "@/components/search/Search";
export default {
  name: "Home",
  components: {
    search: Search
  },
  data() {
    return {
      msg: "Stackr Home",
      newVar: new Date().toString()
    };
  },
  methods: {}
};
</script>
