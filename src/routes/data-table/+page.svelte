<script lang="ts">
import { corvaProps } from "$lib/corva";

const scheduleColumns = [
  { key: "id", header: "Visit", sortable: true, filterable: true },
  { key: "patient", header: "Patient", sortable: true, filterable: true },
  { key: "clinic", header: "Clinic", sortable: true, filterable: true },
  { key: "provider", header: "Provider", sortable: true, filterable: true },
  { key: "type", header: "Type", sortable: true, filterable: true },
  { key: "status", header: "Status", sortable: true, filterable: true },
  { key: "time", header: "Time", sortable: true, filterable: true }
];

const scheduleRows = [
  { id: "VC-2101", patient: "Mara Ellis", clinic: "Northside", provider: "Dr. Rowan", type: "Primary care", status: "Ready", time: "08:20" },
  { id: "VC-2102", patient: "Sam Brooks", clinic: "Rivergate", provider: "NP Carter", type: "Pediatrics", status: "Waiting", time: "09:10" },
  { id: "VC-2103", patient: "Ravi Patel", clinic: "Oak Hill", provider: "Dr. Imani", type: "Chronic care", status: "Roomed", time: "10:00" },
  { id: "VC-2104", patient: "Talia Nguyen", clinic: "Rivergate", provider: "PA Simmons", type: "Urgent care", status: "Delayed", time: "10:40" },
  { id: "VC-2105", patient: "Elena Cruz", clinic: "Northside", provider: "Dr. Rowan", type: "Lab review", status: "Scheduled", time: "11:30" },
  { id: "VC-2106", patient: "Owen Park", clinic: "Oak Hill", provider: "NP Carter", type: "Behavioral", status: "Checked in", time: "12:15" }
];

const auditColumns = [
  { key: "check", header: "Check" },
  { key: "result", header: "Result" },
  { key: "owner", header: "Owner" }
];

const auditRows = [
  { check: "Sortable columns", result: "Enabled", owner: "DataGrid" },
  { check: "Filter inputs", result: "Enabled", owner: "DataGrid" },
  { check: "Pagination", result: "4 per page", owner: "Route" },
  { check: "Theme", result: "mint-light / mint-dark", owner: "Layout" }
];
</script>

<svelte:head>
  <title>Schedule Table | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Schedule operations</corva-badge>
    <corva-typography as="h1" variant="display">Clinic schedule table.</corva-typography>
    <corva-typography variant="body">
      SvelteKit owns the route while CorvaUI custom elements handle dense visit records, filtering, paging, and proof metadata.
    </corva-typography>
  </corva-stack>
  <corva-button-group label="Schedule table actions">
    <corva-button size="sm" variant="secondary">Export CSV</corva-button>
    <corva-button size="sm">Save view</corva-button>
  </corva-button-group>
</section>

<corva-toolbar label="Schedule tools">
  <corva-search-form label="Search schedule" placeholder="Patient, clinic, provider, status"></corva-search-form>
  <corva-badge tone="success">6 visits</corva-badge>
</corva-toolbar>

<section class="split-grid wide-left">
  <corva-data-grid
    caption="Clinic visit queue"
    filterable
    sortable
    pageable
    page-size="4"
    use:corvaProps={{ columns: scheduleColumns, rows: scheduleRows }}
  ></corva-data-grid>

  <div class="section-stack">
    <corva-card eyebrow="Schedule policy" heading="Care-ready context">
      <corva-stack gap="md">
        <corva-progress label="Visits with chart prep complete" value="91"></corva-progress>
        <corva-alert tone="info" heading="Svelte integration">
          Arrays are assigned as element properties through the Corva helper so Stencil components receive typed data.
        </corva-alert>
      </corva-stack>
    </corva-card>
    <corva-data-table
      caption="Route acceptance checks"
      use:corvaProps={{ columns: auditColumns, rows: auditRows }}
    ></corva-data-table>
  </div>
</section>
