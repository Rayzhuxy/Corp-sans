import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "HouJie",
  link: "/HouJie/",
  sidebar: [
    "README.md",
    {
      text: "C++面向对象高级开发",
      prefix: "1",
      items: ["base.md"],
    },
  ],
});
