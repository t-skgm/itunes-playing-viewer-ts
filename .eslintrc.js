const path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "react-app"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": path.resolve(__dirname, './tsconfig.json'),
    "tsconfigRootDir": __dirname,
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "globals": {
    "process": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {"property": "freeze", "object": "Object"},
      {"property": "myFavoriteWrapper"}
    ]
  },
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "printWidth": 120,
        "singleQuote": true,
        "trailingComma": "none",
        "semi": false
      }
    ],
    "arrow-parens": "off",
    "curly": ["error", "multi-line"],
    "interface-name": "off",
    "jsx-boolean-value": "off",
    "no-console": "off",
    "no-empty-interface": "off",
    "no-empty": ["off"],
    "no-implicit-dependencies": "off",
    "no-submodule-imports": "off",
    "no-unused-vars": "off",
    "no-var-requires": "off",
    "object-literal-sort-keys": "off",
    "ordered-imports": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "off"
  }
};
