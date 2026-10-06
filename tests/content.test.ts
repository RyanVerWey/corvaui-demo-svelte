import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { routes, siteRows, planRows, generationData, districtData } from "../src/lib/content";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const routeRoot = fileURLToPath(new URL("../src/routes", import.meta.url));

const collectSvelteSources = (directory: string): string[] => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) return collectSvelteSources(path);
  return entry.isFile() && entry.name.endsWith(".svelte") ? [readFileSync(path, "utf8")] : [];
});

const definitionName = (tag: string) => `define${tag.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("")}`;

describe("Common Ground Energy demo contract", () => {
  it("registers CorvaUI through the client-only Svelte integration", () => {
    const registration = readFileSync(new URL("../src/lib/corva.ts", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../src/routes/+layout.svelte", import.meta.url), "utf8");
    expect(pkg.dependencies["@corvaui/svelte"]).toBe("^0.2.1");
    expect(pkg.dependencies["@corvaui/web-components"]).toBeUndefined();
    expect(pkg.dependencies["@corvaui/tokens"]).toBe("^0.2.1");
    expect(registration).toContain('from "@corvaui/svelte/components"');
    expect(registration).not.toContain("registerCorvaUI");
    expect(registration).not.toContain("@corvaui/web-components/components");
    const componentTags = [...new Set(collectSvelteSources(routeRoot).flatMap((source) =>
      [...source.matchAll(/<(corva-[a-z-]+)/g)].map((match) => match[1]),
    ))];
    for (const tag of componentTags) {
      expect(registration).toContain(`${definitionName(tag)}();`);
    }
    expect(layout).toContain('await import("$lib/corva")');
  });
  it("ships the complete showcase route set", () => {
    expect(routes.map((route) => route.href)).toEqual(["/", "/about", "/data-table", "/dashboard", "/steward"]);
  });
  it("uses unique site names and enough data for paging", () => {
    const names = siteRows.map((row) => row.site);
    expect(new Set(names).size).toBe(names.length);
    expect(siteRows.length).toBeGreaterThanOrEqual(8);
    expect(planRows.length).toBeGreaterThanOrEqual(5);
  });
  it("keeps report values in valid percentage ranges", () => {
    for (const point of [...generationData, ...districtData]) {
      for (const value of Object.values(point).filter((entry): entry is number => typeof entry === "number")) {
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(100);
      }
    }
    expect(Object.keys(districtData[0]).filter((key) => key !== "label")).toHaveLength(3);
  });
});
