const config = {
  stories: [
    {
      directory: "../packages",
      files: "**/*.stories.@(js|jsx|ts|tsx)",
    },
    {
      directory: "../packages",
      files: "**/*.mdx",
    },
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
