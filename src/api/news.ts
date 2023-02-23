import { http } from "@/utils/http";

export type NewsResult = {
  success: boolean;
  data: {
    news: News_Info[];
  };
};
export type News_Info = {
  t_id: number;
  title: string;
  type: string;
  tag: string;
  u_id: number;
  create_time: string;
  update_time: string;
  publish_time: string;
  status: number;
  content_id: number;
};

/** 获取新闻列表 */
export const getNews = (data?: object) => {
  return http.request<NewsResult>("post", "/getNews", { data });
};

export const saveNews = (data?: object) => {
  return http.request<NewsResult>("post", "/saveNews", { data });
};

export const delNews = (data?: object) => {
  return http.request<NewsResult>("post", "/delNews", { data });
};

export const updateNews = (data?: object) => {
  return http.request<NewsResult>("post", "/updateNews", { data });
};
