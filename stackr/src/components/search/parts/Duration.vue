<template>
  <div class="">
    <div>
      <date-picker lang="en" width="100" v-model="range" range input-class="datepicker-input-form" confirm></date-picker>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'Duration',
  components: { DatePicker },
  data() {
    return {
      range: '',
      shortcuts: [
        {
          text: 'Today',
          start: new Date(),
          end: new Date()
        }
      ]
    }
  },
  watch: {
    range: function(val) {
      this.$emit('duration-selected', JSON.parse(JSON.stringify(val)))
    }
  }
}
</script>

<style>
.mx-datepicker {
  background-color: #fff;
  height: 44px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100% !important;
}

.datepicker-input-form {
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
