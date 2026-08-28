<script lang="ts">
import { corvaProps } from "$lib/corva";

const routeHealth = [
  { label: "On-time arrivals", value: 92 },
  { label: "Jobs closed", value: 76 },
  { label: "At-risk promises", value: 14 },
  { label: "Parts ready", value: 87 }
];

const workOrderColumns = [
  { key: "id", header: "Order" },
  { key: "customer", header: "Customer" },
  { key: "crew", header: "Crew" },
  { key: "window", header: "Window" },
  { key: "status", header: "Status" }
];

const workOrderRows = [
  { id: "WO-1842", customer: "Harris Medical", crew: "Crew 14", window: "08:00-10:00", status: "En route" },
  { id: "WO-1843", customer: "Arbor Ridge HOA", crew: "Crew 8", window: "10:00-12:00", status: "Parts hold" },
  { id: "WO-1844", customer: "Forge Foods", crew: "Crew 21", window: "13:00-15:00", status: "Confirmed" },
  { id: "WO-1845", customer: "Cedarline Bank", crew: "Crew 3", window: "15:00-17:00", status: "Needs ETA" }
];

const workflowColumns = [
  {
    id: "intake",
    title: "Intake",
    items: [
      { id: "new-1", title: "Two HVAC warranty calls", meta: "High value" },
      { id: "new-2", title: "Elevator access notes missing", meta: "Account team" }
    ]
  },
  {
    id: "dispatch",
    title: "Dispatch",
    items: [
      { id: "disp-1", title: "Crew 14 to Harris Medical", meta: "Route locked" },
      { id: "disp-2", title: "Crew 8 waits on compressor", meta: "Parts hold" }
    ]
  },
  {
    id: "closeout",
    title: "Closeout",
    items: [
      { id: "done-1", title: "Bank alarm reset", meta: "Photos attached" },
      { id: "done-2", title: "HOA irrigation repair", meta: "Invoice ready" }
    ]
  }
];

const timelineEvents = [
  { id: "a", label: "06:42", description: "Overnight calls triaged into service promises.", meta: "Ops" },
  { id: "b", label: "07:15", description: "Truck stock scan completed for first wave.", meta: "Warehouse" },
  { id: "c", label: "08:05", description: "Dispatch lead approved route swaps.", meta: "Dispatch" }
];
</script>

<svelte:head>
  <title>Metrics Dashboard | CorvaUI Operations</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Operations dashboard</corva-badge>
    <corva-typography as="h1" variant="display">Morning service control</corva-typography>
    <corva-typography variant="body">
      Dispatch, account promises, and closeout readiness stay visible before the field day drifts.
    </corva-typography>
  </corva-stack>
  <corva-button-group label="Dashboard actions">
    <corva-button size="sm" variant="secondary">Export</corva-button>
    <corva-button size="sm">Refresh</corva-button>
  </corva-button-group>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Booked route time" heading="78%">
    <corva-progress label="Target 82%" value="78"></corva-progress>
  </corva-card>
  <corva-card eyebrow="Open risks" heading="11">
    <corva-progress label="Risk cleared" value="64"></corva-progress>
  </corva-card>
  <corva-card eyebrow="Invoice ready" heading="$42.8K">
    <corva-progress label="Closeout package complete" value="71"></corva-progress>
  </corva-card>
</section>

<section class="split-grid">
  <corva-chart label="Route health" use:corvaProps={{ data: routeHealth }}></corva-chart>
  <corva-card eyebrow="Workflow" heading="Today by stage">
    <corva-workflow-board use:corvaProps={{ columns: workflowColumns }}></corva-workflow-board>
  </corva-card>
</section>

<section class="split-grid">
  <corva-data-table
    caption="Active work orders"
    use:corvaProps={{ columns: workOrderColumns, rows: workOrderRows }}
  ></corva-data-table>
  <div class="section-stack">
    <corva-timeline use:corvaProps={{ events: timelineEvents }}></corva-timeline>
    <corva-alert tone="warning" heading="Capacity watch">
      Piedmont route has one crew open after 14:30. Keep urgent warranty calls there.
    </corva-alert>
  </div>
</section>
