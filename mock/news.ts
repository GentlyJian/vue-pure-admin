// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";
const global_news = [
  {
    t_id: 1,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["1"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 2,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["1"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 2
  },
  {
    t_id: 3,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["12"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 4,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["12"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 5,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["2"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 6,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["2"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 7,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["23"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 8,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["23"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 9,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["23"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  },
  {
    t_id: 10,
    title: "这是一篇技术文章",
    type: "技术",
    tag: ["23"],
    u_id: 1,
    create_time: "2023-02-20 17:00:00",
    update_time: "",
    publish_time: "2023-02-20 18:00:00",
    status: 0,
    content_id: 1
  }
];
export default [
  {
    url: "/getNews",
    method: "post",
    response: ({ body }) => {
      const user_news = global_news.filter(item => {
        if (body.u_id === item.u_id) return true;
        return false;
      });
      return {
        success: true,
        data: {
          news: user_news
        }
      };
    }
  },
  {
    url: "/saveNews",
    method: "post",
    response: ({ body }) => {
      const { news } = body;
      global_news.push(body.news);
      return {
        success: true,
        data: {
          id: news.t_id
        }
      };
    }
  },
  {
    url: "/delNews",
    method: "post",
    response: ({ body }) => {
      const { u_id, t_id } = body;
      const t_index = global_news.findIndex(item => {
        if (u_id === item.u_id && item.t_id === t_id) return true;
        return false;
      });
      global_news.splice(t_index, 1);
      return {
        success: true,
        data: {
          t_id
        }
      };
    }
  },
  {
    url: "/updateNews",
    method: "post",
    response: ({ body }) => {
      const { news } = body;
      const newsObj = global_news.find(item => item.t_id === news.t_id);
      Object.assign(newsObj, body.news);
      return {
        success: true,
        data: {
          id: news.t_id
        }
      };
    }
  }
] as MockMethod[];
