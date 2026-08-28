<script lang="ts">
import { corvaProps } from "$lib/corva";

const packageColumns = [
  { key: "package", header: "Package" },
  { key: "usage", header: "Usage" },
  { key: "proof", header: "Proof" }
];

const packageRows = [
  { package: "@corvaui/tokens", usage: "Global token CSS", proof: "Imported once in +layout.svelte" },
  { package: "@corvaui/web-components", usage: "Custom elements", proof: "Registered in src/lib/corva.ts" },
  { package: "SvelteKit", usage: "File routing", proof: "Seven route directories/pages" },
  { package: "adapter-static", usage: "Static deploy", proof: "Prerender enabled" }
];

const treeItems = [
  {
    id: "routes",
    label: "src/routes",
    children: [
      { id: "home", label: "+page.svelte" },
      { id: "dashboard", label: "dashboard/+page.svelte" },
      { id: "work-orders", label: "work-orders/+page.svelte" },
      { id: "customers", label: "customers/+page.svelte" },
      { id: "data-table", label: "data-table/+page.svelte" },
      { id: "settings", label: "settings/+page.svelte" },
      { id: "about", label: "about/+page.svelte" }
    ]
  },
  {
    id: "shared",
    label: "shared shell",
    children: [
      { id: "layout", label: "+layout.svelte" },
      { id: "corva", label: "src/lib/corva.ts" },
      { id: "css", label: "src/styles.css" }
    ]
  }
];
</script>

<svelte:head>
  <title>Package Proof | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="success">Package proof</corva-badge>
    <corva-typography as="h1" variant="display">CorvaUI in a routed clinic app.</corva-typography>
    <corva-typography variant="body">
      This page records how the VerdantCare demo uses installed packages, token themes, custom elements, and file-based routing.
    </corva-typography>
  </corva-stack>
  <corva-button-group label="Proof actions">
    <corva-button size="sm" variant="secondary">Copy route list</corva-button>
    <corva-button size="sm">Run build</corva-button>
  </corva-button-group>
</section>

<section class="split-grid">
  <corva-data-table
    caption="Installed package usage"
    use:corvaProps={{ columns: packageColumns, rows: packageRows }}
  ></corva-data-table>
  <corva-card eyebrow="Route structure" heading="Framework-native pages">
    <corva-tree-view label="SvelteKit route files" use:corvaProps={{ items: treeItems }}></corva-tree-view>
  </corva-card>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Tokens" heading="mint-light default">
    Root data-corva-theme starts at mint-light and can switch to mint-dark from the shared app bar.
  </corva-card>
  <corva-card eyebrow="Components" heading="Native custom elements">
    Pages use CorvaUI cards, data tables, workflow boards, fields, switches, tabs, and charts directly.
  </corva-card>
  <corva-card eyebrow="CSS scope" heading="Composition only">
    Local CSS controls shell layout, grids, spacing, and responsive behavior while components keep their package styling.
  </corva-card>
</section>

<section class="section-stack">
  <corva-accordion heading="Acceptance coverage" open>
    Marketing, dashboard, form, records, data table, settings, and package proof are separate SvelteKit routes. Build verification is listed in the handoff.
  </corva-accordion>
  <corva-snackbar tone="success" open>CorvaUI demo uses CorvaUI packages without local component restyling.</corva-snackbar>
</section>
