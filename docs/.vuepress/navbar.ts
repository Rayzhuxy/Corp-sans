import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  { text: "归档", link: "/blog/archives/" },
  {
    text: "笔记",
    items: [
      { text: "Demo", link: "/notes/demo/README.md" },
      { text: "程序猿", link: "/notes/程序猿/README.md" },
    ],
  },
]);
