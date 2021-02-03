<template>
  <v-app id="inspire">
    <v-navigation-drawer
      dark
      v-model="drawer"
      app
      style="box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-img
              style="width:80%; margin:0 auto;"
              src="@/assets/logo.png"
            ></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="changeRoute(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div style="padding:15px">
        <v-card color="mb-2">
          <v-breadcrumbs :items="breadCrumbRoute">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item @click="$router.push(item.path)">
                {{ item.name.toUpperCase()}}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-card>
        <v-card>
          <router-view></router-view>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbRoute: [],
      drawer: null,
      items: [
        { title: this.$tc('pages.menus.dashboard'), icon: "mdi-view-dashboard", route: "/Dashboard" },
        { title: this.$tc('pages.menus.users'), icon: "mdi-image", route: "/Users" },
      ],
      right: null,
    };
  },

  watch: {
    $route() {
      this.breadCrumbRoute = this.$route.matched;
      console.log(this.breadCrumbRoute);
    },
  },
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.v-breadcrumbs {
  padding: 5px 12px;
}
</style>
