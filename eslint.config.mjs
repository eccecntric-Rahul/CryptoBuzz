import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";

export default defineConfig([
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: {js}, extends: ["js/recommended"]},
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: {globals: globals.browser}},
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "indent": ["error", 2],
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]);
