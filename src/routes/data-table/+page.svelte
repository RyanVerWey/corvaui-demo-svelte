<script lang="ts">
import { corvaProps } from "$lib/corva";

const serviceRecordColumns = [
  { key: "id", header: "Record", sortable: true, filterable: true },
  { key: "account", header: "Account", sortable: true, filterable: true },
  { key: "region", header: "Region", sortable: true, filterable: true },
  { key: "owner", header: "Owner", sortable: true, filterable: true },
  { key: "priority", header: "Priority", sortable: true, filterable: true },
  { key: "status", header: "Status", sortable: true, filterable: true },
  { key: "window", header: "Window", sortable: true, filterable: true }
];

const serviceRecordRows = [
  { id: "SR-2101", account: "Harris Medical", region: "Charlotte", owner: "Mina Patel", priority: "High", status: "En route", window: "08:00-10:00" },
  { id: "SR-2102", account: "Arbor Ridge HOA", region: "Piedmont", owner: "Cole Reed", priority: "Normal", status: "Parts hold", window: "10:00-12:00" },
  { id: "SR-2103", account: "Forge Foods", region: "Triad", owner: "Drew Lane", priority: "Critical", status: "Confirmed", window: "13:00-15:00" },
  { id: "SR-2104", account: "Cedarline Bank", region: "Uptown", owner: "Mina Patel", priority: "High", status: "Needs ETA", window: "15:00-17:00" },
  { id: "SR-2105", account: "Brightline College", region: "University", owner: "Cole Reed", priority: "Normal", status: "Scheduled", window: "09:30-11:30" },
  { id: "SR-2106", account: "Mason Street Retail", region: "South End", owner: "Drew Lane", priority: "High", status: "Closed", window: "12:30-14:30" }
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
  <title>Data Table | CorvaUI Operations</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Data operations</corva-badge>
    <corva-typography as="h1" variant="display">Service records without a demo shortcut.</corva-typography>
    <corva-typography variant="body">
      SvelteKit owns the route while CorvaUI custom elements handle dense records, filtering, paging, and proof metadata.
    </corva-typography>
  </corva-stack>
  <corva-button-group label="Data table actions">
    <corva-button size="sm" variant="secondary">Export CSV</corva-button>
    <corva-button size="sm">Save view</corva-button>
  </corva-button-group>
</section>

<corva-toolbar label="Service record tools">
  <corva-search-form label="Search service records" placeholder="Account, region, owner, status"></corva-search-form>
  <corva-badge tone="success">6 active records</corva-badge>
</corva-toolbar>

<section class="split-grid wide-left">
  <corva-data-grid
    caption="Service record queue"
    filterable
    sortable
    pageable
    page-size="4"
    use:corvaProps={{ columns: serviceRecordColumns, rows: serviceRecordRows }}
  ></corva-data-grid>

  <div class="section-stack">
    <corva-card eyebrow="Grid policy" heading="Route-owned context">
      <corva-stack gap="md">
        <corva-progress label="Closeout records with full evidence" value="84"></corva-progress>
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
