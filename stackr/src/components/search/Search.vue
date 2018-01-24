<template>
  <section class="row d-flex ">
    <div class="col-md-12 col-sm-12 mt-5 align-self-stretch">
      <div class="card mb-12 box-shadow">
          <div class="card-body">

            <section class="site-selection">
              <section v-if="site == null">
                <h3 class="search-filter-title">Site</h3>
                <site @site-selected="onSiteSelected"></site>
              </section>
              <section v-else>
                <h3 class="search-filter-title">
                  Site <span class="badge badge-primary">{{site.api_site_parameter}}</span>
                </h3>
              </section>
            </section>

            <transition name="fade">
              <section class="user-selection search-part" v-if="step > 0">
                <section v-if="user == null">
                  <h3 class="search-filter-title">User : </h3>
                  <user @user-selected="onUserSelected"></user>
                </section>
                <section v-else>
                  <h3 class="search-filter-title">
                    User <span class="badge badge-primary">{{user.display_name}}</span>
                  </h3>
                </section>              
              </section>
            </transition>

            <transition name="fade">
              <section class="duration-selection search-part" v-if="step > 1">
                <section v-if="duration == null">
                  <h3 class="search-filter-title">Duration</h3>
                  <duration @duration-selected="onDurationSelected"></duration>
                </section>
                <section v-else>
                  <h3 class="search-filter-title">
                    Duration : from <span class="badge badge-primary">{{duration[0]}}</span> to <span class="badge badge-primary">{{duration[1]}}</span> 
                  </h3>
                </section>              
              </section>
            </transition>
            
            <transition name="fade">
              <section class="advanced-filters-selection search-part" v-if="step > 2">
                <section v-if="filters == null">
                  <h3 class="search-filter-title">Advanced filters</h3>
                  <filters></filters>
                </section>
                <section v-else>
                  <p>
                    Selected user is <span class="badge badge-primary">{{site.api_site_parameter}}</span>
                  </p>
                </section>              
              </section>                        
            </transition>
            
            <transition name="fade" >
              <button class="btn btn-success" v-if="step > 2">Get report </button>
            </transition>

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
      site: null,
      user: null,
      duration: null,
      filters: null,
      step: 0
    }
  },
  methods: {
    onSiteSelected(item){
      this.site = item;
      this.step = 1;
    },
    onUserSelected(user){
      this.user = user;
      this.step = 2;
    },
    onDurationSelected(duration){
      this.duration = duration;
      this.step = 3;

    }
  }
  
};
</script>

<style scoped="scoped">
.search-part{
}
  h3.search-filter-title {
    text-transform:uppercase;
    font-weight:800;
    font-size:1.2rem;
    letter-spacing:1px;
  }

  h2 {
    text-transform:uppercase;
    font-weight:800;
    font-size:1.2rem;
    letter-spacing:1px;
    margin-bottom:30px;
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
