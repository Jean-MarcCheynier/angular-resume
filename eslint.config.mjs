import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import sortKeysFix from "eslint-plugin-sort-keys-fix"; // Import the plugin

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "sort-keys-fix": sortKeysFix,
    },

    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }], // Disallow console.log but allow console.warn and console.error
      "no-undef": "off",
      "no-unused-vars": "off",
      "sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, minKeys: 2, natural: false },
      ],
      "sort-keys-fix/sort-keys-fix": "error",
      // Add other rules here
    },
  },
];
