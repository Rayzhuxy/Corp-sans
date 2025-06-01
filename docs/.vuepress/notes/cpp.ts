import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "cpp",
  link: "/cpp/",
  sidebar: [
    "README.md",
    {
      text: "二、C++核心编程",
      prefix: "core",
      items: [
        "1-内存分区模型.md",
        "2-引用.md",
        "3-函数提高.md",
        "4-类和对象.md",
        "5-文件操作.md",
      ],
    },
    "test1",
  ],
});
