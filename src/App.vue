<template>
  <v-app>
    <v-app-bar color="primary" class="flex-grow-0" app dark>
        <v-btn class="mr-3" elevation="1" fab small @click="setDrawer(!drawer)">
          <v-icon v-if="drawer">mdi-dots-vertical</v-icon>
          <v-icon v-else>mdi-backburger</v-icon>
        </v-btn>
        <!-- Start of app toolbar -->
        <v-toolbar >
          <v-toolbar-title class="display1 text-uppercase">
                FCVL Futsal 13/U13F 2023
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items >
            <v-btn text to="/" exact><img src="./assets/logo.png" alt="LogoFcvl Logo" height="35"/></v-btn>
          </v-toolbar-items>
        </v-toolbar>
      <!-- End of app toolbar -->
    </v-app-bar>

    <core-drawer />

    <v-main>
      <!-- Display view pages here based on route -->
      <router-view></router-view>
    </v-main>

    <v-footer id="core-footer">
        <v-container>
          <v-row align="center" no-gutters>
            <v-spacer class="hidden-sm-and-down" />
            <v-col cols="12" md="auto">
              <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
                &copy;2023 JcSouvignet,
                  Avec
                  <a href="https://vuejs.org/" target="_blank"><img src="https://vuejs.org/images/logo.png" alt="VueJS Logo" height="16" />VueJS</a>,
                  et <a href="https://www.creative-tim.com/product/vuetify-material-dashboard" target="_blank">vuetify-material</a>
                  by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
  </v-app>
</template>

<script>

// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',

  components: {
    CoreDrawer: () => import('./Drawer'),
  },

  computed: {
      ...mapState(['drawer']),
  },
  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-footer {
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
