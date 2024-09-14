import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.DS_Store",
        "**/.cache/",
        "**/.next/**/*",
        "**/node_modules/",
        "**/build/",
        "**/coverage/",
        "**/lib/",
        "**/*.d.ts",
        "**/*.min.js",
        "**/*.map",
        "**/*.snap",
        "**/pnpm-lock.yaml",
        "**/package-lock.json",
        "**/yarn.lock",
    ],
}, ...compat.extends("moon", "moon/node", "moon/react", 'node'), {
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "tsconfig.eslint.json",
            tsconfigRootDir: __dirname,
        },
    },

    rules: {
        "import/no-unresolved": "off",
        "import/no-useless-path-segments": "off",
        "no-console": "error",
    },
}, {
    files: ["app/*.tsx", "app/*.tx", " app/*.js", "app/*.jsx"],

    rules: {
        "import/no-default-export": "off",
        "unicorn/prefer-module": "off",
        "unicorn/import-index":
            [{"ignoreImports": true}]
    },
}, {
    files: ["**/*.config.js", "**/.eslintrc.js"],

    rules: {
        "sort-keys": "off",
        "import/no-commonjs": "off",
        "unicorn/prefer-module": "off",
        "unicorn/import-index":
            [{"ignoreImports": true}]
    },
}];