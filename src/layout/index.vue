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
      <v-spacer></v-spacer>
      <v-menu transition="slide-x-transition" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <faIcon style="font-size:30px" icon="globe"></faIcon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in languages" :key="index">
            <v-list-item-title @click="changeLanguage(item)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main style="background:#ededed">
      <div style="padding:15px;">
        <v-card color="mb-2">
          <v-breadcrumbs :items="breadCrumbRoute">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item @click="$router.push(item.path)">
                {{ item.name.toUpperCase() }}
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-card>

        <router-view></router-view>
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
        {
          title: this.$tc("pages.menus.dashboard"),
          icon: "mdi-view-dashboard",
          route: "/Dashboard",
        },
        {
          title: this.$tc("pages.menus.users"),
          icon: "mdi-image",
          route: "/Users",
        },
      ],
      languages: [{ title: "TR" }, { title: "EN" }],
      right: null,
    };
  },

  watch: {
    $route() {
      this.breadCrumbRoute = this.$route.matched;
    },
  },
  methods: {
    changeLanguage(item) {
      localStorage.setItem("locale", item.title.toLowerCase());
      location.reload();
    },
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
