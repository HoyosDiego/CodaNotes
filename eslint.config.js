const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,

  {
    ignores: ["dist/*"],
  },

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3}){1,2}$/]",
          message:
            "Error: Utiliza constantes de color importadas en lugar de valores hexadecimales codificados.",
        },
      ],

      "sort-keys": [
        "error",
        "asc",
        {
          caseSensitive: true,
          natural: true,
          minKeys: 6,
        },
      ],
    },
  },
]);
