<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { planColumns, planRows } from "$lib/content";
  import { prepareScrollableTables } from "$lib/table-accessibility";
  let planTable: HTMLElement;
  onMount(async () => {
    await customElements.whenDefined("corva-data-table");
    Object.assign(planTable, { columns: planColumns, rows: planRows });
    prepareScrollableTables();
  });
</script>

<header class="page-hero">
  <div>
    <corva-badge tone="warning">Member programs</corva-badge>
    <corva-typography as="h1" variant="display">A clean-energy plan with a place in the community.</corva-typography>
    <corva-typography variant="body">Choose a participation level based on your home, resilience needs, and appetite for local stewardship.</corva-typography>
  </div>
  <figure class="page-photo">
    <img src="{base}/images/common-ground-home.jpg" alt="Home with rooftop solar surrounded by a planted neighborhood garden" width="1600" height="900" loading="lazy" />
    <figcaption><span>Common to every plan</span><strong>One member, one vote.</strong></figcaption>
  </figure>
</header>

<section class="table-section" aria-labelledby="plans-title">
  <div class="section-heading compact">
    <corva-typography id="plans-title" as="h2" variant="title">Program comparison</corva-typography>
    <p>Three ways to participate, all tied to the same local network.</p>
  </div>
  <corva-data-table bind:this={planTable} caption="Common Ground member programs"></corva-data-table>
</section>

<section class="program-notes" aria-label="Program guidance">
  <article><span>Neighbor</span><h2>Start local</h2><p>For renters and homeowners who want a direct share in nearby solar without installing equipment.</p></article>
  <article><span>Resilience</span><h2>Protect the whole home</h2><p>For members pairing community generation with dedicated outage support and deeper usage insight.</p></article>
  <article><span>Steward</span><h2>Lead a site</h2><p>For schools, businesses, associations, and institutions hosting shared energy infrastructure.</p></article>
</section>

<section class="principle-band">
  <div><small>Cooperative principle 06</small><h2>Value follows participation, not consumption alone.</h2></div>
  <corva-link href={`${base}/data-table`} variant="button">Explore active sites</corva-link>
</section>
