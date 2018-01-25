<template>
  <div class="">
      <vautocomplate :items="filteredItems" v-model="item" :get-label="getLabel" :component-item='template' @update-items="update" @item-selected="select"></vautocomplate>
  </div>
</template>

<script>
import Autocomplete from 'v-autocomplete'
import axios from 'axios'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-autocomplete/dist/v-autocomplete.css'
import ItemTemplate from '@/components/shared/v-autocomplete/ItemTemplate.vue'
var vm = {
  name: 'Site',
  components: {
    vautocomplate: Autocomplete
  },
  data () {
    return {
      item: null,
      items: [],
      filteredItems: [],
      template: ItemTemplate,
      active_site: null
    }
  },
  created: function () {
    this.fetchItems()
  },
  methods: {
    getLabel (item) {
      return item.api_site_parameter
    },
    update (text) {
      this.filteredItems = this.items.filter(item => {
        return new RegExp(text.toLowerCase()).test(
          item.api_site_parameter.toLowerCase()
        )
      })
    },
    select (site) {
      this.active_site = site
    },
    fetchItems () {
      var that = this
      axios
        .get(
          'https://api.stackexchange.com/2.2/sites?filter=!*L6TgyCNXHmkzktK&key=NUXQnF5rJxrtiJ5ZJQTVIg((&pagesize=600'
        )
        .then(response => {
          console.log(response.data.items)
          // JSON responses are automatically parsed.
          that.items = response.data.items
          that.filteredItems = that.items
        })
        .catch(e => {
          that.errors.push(e)
        })
    }
  },
  watch: {
    active_site: function (val) {
      this.$emit('site-selected', JSON.parse(JSON.stringify(val)))
    }
  }
}

export default vm
</script>

<style scoped="scoped">
p {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 1px;
}
</style>

<style>
.v-autocomplete {
}
.v-autocomplete .v-autocomplete-input-group {
  background-color: #fff;
  height: 44px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
  border: none;
  padding: 10px;
  margin: 0px;
  height: auto;
  width: 100%;
  background: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D)
    transparent;
  position: absolute;
  z-index: 6;
  left: 0px;
  outline: none;
}
.v-autocomplete-list {
  width: 100%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 300px;
  overflow-y: scroll;
}
.v-autocomplete-list .v-autocomplete-list-item {
  padding: 5px 10px;
  margin: 2px 0;
  border-radius: 0;
}
.v-autocomplete-list .v-autocomplete-item-active {
}
</style>
