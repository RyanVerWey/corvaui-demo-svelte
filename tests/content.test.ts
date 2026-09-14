import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { routes, siteRows, planRows, generationData, districtData } from "../src/lib/content";

describe("Common Ground Energy demo contract", () => {
  it("registers CorvaUI through the client-only Svelte integration", () => {
    const registration = readFileSync(new URL("../src/lib/corva.ts", import.meta.url), "utf8");
    const layout = readFileSync(new URL("../src/routes/+layout.svelte", import.meta.url), "utf8");
    expect(registration).toContain('from "@corvaui/svelte"');
    expect(registration).toContain("registerCorvaUI()");
    expect(registration).not.toContain("@corvaui/web-components/components");
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
      expect(point.value).toBeGreaterThanOrEqual(0);
      expect(point.value).toBeLessThanOrEqual(100);
    }
  });
});
