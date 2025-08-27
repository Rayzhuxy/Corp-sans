import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "JieHou",
  link: "/JieHou/",
  sidebar: [
    "README.md",
    {
      text: "笔记",
      prefix: "notes",
      items: [
        "对象模型.md",
        "基于对象 - 单一的 class.md",
        "面向对象 - class 与 class 之间的关系.md",
        "杂谈以及模板.md",
        "CP泛型算法.md",
        "CP关联容器.md",
        "CP顺序容器.md",
        "Primer.md",
        "README.md",
        "STL 与泛型编程.md",
      ],
    },
    {
      text: "C++面向对象高级开发",
      prefix: "1",
      items: ["base.md"],
    },
  ],
});
