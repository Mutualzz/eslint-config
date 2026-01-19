import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { base } from "./base.mjs";

export const react = [
    ...base,
    pluginReact.configs.flat.recommended,
    pluginReact.configs.flat["jsx-runtime"],
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/no-unknown-property": ["error", { ignore: ["css"] }],
            "react/display-name": "off",
        },
    },
];
