import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import reactConfig from "./react.js";

export default [
    ...reactConfig,
    ...pluginRouter.configs["flat/recommended"],
    ...pluginQuery.configs["flat/recommended"],
];
