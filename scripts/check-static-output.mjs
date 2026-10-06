import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const expected = [
  ["build/index.html", "The energy transition belongs on your block."],
  ["build/about.html", "A clean-energy plan with a place in the community."],
  ["build/data-table.html", "Community energy sites"],
  ["build/dashboard.html", "Impact you can trace back to a place."],
  ["build/steward.html", "Turn community priorities into funded projects."],
];

for (const [file, text] of expected) {
  const html = readFileSync(file, "utf8");
  if (!html.includes(text)) {
    throw new Error(`${file} is missing prerendered content: ${text}`);
  }
}

const collectJavaScript = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return collectJavaScript(path);
  return entry.isFile() && entry.name.endsWith(".js") ? [path] : [];
});

const lazyEntryReferences = collectJavaScript("build").filter((file) => readFileSync(file, "utf8").includes(".entry.js"));
if (lazyEntryReferences.length > 0) {
  throw new Error(`Static build still references missing lazy component entries:\n${lazyEntryReferences.join("\n")}`);
}

console.log(`Verified prerendered content in ${expected.length} routes with no lazy component entry references.`);
