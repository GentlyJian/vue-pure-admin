<template>
  <div>
    <div class="bg-white border-gray-200 p-5 flex">
      <div>
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </div>
      <div class="ml-10">
        <el-button type="success" @click="initData">搜索</el-button>
      </div>
    </div>
    <el-table :data="pageList" border>
      <el-table-column prop="t_id" label="id" />
      <el-table-column prop="title" label="标题">
        <template #default="{ row, $index }">
          {{ `${row.title} | ${$index + pageSize * (pageNum - 1) + 1}` }}
        </template>
      </el-table-column>
      <el-table-column prop="type" label="文章类型" />
      <el-table-column prop="tag" label="文章标签" />
      <el-table-column prop="u_id" label="作者" />
      <el-table-column
        prop="create_time"
        label="创建时间"
        :formatter="formatTime"
      />
      <el-table-column
        prop="publish_time"
        label="发布时间"
        :formatter="formatTime"
      />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="statusTag[scope.row.status].type">{{
            statusTag[scope.row.status].label
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-popover
            placement="top"
            :width="260"
            :ref="
              ref => {
                delBtnArrtRef[scope.$index] = ref;
              }
            "
            trigger="click"
          >
            <p>确认删除该数据</p>
            <div>
              <el-button
                size="small"
                type="primary"
                @click="$event => handleCancel(scope.$index)"
                >取消</el-button
              >
              <el-button
                size="small"
                text
                @click="$event => handleDelete(scope.$index, scope.row)"
                >确认</el-button
              >
            </div>
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next, total, sizes"
      :total="total"
      :current-page="pageNum"
      :page-size="pageSize"
      :page-sizes="[5, 10, 50]"
      class="mt-4 float-right"
      @size-change="pageSizeChange"
      @current-change="pageChange"
    />
    <NewsForm ref="newsFormRef" :content_id="content_id" @init="initData" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, unref, defineComponent } from "vue";
import { getNews, delNews } from "@/api/news";
import type { TagProps } from "element-plus";
import dayjs from "dayjs";

import NewsForm from "./NewsForm.vue";
defineComponent(NewsForm);
const newsFormRef = ref(null);
type Item = { type: TagProps["type"]; label: string };
interface IstatusTag {
  [propName: number]: Item;
}
const delBtnArrtRef = ref([]);
const list = ref<any[]>([]);
const total = ref<number>(0);
const pageSize = ref<number>(5);
const pageNum = ref<number>(1);
const content_id = ref<number>(0);
const statusTag: IstatusTag = {
  "-1": { type: "warning", label: "已下架" },
  "0": { type: "warning", label: "已下架" },
  "1": { type: "warning", label: "已下架" }
};
const pageList = computed(() => {
  const s_list = list.value.slice(
    (pageNum.value - 1) * pageSize.value,
    pageSize.value * pageNum.value
  );
  console.log(s_list);
  return s_list;
});
onMounted(async () => {
  await loadData({ u_id: 1 });
});
const initData = async () => {
  await loadData({ u_id: 1 });
};
const loadData = async (params?) => {
  const res = await getNews(params);
  list.value = res.data.news;
  total.value = list.value.length;
};
const pageChange = value => {
  pageNum.value = value;
  loadData({ u_id: 1 });
};
const pageSizeChange = value => {
  pageSize.value = value;
  loadData({ u_id: 1 });
};
// 格式化时间
const formatTime = (row, _column, _cellValue, _index) => {
  return dayjs(_cellValue).format("YYYY-MM-DD HH:mm:ss");
};
const handleEdit = (_index, _info) => {
  newsFormRef.value.visible = true;
  newsFormRef.value.title = "编辑新闻";
  content_id.value = _info.content_id;
  newsFormRef.value.newsForm = Object.assign(newsFormRef.value.newsForm, _info);
  console.log(newsFormRef.value.newsForm);
};
const handleAdd = () => {
  newsFormRef.value.visible = true;
  newsFormRef.value.title = "新增新闻";
};
const handleDelete = async (_index?, _info?) => {
  const { t_id } = _info;
  await delNews({ t_id, u_id: 1 });
  unref(delBtnArrtRef)[_index].hide();
  await loadData({ u_id: 1 });
};
const handleCancel = (_index?) => {
  unref(delBtnArrtRef)[_index].hide();
};
</script>
<style scoped lang="less"></style>
