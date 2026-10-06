<script lang="ts">
  import { onMount } from "svelte";
  import { stewardshipTimeline, stewardshipWorkflow } from "$lib/content";

  let workflow: HTMLElement;
  let timeline: HTMLElement;
  let projectSelect: HTMLElement;

  onMount(async () => {
    await Promise.all([
      customElements.whenDefined("corva-workflow-board"),
      customElements.whenDefined("corva-timeline"),
      customElements.whenDefined("corva-select"),
    ]);
    Object.assign(workflow, { columns: stewardshipWorkflow });
    Object.assign(timeline, { events: stewardshipTimeline });
    Object.assign(projectSelect, { options: [
      { label: "Harbor Pump battery", value: "harbor" },
      { label: "Maple School canopy", value: "maple" },
      { label: "Library storage", value: "library" },
    ] });
  });
</script>

<svelte:head><title>Steward workspace | Common Ground Energy</title></svelte:head>

<header class="page-hero steward-hero">
  <div>
    <corva-badge tone="success">Synthetic governance workspace</corva-badge>
    <corva-typography as="h1" variant="display">Turn community priorities into funded projects.</corva-typography>
    <corva-typography variant="body">Model value, collect review, publish evidence, and move each resilience investment through a transparent decision path.</corva-typography>
  </div>
  <div class="steward-summary" aria-label="Stewardship summary">
    <span><strong>3</strong>active proposals</span>
    <span><strong>62%</strong>members reached</span>
    <corva-badge tone="warning">Vote in 4 days</corva-badge>
  </div>
</header>

<section class="steward-layout" aria-labelledby="proposal-title">
  <corva-paper>
    <corva-stack gap="md">
      <corva-typography id="proposal-title" as="h2" variant="title">Proposal workspace</corva-typography>
      <corva-select bind:this={projectSelect} label="Project" value="harbor"></corva-select>
      <corva-text-field label="Proposal owner" value="Leila Morgan"></corva-text-field>
      <corva-date-picker label="Vote opens" value="2026-09-02"></corva-date-picker>
      <corva-slider label="Reserve allocation" min="10" max="50" value="28"></corva-slider>
      <corva-switch label="Publish benefit model with proposal" checked></corva-switch>
      <corva-alert tone="info" heading="Modeled value">This project protects water service for 8.4 hours and returns an estimated $42K annually.</corva-alert>
      <corva-button>Publish for member review</corva-button>
    </corva-stack>
  </corva-paper>
  <corva-paper>
    <corva-stack gap="md">
      <corva-typography as="h2" variant="title">Decision record</corva-typography>
      <corva-timeline bind:this={timeline}></corva-timeline>
    </corva-stack>
  </corva-paper>
</section>

<section class="table-section" aria-labelledby="steward-workflow-title">
  <div class="section-heading compact">
    <corva-typography id="steward-workflow-title" as="h2" variant="title">Capital workflow</corva-typography>
    <p>Every project carries a public stage, accountable owner, and next decision.</p>
  </div>
  <corva-workflow-board bind:this={workflow}></corva-workflow-board>
</section>
