import js from "@eslint/js";
import globals from "globals";

export default [
  // Third-party library (blueimp JavaScript-MD5), not our code
  { ignores: ["public/js/md5.js"] },
  js.configs.recommended,
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: { ...globals.browser },
    },
  },
];
