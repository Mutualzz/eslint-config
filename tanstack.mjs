import pluginQuery from "@tanstack/eslint-plugin-query";
import pluginRouter from "@tanstack/eslint-plugin-router";
import { react } from "./react.mjs";

export const tanstack = [
    ...react,
    pluginRouter.configs["flat/recommended"],
    pluginQuery.configs["flat/recommended"],
];