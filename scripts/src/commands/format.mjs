// @ts-check

import { runScript } from "../process.mjs";

/** @type {import("../process.mjs").Command} */
export default async function format() {
  await runScript(
    "prettier",
    "--write",
    "--trailing-comma",
    "es5",
    "--log-level",
    "error",
    "**/*.{js,json,jsx,md,ts,tsx,yml}",
    "!{CODE_OF_CONDUCT,SECURITY}.md",
    "!**/{__fixtures__,lib}/**",
    "!**/CHANGELOG.*"
  );
}
