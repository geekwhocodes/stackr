<template>
  <section class="row d-flex ">
    <div class="col-md-12 col-sm-12 mt-2 align-self-stretch">
      <div class="card mb-12 box-shadow">
        <div class="card-body">

          <section class="site-selection">
            <section v-if="site == null">
              <h3 class="search-filter-title">Site</h3>
              <site @site-selected="onSiteSelected"></site>
            </section>
            <section v-else>
              <h3 class="search-filter-title">
                Site
                <span class="badge badge-primary">{{site.api_site_parameter}}</span>
                <span v-on:click="clearSelection(0)" class="show-cursor badge badge-pill badge-primary"><span class="fas fa-times-circle"></span> clear</span>
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
                  User
                  <span class="badge badge-primary">{{this.user}}</span>
                  <span v-on:click="clearSelection(1)" class="show-cursor badge badge-pill badge-primary"><span class="fas fa-times-circle"></span> clear</span>
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
                  Duration : from
                  <span class="badge badge-primary">{{duration[0]}}</span> to
                  <span class="badge badge-primary">{{duration[1]}}</span>
                  <span v-on:click="clearSelection(2)" class="show-cursor badge badge-pill badge-primary"><span class="fas fa-times-circle"></span> clear</span>
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
                  Selected user is
                  <span class="badge badge-primary">{{site.api_site_parameter}}</span>
                </p>
              </section>
            </section>
          </transition>

          <transition name="fade">
            <button class="btn btn-success" v-if="step > 2" v-on:click="GetReputation()">Get report </button>
          </transition>

        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12 mt-2 align-self-stretch" v-if="this.reputation != null && this.reputation.length >= 1">
      <div class="card mb-12 box-shadow">
        <div class="card-body" >
          <h3>Total contributions : {{this.reputation.length}}</h3>
          <p> Reputation Points : {{this.total_reputation_points}} </p>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12 mt-2 align-self-stretch" v-if="this.reputation != null && this.reputation.length <= 0">
      <div class="card mb-12 box-shadow">
        <div class="card-body" >
          Nothing to show here
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import User from '@/components/search/parts/User'
import Duration from '@/components/search/parts/Duration'
import Filters from '@/components/search/parts/Filters'
import Site from '@/components/search/parts/Site'
export default {
  name: 'Search',
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
      step: 0,
      from: 0,
      to: 0,
      reputation: null,
      total_reputation_points: null
    }
  },
  methods: {
    onSiteSelected(item) {
      this.site = item
      console.log('site', this.site.api_site_parameter)
      this.step = 1
    },
    onUserSelected(user) {
      this.user = user
      console.log('user', this.user)
      this.step = 2
    },
    onDurationSelected(duration) {
      this.duration = duration
      console.log('duration...')
      console.log(this.duration)
      this.step = 3
      this.from = Math.floor((new Date(this.duration[0]).getTime() / 1000))
      this.to = Math.floor((new Date(this.duration[1]).getTime() / 1000))
      console.log('generated uri > ', this.GenerateUri())
    },
    clearSelection(step) {
      switch (step) {
        case 0:
          this.site = null
          this.user = null
          this.duration = null
          this.step = 0
          break
        case 1:
          this.user = null
          this.duration = null
          this.step = 1
          break
        case 2:
          this.duration = null
          this.step = 2
          break
        default:
          break
      }
    },
    GenerateUri() {
      // uri = "http://api.stackexchange.com/2.2/users/" + this.user + "/reputation?pagesize=1000&site=" + this.site;
      var uri = 'https://api.stackexchange.com/2.2/users/' + this.user + '/reputation?pagesize=100&fromdate=' + this.from + '&todate=' + this.to + '&order=desc&sort=reputation&site=' + this.site.api_site_parameter
      return uri
    },
    async GetReputation() {
      try {
        var totalPoints = 0
        // saxios.defaults.baseURL = 'http://localhost:8083'
        const response = await axios.get(this.GenerateUri())
        console.log(response.data)
        if (response.data != null && response.data.items != null) {
          this.reputation = response.data.items
          response.data.items.forEach(function(a) {
            totalPoints += a.reputation_change
          })
          this.total_reputation_points = totalPoints
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped="scoped">
.show-cursor {
  cursor: pointer;
}

h3.search-filter-title {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

h2 {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
