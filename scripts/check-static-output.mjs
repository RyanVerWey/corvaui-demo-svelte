import { readFileSync } from "node:fs";

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

console.log(`Verified prerendered content in ${expected.length} routes.`);
