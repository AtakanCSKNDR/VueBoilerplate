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

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <faIcon style="font-size:30px" icon="cog"></faIcon>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item style="display:flex; justify-content:center">
              <v-list-item-avatar size="150">
                <img
                  width="100%"
                  src="https://image.freepik.com/free-vector/cute-cat-cactus-cartoon-icon-illustration_138676-2692.jpg"
                  alt="Atakan"
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-content style="text-align:center">
                <v-list-item-title>Alice</v-list-item-title>
                <v-list-item-subtitle
                  >Creator of Vue-Boilerplate</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="$router.push('/')" block color="primary">
              {{ $t("base.logout") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main style="background:#ededed">
      <div style="padding:15px;">
        <v-card color="mb-2">
          <BreadCrumb :breadCrumbRoute="breadCrumbRoute"></BreadCrumb>
        </v-card>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,

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
  created() {
    this.breadCrumbRoute = this.$route.matched;
  },
};
</script>

<style lang="scss" scoped>
.v-breadcrumbs {
  padding: 5px 12px;
}
</style>
