<template>
  <div>
    <span>{{ item.api_site_parameter }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true },
    searchText: { required: true }
  }
}
</script>