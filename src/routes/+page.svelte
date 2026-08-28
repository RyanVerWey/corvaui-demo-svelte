<script lang="ts">
import { base } from "$app/paths";
import { corvaProps } from "$lib/corva";

const proofPoints = [
  { label: "Same-day dispatch", value: 91 },
  { label: "First-visit close", value: 84 },
  { label: "Invoice accuracy", value: 97 }
];

const customerRows = [
  { region: "Blue Ridge", crews: 28, promise: "4 hour response", status: "Expanding" },
  { region: "Piedmont", crews: 16, promise: "Next shift", status: "Stable" },
  { region: "Cape Fear", crews: 22, promise: "Same day", status: "Pilot" }
];

const customerColumns = [
  { key: "region", header: "Region" },
  { key: "crews", header: "Crews" },
  { key: "promise", header: "Service promise" },
  { key: "status", header: "Status" }
];
</script>

<svelte:head>
  <title>CorvaUI Field Services</title>
</svelte:head>

<section class="hero-band">
  <div class="hero-copy">
    <corva-stack gap="lg">
      <corva-badge tone="success">Regional field operations</corva-badge>
      <corva-typography as="h1" variant="display">
        Premium service teams, routed with fewer handoffs.
      </corva-typography>
      <corva-typography variant="body">
        CorvaUI Field Services coordinates maintenance visits, warranty work, and account follow-up for operators that need a tighter daily cadence.
      </corva-typography>
      <div class="action-row">
        <corva-button>Schedule operations review</corva-button>
        <corva-button variant="secondary">View proof pack</corva-button>
        <corva-link href={`${base}/dashboard`} variant="standalone">Open live metrics</corva-link>
      </div>
    </corva-stack>
  </div>

  <corva-paper elevation="sm">
    <div class="operations-snapshot">
      <div class="snapshot-header">
        <corva-badge tone="info">Today</corva-badge>
        <corva-typography as="h2" variant="title">Charlotte dispatch board</corva-typography>
      </div>
      <corva-progress label="Route capacity booked" value="78"></corva-progress>
      <corva-progress label="Parts matched before roll-out" value="88"></corva-progress>
      <corva-progress label="Customer ETA confirmations" value="93"></corva-progress>
      <corva-alert tone="success" heading="Crew 14 recovered">
        Warranty visit moved ahead after parts scan matched truck stock.
      </corva-alert>
    </div>
  </corva-paper>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Offer" heading="Managed field cadence">
    Route planning, customer commitments, crew readiness, and billing proof share one operational record.
  </corva-card>
  <corva-card eyebrow="Operators" heading="Built for regional scale">
    Dispatch leads, account managers, and field supervisors see the same status without spreadsheet relays.
  </corva-card>
  <corva-card eyebrow="Outcome" heading="Cleaner handoffs">
    Each job carries service promise, site notes, safety checks, and completion evidence into the next step.
  </corva-card>
</section>

<section class="split-grid">
  <corva-chart label="Customer proof" use:corvaProps={{ data: proofPoints }}></corva-chart>
  <corva-data-table
    caption="Regional proof accounts"
    use:corvaProps={{ columns: customerColumns, rows: customerRows }}
  ></corva-data-table>
</section>

<section class="section-stack">
  <div class="section-heading">
    <corva-typography as="h2" variant="title">What CorvaUI sells</corva-typography>
    <corva-badge tone="neutral">Website plus app demo</corva-badge>
  </div>
  <div class="content-grid two">
    <corva-paper elevation="sm">
      <corva-stack gap="md">
        <corva-typography as="h3" variant="subtitle">Marketing surface</corva-typography>
        <corva-typography variant="body">
          Home page presents a concrete business story instead of a component catalog.
        </corva-typography>
      </corva-stack>
    </corva-paper>
    <corva-paper elevation="sm">
      <corva-stack gap="md">
        <corva-typography as="h3" variant="subtitle">Application surface</corva-typography>
        <corva-typography variant="body">
          Routed pages show dashboard, records, forms, settings, and integration proof as real workflows.
        </corva-typography>
      </corva-stack>
    </corva-paper>
  </div>
</section>
