export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      secondary: "purple",
      neutral: "zinc",
    },
    // container: {
    //   base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8",
    // },
    tooltip: {
      slots: {
        content: "bg-(--ui-text) ring-(--ui-text-inverted) text-(--ui-bg-muted) font-medium ",
        arrow: "fill-(--ui-text) stroke-(--ui-text-inverted)",
        text: "",
        kbds: "",
        kbdsSize: "",
      },
    },
  },
});
