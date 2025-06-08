import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unknown-property": "off", // disables warning for <motion.div />
      "react/style-prop-object": "off", // disables warning for dynamic `style={{ ... }}`
      "@typescript-eslint/no-empty-object-type": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
