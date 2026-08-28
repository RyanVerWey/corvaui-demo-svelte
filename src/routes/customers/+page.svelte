<script lang="ts">
import { corvaProps } from "$lib/corva";

const customerColumns = [
  { key: "account", header: "Account" },
  { key: "owner", header: "Owner" },
  { key: "stage", header: "Stage" },
  { key: "value", header: "Value" },
  { key: "next", header: "Next step" }
];

const customerRows = [
  { account: "Harris Medical", owner: "Mina", stage: "Renewal", value: "$128K", next: "Scope north campus" },
  { account: "Arbor Ridge HOA", owner: "Cole", stage: "Expansion", value: "$74K", next: "Review irrigation SLA" },
  { account: "Forge Foods", owner: "Drew", stage: "Pilot", value: "$46K", next: "Safety walkthrough" },
  { account: "Cedarline Bank", owner: "Mina", stage: "Steady", value: "$92K", next: "Quarterly proof pack" }
];

const pipelineColumns = [
  {
    id: "new",
    title: "New",
    items: [
      { id: "lead-1", title: "Municipal water district", meta: "$58K" },
      { id: "lead-2", title: "Retail freezer network", meta: "$41K" }
    ]
  },
  {
    id: "active",
    title: "Active",
    items: [
      { id: "active-1", title: "Forge Foods pilot", meta: "Site visit" },
      { id: "active-2", title: "Arbor Ridge expansion", meta: "SLA review" }
    ]
  },
  {
    id: "won",
    title: "Won",
    items: [
      { id: "won-1", title: "Harris Medical renewal", meta: "Legal review" },
      { id: "won-2", title: "Cedarline proof pack", meta: "Quarterly" }
    ]
  }
];
</script>

<svelte:head>
  <title>Customers | CorvaUI Operations</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Customer records</corva-badge>
    <corva-typography as="h1" variant="display">Pipeline and account memory.</corva-typography>
    <corva-typography variant="body">
      Sales, service, and account teams can inspect commitments without leaving the operating workspace.
    </corva-typography>
  </corva-stack>
  <corva-search-form label="Search customers" placeholder="Account, owner, region" submit-label="Search"></corva-search-form>
</section>

<section class="split-grid">
  <corva-card eyebrow="Pipeline" heading="Regional opportunities">
    <corva-workflow-board use:corvaProps={{ columns: pipelineColumns }}></corva-workflow-board>
  </corva-card>
  <corva-card eyebrow="Selected account" heading="Harris Medical">
    <corva-stack gap="md">
      <div class="identity-row">
        <corva-avatar initials="HM" alt="Harris Medical"></corva-avatar>
        <div>
          <corva-typography as="h2" variant="subtitle">North campus contract</corva-typography>
          <corva-typography variant="caption">Renewal due July 2026</corva-typography>
        </div>
      </div>
      <corva-progress label="Proof package readiness" value="86"></corva-progress>
      <corva-rating label="Relationship strength" value="4" max="5"></corva-rating>
      <corva-alert tone="success" heading="Next best action">
        Bring first-visit close rate and after-hours coverage data into renewal review.
      </corva-alert>
    </corva-stack>
  </corva-card>
</section>

<section class="section-stack">
  <div class="section-heading">
    <corva-typography as="h2" variant="title">Customer records</corva-typography>
    <corva-pagination label="Customer pages" count="8" page="1"></corva-pagination>
  </div>
  <corva-data-grid
    caption="Customer pipeline records"
    use:corvaProps={{ columns: customerColumns, rows: customerRows }}
  ></corva-data-grid>
</section>
