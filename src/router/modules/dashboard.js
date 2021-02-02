import Layout from "@/layout/index.vue";
const base = {
  path: "/Dashboard",
  name: "Dashboard",
  component: Layout,
  children: [
    {
      path: "",
      name: "",
      component: () => import("@/views/Dashboard/View.vue"),
    },
  ],
};

export default base;
