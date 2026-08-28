<script lang="ts">
import { base } from "$app/paths";
import { corvaProps } from "$lib/corva";

const flowData = [
  { label: "Checked in", value: 64 },
  { label: "Waiting room", value: 18 },
  { label: "In room", value: 29 },
  { label: "Follow-up set", value: 52 }
];

const clinicColumns = [
  { key: "clinic", header: "Clinic" },
  { key: "providers", header: "Providers" },
  { key: "wait", header: "Avg wait" },
  { key: "status", header: "Status" }
];

const clinicRows = [
  { clinic: "Northside Family", providers: 12, wait: "18 min", status: "Stable" },
  { clinic: "Rivergate Pediatrics", providers: 9, wait: "24 min", status: "Rooming delay" },
  { clinic: "Oak Hill Urgent Care", providers: 16, wait: "31 min", status: "Surge" }
];
</script>

<svelte:head>
  <title>VerdantCare Clinics | CorvaUI Svelte Demo</title>
</svelte:head>

<section class="hero-band">
  <div class="hero-copy">
    <corva-stack gap="lg">
      <corva-badge tone="success">Clinic network operations</corva-badge>
      <corva-typography as="h1" variant="display">
        VerdantCare helps multi-site clinics protect access, flow, and follow-up.
      </corva-typography>
      <corva-typography variant="body">
        A SvelteKit demo for care coordinators, front-desk leads, and operations directors who need appointment demand, patient readiness, rooming delays, and outreach work in one place.
      </corva-typography>
      <div class="action-row">
        <corva-button>Review today</corva-button>
        <corva-button variant="secondary">Open access plan</corva-button>
        <corva-link href={`${base}/dashboard`} variant="standalone">View dashboard</corva-link>
      </div>
    </corva-stack>
  </div>

  <corva-paper elevation="sm">
    <div class="operations-snapshot">
      <div class="snapshot-header">
        <corva-badge tone="info">Today</corva-badge>
        <corva-typography as="h2" variant="title">Network access snapshot</corva-typography>
      </div>
      <corva-progress label="Same-day appointment capacity" value="72"></corva-progress>
      <corva-progress label="Charts prepared before visit" value="91"></corva-progress>
      <corva-progress label="Follow-ups scheduled before discharge" value="84"></corva-progress>
      <corva-alert tone="warning" heading="Rivergate needs support">
        Pediatric rooming delay is above threshold. Float one MA from Northside after lunch.
      </corva-alert>
    </div>
  </corva-paper>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Access" heading="Slots, triage, and demand">
    Balance visit types and provider capacity without hiding urgent-care pressure.
  </corva-card>
  <corva-card eyebrow="Care team" heading="Everyone sees the same queue">
    Front desk, nurses, providers, and care coordinators share patient status.
  </corva-card>
  <corva-card eyebrow="Quality" heading="Follow-up does not disappear">
    Outreach, labs, prescriptions, and referral tasks stay connected to visits.
  </corva-card>
</section>

<section class="split-grid">
  <corva-chart label="Patient flow" use:corvaProps={{ data: flowData }}></corva-chart>
  <corva-data-table
    caption="Clinic access watch"
    use:corvaProps={{ columns: clinicColumns, rows: clinicRows }}
  ></corva-data-table>
</section>

<section class="section-stack">
  <div class="section-heading">
    <corva-typography as="h2" variant="title">What this demo proves</corva-typography>
    <corva-badge tone="neutral">SvelteKit plus CorvaUI</corva-badge>
  </div>
  <div class="content-grid two">
    <corva-paper elevation="sm">
      <corva-stack gap="md">
        <corva-typography as="h3" variant="subtitle">Product front door</corva-typography>
        <corva-typography variant="body">
          The main page introduces a realistic clinic operations product rather than a component catalog.
        </corva-typography>
      </corva-stack>
    </corva-paper>
    <corva-paper elevation="sm">
      <corva-stack gap="md">
        <corva-typography as="h3" variant="subtitle">Application routes</corva-typography>
        <corva-typography variant="body">
          Dashboard, intake, patients, schedule table, settings, and proof pages exercise the same component vocabulary.
        </corva-typography>
      </corva-stack>
    </corva-paper>
  </div>
</section>
