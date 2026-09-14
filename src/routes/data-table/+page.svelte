<script lang="ts">
  import { onMount } from "svelte";
  import { siteColumns, siteRows } from "$lib/content";
  import { prepareScrollableTables } from "$lib/table-accessibility";
  let siteGrid: HTMLElement;
  onMount(async () => {
    await customElements.whenDefined("corva-data-grid");
    Object.assign(siteGrid, { columns: siteColumns, rows: siteRows });
    prepareScrollableTables();
  });
</script>

<header class="page-hero data-hero">
  <div>
    <corva-badge tone="success">Synthetic network · 18 sites</corva-badge>
    <corva-typography as="h1" variant="display">Community energy sites</corva-typography>
    <corva-typography variant="body">Scan generation, storage, current contribution, and resilience state across the cooperative network.</corva-typography>
  </div>
  <div class="data-summary" aria-label="Network summary">
    <span><strong>8.6 MW</strong> local capacity</span>
    <span><strong>14.2 MWh</strong> shared storage</span>
    <span><strong>99.97%</strong> availability</span>
  </div>
</header>

<section class="grid-shell" aria-label="Community energy site records">
  <corva-data-grid bind:this={siteGrid} caption="Active community energy sites" sortable filterable pageable page-size="6"></corva-data-grid>
</section>

<corva-alert tone="info" heading="DataGrid proof">Svelte assigns arrays and objects as custom-element properties. CorvaUI supplies sorting, filtering, pagination, token themes, and accessible table behavior.</corva-alert>
