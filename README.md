<p align="center">
<img width="500" src="https://user-images.githubusercontent.com/50195250/104232655-b62e9880-5461-11eb-9202-d672293d398a.png">
</p>

# What is boilerplate

Boiler plate is provides a quick start to the project. DONT REPEAT YOURSELF!

# Getting Started

Vue-Boilerplate requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and run the project in development.

```sh
$ cd Vue-Boilerplate
$ npm install
$ npm run dev
```

For production, staging and test environments...

```sh
$ npm run staging
$ npm run test
$ npm run production
```

Build and minifies the project for all environments.

```sh
$ npm run build-dev
$ npm run build-staging
$ npm run build-test
$ npm run build-production
```

# Contents

Vue-Boilerplate uses a number of open source projects to work properly:

* [VueJS](https://vuejs.org/) - Framework for building user interfaces.
* [Vuetify](https://vuetifyjs.com/) - Vuetify is a Vue UI Library with beautifully handcrafted Material Components.
* [Axios](https://github.com/imcvampire/vue-axios) - For HTTP requests (GET-POST-PUT-DELETE).
* [Vuex](https://vuex.vuejs.org/) - Vuex is a state management pattern + library for Vue.js applications.
* [i18n](https://kazupon.github.io/vue-i18n/) - Vue I18n is internationalization plugin for Vue.js
* [FontAwesome](https://github.com/FortAwesome/vue-fontawesome) - To get vector icons and social logos
* [node.js](https://nodejs.org/en/) - evented I/O for the backend

And of course [Vue-Boilerplate](https://github.com/AtakanCSKNDR/Vue-Boilerplate/) itself is open source with a public repository
on GitHub.

# ScreenShots

Vue-Boilerplate comes with a simple user interface. You can check how boilerplate use.
<p align="center">
<img width="70%" src="https://user-images.githubusercontent.com/50195250/109169033-75c87700-7790-11eb-8709-3dc8830fa2f1.jpg">
</p>
<p align="center">
<img width="70%" src="https://user-images.githubusercontent.com/50195250/109169163-942e7280-7790-11eb-8849-459b96ecf6f8.PNG">
</p>

# Documentation

### Architecture

📁 Assets - to store your images and styles.

📁 Common - to describe your services like API or JWT service.

📁 Components - to create your component and use every page.

📁 Entities - to describe your entities and form elements.

📁 Fontawesome - add fonts to fontawesome library

📁 Layout - Covers pages in folder view.

📁 Locales - Describe words in tr and en folders and use in view page.

📁 Router - Create a new modules and describe your route.  After that call the module in index.js. Don't forget U should  call layout each module if you wanna use layout.dos

📁 Store - to store your datas with vuex store.

📁 Utils - Describe your validators and static types or helpful tools.

📁 Views - Already you know .

### Routing, layout and views

Instead of posting my pages directly to App.vue, I created a middleware. Thus i can describe to different content placeholder for my Vue pages.  It's really easy to use. You will learn.

##### - Layout

Layout is a vue page. You can create your content placeholder.

```html
<v-app>
  <v-app-bar app></v-app-bar>
  <v-main>
    <v-container>
       <router-view></router-view>
    </v-container>
  </v-main>
</v-app>
```

##### - Describe Routes

Create a new module in **/router/modules** . 

```javascript
import Layout from "@/layout/index.vue";
const base = {
  path: "/View",
  name: "View",
  component: Layout,
  children: [
    {
      path: "/",
      name: "",
      component: () => import("@/views/base/View"),
    },
  ],
};
export default base;
```

**Import** your layaut from /layout folder.  Describe root path and add layout as component. Childrens of root path is your view pages.

Describe your modules in **index.js**

```javascript
import base from "@/router/modules/base";
const routes = [
  base
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

```

### State Management

Vuex is a state management pattern + library for Vue.js applications. Describe your actions.type and mutations.type as a constant in store folder.

**in actions.tpye.js**

```javascript
//#region Base
export const BASE_GET_METHOD = "baseGetMethod";
export const BASE_POST_METHOD = "basePostMethod";
export const BASE_PUT_METHOD = "basePutMethod";
export const BASE_DELETE_METHOD = "baseDeleteMethod";
//#endregion

```

**in mutations.type.js**

```javascript
//#region Base
export const BASE_SET_METHOD = "baseSetMethod";
//#endregion
```

Create a new module in **modules** folder and import  ***api.service***  from common folder and  import actions.type and mutations.type

```javascript
import apiService from "@/common/api.service";
import { BASE_GET_METHOD,} from "@/store/actions.type";
import { BASE_SET_METHOD } from "@/store/mutations.type";
```

describe your **actions** constant

```javascript
const actions = {
  [BASE_GET_METHOD](context) {
    return new Promise((resolve, reject) => {
      apiService.get("/users")
        .then((response) => {
          context.commit(BASE_SET_METHOD, response);
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });

    });
  }
}
```

After getting data from API we commit to the **mutation**. Describe your mutation constant.

```javascript
const mutations = {
  [BASE_SET_METHOD](state, payload) {
    state.data = payload.data;
  },
};
```

Create **state** and **getters** constant

```javascript
const state = {
  data: [],
};
const getters = {
  getData: (state) => {
    return state.data;
  },
};
```



### Languages and technologies
