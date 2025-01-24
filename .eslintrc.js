// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  ignorePatterns: ["/dist/*"],
  overrides: [
    files: ["*.js", "*.jsx"],
    rules: {
      "no-unused-vars": "off",
      "react/prop-types": "off",
    },
  ]
};
