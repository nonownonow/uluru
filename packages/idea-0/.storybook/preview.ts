const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      transform: (code) => code.replace(/data-testid=".+?"/g, ""),
    },
  },
};

export default preview;
