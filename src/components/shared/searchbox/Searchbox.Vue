<template>
  <div>
    
  </div>
</template>
<script>
import Vue2Autocomplete from "vue2-autocomplete-js";
import axios from "axios";
export default {
  name: "searchbox",
  components: {
    autocomplete: Vue2Autocomplete
  },
  data() {
    return {
      msg: "Welcome to Vue2-typeahead",
      data: "",
      showConfig: false,
      selectFirst: false,
      limit: 9999,
      queryParamName: ":keyword",
      minChars: 3,
      delayTime: 500,
      placeholder: "Please input something",
      classes: "dropdown"
    };
  },

  methods: {
    getData(obj) {
      console.log(obj);
    },
    reformatData(response) {
      if (response.items) {
        if (response.items.length > 0) return response.items;
      }
      return [];
    }
  }
};
</script>
<style>

</style>
