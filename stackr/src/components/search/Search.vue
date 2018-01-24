<template>
  <section class="row d-flex ">
    <div class="col-md-3 col-sm-6 mt-5 align-self-stretch">
      <div class="card mb-12 box-shadow">
          <div class="card-body">        
            <site :my-param="myParam"></site>
            <p>{{ myParam }}</p>
          </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mt-5">
      <div class="card mb-12 box-shadow">
          <div class="card-body">        
          <user></user>
          </div>
      </div>
    </div>
    <div class="col-md-3 col-sm-6 mt-5">
      <div class="card mb-12 box-shadow">
          <div class="card-body">        
            <duration></duration>
          </div>
      </div>
    </div>            
    <div class="col-md-3 col-sm-6 mt-5">
      <div class="card mb-12 box-shadow">
          <div class="card-body">        
            <filters></filters>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import User from "@/components/search/parts/User";
import Duration from "@/components/search/parts/Duration";
import Filters from "@/components/search/parts/Filters";
import Site from "@/components/search/parts/Site";
export default {
  name: "Search",
  components: {
    user: User,
    duration: Duration,
    filters: Filters,
    site: Site
  },
  data() {
    return {
      myParam: "My Param from Parent"
    }
  }
};
</script>

<style>

</style>
