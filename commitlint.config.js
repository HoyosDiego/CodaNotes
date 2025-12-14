module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tu regla personalizada para el límite de longitud
    "header-max-length": [2, "always", 72],
  },
};
