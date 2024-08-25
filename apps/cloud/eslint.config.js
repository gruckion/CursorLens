import baseConfig, { restrictEnvAccess } from "@acme/eslint-config/base";
import nextjsConfig from "@acme/eslint-config/nextjs";
import reactConfig from "@acme/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];

// TODO: Review these and consider which we need to keep that are not available in the base config.
// Or those that should be made available in the base config.

// {
//   "$schema": "https://json.schemastore.org/eslintrc",
//   "root": true,
//   "extends": [
//     "next/core-web-vitals",
//     "prettier",
//     "plugin:tailwindcss/recommended"
//   ],
//   "plugins": ["tailwindcss"],
//   "rules": {
//     "@next/next/no-html-link-for-pages": "off",
//     "react/jsx-key": "off",
//     "tailwindcss/no-custom-classname": "off",
//     "tailwindcss/classnames-order": "error"
//   },
//   "settings": {
//     "tailwindcss": {
//       "callees": ["cn"],
//       "config": "tailwind.config.ts"
//     },
//     "next": {
//       "rootDir": true
//     }
//   },
//   "overrides": [
//     {
//       "files": ["*.ts", "*.tsx"],
//       "parser": "@typescript-eslint/parser"
//     }
//   ]
// }
