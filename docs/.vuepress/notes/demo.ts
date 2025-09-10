import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  dir: "demo",
  link: "/demo/",
  sidebar: ["README.md", "foo", "bar"],
});
