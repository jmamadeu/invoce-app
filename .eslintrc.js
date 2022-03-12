module.exports = {
  extends: [
    "@callstack/eslint-config/react",
    "plugin:react/jsx-runtime",
    "next/core-web-vitals"
  ],
  rules: {
    "prettier/prettier": ["error", { trailingComma: "none" }]
  }
};
