import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: [
      "sort-keys-fix",
      // Add other plugins here
    ],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }], // Disallow console.log but allow console.warn and console.error
      "no-undef": "off",
      "no-unused-vars": "off",
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, natural: false, minKeys: 2 },
      ],
      "sort-keys-fix/sort-keys-fix": "error",
      // Add other rules here
    },
  },
];
