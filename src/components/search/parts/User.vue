<template>
  <div class="">
    <!-- <autocomplete url="http://api.stackexchange.com/2.2/users" :customParams="{ site: 'stackoverflow', key: 'LgYuyKY*02WURm6zUNHkzg((' }" :debounce="1000" param="inname" :classes="{ wrapper: 'user-form-wrapper', input: 'user-form-input', list: 'data-list', item: 'data-list-item' }" anchor="display_name" label="display_name" :process="reformatData" :on-select="selectItem">
    </autocomplete> -->
    <div class="form-group">
    <input type="text" class="form-control" aria-describedby="userid" placeholder="Enter user id"
      v-model="username" min="0" max="4" v-on:change="selectItem()">
    <small id="userid" class="form-text text-muted">User id(<b>not username</b>). example - 4958847</small>
  </div>
  </div>
</template>

<script>
import Vue2Autocomplete from 'vue2-autocomplete-js'
export default {
  name: 'User',
  components: {
    autocomplete: Vue2Autocomplete
  },
  data() {
    return {
      username: ''
    }
  },

  methods: {
    selectItem() {
      this.$emit('user-selected', this.username)
    },
    reformatData(response) {
      if (response.items) {
        if (response.items.length > 0) return response.items
      }
      return []
    }
  },
  watch: {}
}
</script>

<style >
.user-form-wrapper {
  background-color: #fff;
  height: 44px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.user-form-wrapper .user-form-input {
  border: none;
  padding: 10px;
  margin: 0px;
  height: auto;
  width: 100%;
  background: url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D)
    transparent;
  z-index: 6;
  left: 0px;
  outline: none;
}
</style>
