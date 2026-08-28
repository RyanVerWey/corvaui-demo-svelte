import { describe, expect, it } from "vitest";
import { routes, siteRows, planRows, generationData, districtData } from "../src/lib/content";

describe("Common Ground Energy demo contract", () => {
  it("ships exactly the four required showcase routes", () => {
    expect(routes.map((route) => route.href)).toEqual(["/", "/about", "/data-table", "/dashboard"]);
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
