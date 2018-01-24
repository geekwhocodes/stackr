<template>
  <section>
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-12 box-shadow">
          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    </div>
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
