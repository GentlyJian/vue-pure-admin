export default {
  path: "/news",
  redirect: "/news/newsList",
  meta: {
    icon: "homeFilled",
    title: "新闻",
    rank: 99
  },
  children: [
    {
      path: "/news/newsList",
      name: "NewsList",
      component: () => import("@/views/news/index.vue"),
      meta: {
        title: "新闻列表",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
