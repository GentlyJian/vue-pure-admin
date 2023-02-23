// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/getUser",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          success: true,
          data: {
            users: [
              {
                uid: "1",
                name: "admin",
                // 一个用户可能有多个角色
                email: "1183048005.qq.com",
                role: 1,
                avatar: "https://gentlyjian.github.io/images/avatar.png",
                desc: "一个大帅批",
                birth: "1997-08-06",
                gender: "1",
                create_time: "2023-02-20 17:00:00"
              }
            ]
          }
        };
      }
      return {
        success: false,
        data: {},
        msg: "no author"
      };
    }
  }
] as MockMethod[];
