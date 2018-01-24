<template>
  <div class="row">
    <div class="col-md-12">
      <vautocomplate :items="filteredItems" v-model="item" :get-label="getLabel" :component-item='template' @update-items="update"></vautocomplate>
    </div>
  </div>
</template>

<script>
import Autocomplete from "v-autocomplete";
import axios from "axios";
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import "v-autocomplete/dist/v-autocomplete.css";
import ItemTemplate from "@/components/shared/v-autocomplete/ItemTemplate.vue";
var vm = {
  name: "Site",
  components: {
    vautocomplate: Autocomplete
  },
  data() {
    return {
      item: null,
      items: [],
      filteredItems: [],
      template: ItemTemplate
    };
  },
  created: function(){
    this.fetchItems();
  },
  props: {
    myParam: { default: () => "hello test"}
  },
  methods: {
    getLabel(item) {
      return item.api_site_parameter;
    },
    update(text) {
      this.filteredItems = this.items.filter(item => {
        return new RegExp(text.toLowerCase()).test(item.api_site_parameter.toLowerCase());
      });
    },

    fetchItems() {
      var that = this;
      axios
        .get(
          "https://api.stackexchange.com/2.2/sites?filter=!*L6TgyCNXHmkzktK&key=NUXQnF5rJxrtiJ5ZJQTVIg((&pagesize=600"
        )
        .then(response => {
          console.log(response.data.items);
          // JSON responses are automatically parsed.
          that.items = response.data.items;
          that.filteredItems = that.items;
        })
        .catch(e => {
          that.errors.push(e);
        });
    }
  }
};


export default vm;
</script>

<style>

</style>
