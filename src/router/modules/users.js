import Layout from "@/layout/index.vue";
const base = {
  path: "/Users",
  name: "Users",
  component: Layout,
  children: [
    {
      path: "",
      name: "",
      component: () => import("@/views/Users/List.vue"),
    },
    {
      path: "New",
      name: "New",
      component: () => import("@/views/Users/New.vue"),
    },
  ],
};

export default base;
