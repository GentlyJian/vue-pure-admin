<template>
  <el-dialog v-model="visible" :title="title" align-center>
    <el-form
      ref="newsFormRef"
      :model="newsForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="newsForm.title" />
      </el-form-item>
      <el-form-item label="文章类型" prop="type">
        <el-select v-model="newsForm.type" placeholder="请选择文章类型">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="文章标签" prop="tag">
        <el-select-v2
          style="width: 240px"
          multiple
          v-model="newsForm.tag"
          :options="options"
          placeholder="请选择文章标签"
        />
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <el-input
          v-model="newsForm.content"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入文章内容"
          maxlength="500"
          show-word-limit
        />
      </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="submitForm(newsFormRef)">
          Create
        </el-button>
        <el-button @click="cancel(newsFormRef)">Reset</el-button>
      </el-form-item> -->
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel(newsFormRef)">取消</el-button>
        <el-button type="primary" @click="submitForm(newsFormRef)">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, unref, getCurrentInstance } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { updateNews, saveNews } from "@/api/news";

type EpPropMergeType = "" | "default" | "small" | "large";
const visible = ref(false);
const title = ref("新增新闻");
const props = defineProps({ content_id: Number });
const emit = defineEmits(["init"]);
const {
  appContext: {
    config: { globalProperties: _this }
  }
} = getCurrentInstance();
// _this.$message({
//   type: "success",
//   message: "this is a message."
// });
watch(
  () => props.content_id,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
const formSize = ref<EpPropMergeType>("default");
const newsFormRef = ref<FormInstance>();
const newsForm = reactive({
  t_id: 0,
  title: "",
  type: "",
  tag: [1],
  resource: "",
  content_id: "",
  content: ""
});

const rules = reactive<FormRules>({
  title: [
    { required: true, message: "请输入标题", trigger: "blur" },
    { min: 3, max: 25, message: "长度应该在3-25个字", trigger: "blur" }
  ],
  type: [
    {
      required: true,
      message: "请选择文章类型",
      trigger: "change"
    }
  ],
  tag: [
    {
      type: "array",
      required: true,
      message: "请选择文章标签",
      trigger: "change"
    }
  ],
  content: [
    {
      required: true,
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error("请输入文章内容"));
        } else if (value === "#") {
          return new Error("error character");
        } else if (value.length < 5 || value.length > 500) {
          callback(new Error("文章内容请控制在5-500字"));
        } else {
          callback();
        }
      },
      trigger: "blur"
      // max: 50,
      // min: 10
    }
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const fn = title.value === "新增新闻" ? saveNewsApi : updateNewsApi;
      const params = { news: { ...newsForm } };
      await fn(params);
      console.log("submit!");
      await emit("init");
      _this.$message.success("接口调用成功");
      setTimeout(() => {
        visible.value = false;
      }, 2000);
    } else {
      console.log("error submit!", fields);
      _this.$message.error("字段校验失败");
      // visible.value = false;
    }
  });
};

const cancel = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  unref(formEl).resetFields();
  visible.value = false;
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}));
const updateNewsApi = async params => {
  await updateNews(params);
};
const saveNewsApi = async params => {
  await saveNews(params);
};
defineExpose({ visible, title, newsForm });
</script>
<style scoped lang="less"></style>
