module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    semi: ["error", "never"],
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        printWidth: 100
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
}
