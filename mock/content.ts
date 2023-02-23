// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";
const global_content = [
  {
    content_id: 1,
    content: "测试文章111测试文章222测试文章222测试文章222测试文章222"
  },
  {
    content_id: 2,
    content: "测试文章222测试文章222测试文章222测试文章222测试文章222"
  }
];
export default [
  {
    url: "/getContentById",
    method: "post",
    response: ({ body }) => {
      const news_content = global_content.find(item => {
        return body.content_id === item.content_id;
      });
      return {
        success: true,
        data: {
          news_content: news_content || ""
        }
      };
    }
  }
] as MockMethod[];
