<script lang="ts">
  import { onMount } from "svelte";
  import { generationData, districtData, impactColumns, impactRows, reportTabs } from "$lib/content";
  import { prepareScrollableTables } from "$lib/table-accessibility";
  let reportTabsElement: HTMLElement;
  let generationChart: HTMLElement;
  let districtChart: HTMLElement;
  let impactTable: HTMLElement;
  onMount(async () => {
    await Promise.all([
      customElements.whenDefined("corva-tabs"),
      customElements.whenDefined("corva-chart"),
      customElements.whenDefined("corva-data-table"),
    ]);
    Object.assign(reportTabsElement, { items: reportTabs });
    Object.assign(generationChart, { data: generationData });
    Object.assign(districtChart, { data: districtData });
    Object.assign(impactTable, { columns: impactColumns, rows: impactRows });
    prepareScrollableTables();
  });
</script>

<header class="page-hero reports-hero">
  <div>
    <corva-badge tone="warning">Synthetic August member report</corva-badge>
    <corva-typography as="h1" variant="display">Impact you can trace back to a place.</corva-typography>
    <corva-typography variant="body">Generation, resilience, member savings, and local carbon impact share one readable report.</corva-typography>
  </div>
  <corva-tabs bind:this={reportTabsElement} label="Report period" active-id="month"></corva-tabs>
</header>

<section class="metric-ribbon" aria-label="Community impact metrics">
  <article><span>Local generation</span><strong>2.84 GWh</strong><small>+11% vs. plan</small></article>
  <article><span>Member credits</span><strong>$84,140</strong><small>August earned</small></article>
  <article><span>Peak reduced</span><strong>18.6%</strong><small>network-wide</small></article>
  <article><span>Carbon avoided</span><strong>624 t</strong><small>CO2e this year</small></article>
</section>

<section class="chart-layout">
  <corva-paper><corva-chart bind:this={generationChart} label="Energy source mix"></corva-chart></corva-paper>
  <corva-paper><corva-chart bind:this={districtChart} label="District local energy share"></corva-chart></corva-paper>
</section>

<section class="report-layout" aria-labelledby="district-title">
  <div>
    <div class="section-heading compact">
      <corva-typography id="district-title" as="h2" variant="title">District impact</corva-typography>
      <p>Member reach and value returned by neighborhood.</p>
    </div>
    <corva-data-table bind:this={impactTable} caption="District impact report"></corva-data-table>
  </div>
  <div class="report-aside">
    <figure class="report-photo"><img src="/images/common-ground-array.jpg" alt="Community solar array producing power under a clear sky" width="1600" height="1067" loading="lazy" /></figure>
    <corva-card eyebrow="Board recommendation" heading="Fund the Harbor Pump battery">Peak reduction at South Basin can protect water service and return an estimated $42K annually.</corva-card>
    <corva-progress label="Annual member credit goal" value="78"></corva-progress>
    <corva-alert tone="warning" heading="Public vote opens Monday">Members will rank three resilience projects for the 2027 capital plan.</corva-alert>
  </div>
</section>
