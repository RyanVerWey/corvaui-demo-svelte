<script lang="ts">
import { corvaProps } from "$lib/corva";

const accessHealth = [
  { label: "Same-day capacity", value: 72 },
  { label: "Charts ready", value: 91 },
  { label: "Rooming on time", value: 78 },
  { label: "Outreach closed", value: 84 }
];

const visitColumns = [
  { key: "time", header: "Time" },
  { key: "patient", header: "Patient" },
  { key: "provider", header: "Provider" },
  { key: "status", header: "Status" },
  { key: "next", header: "Next step" }
];

const visitRows = [
  { time: "08:20", patient: "M. Alvarez", provider: "Dr. Rowan", status: "Roomed", next: "Lab draw" },
  { time: "09:10", patient: "S. Brooks", provider: "NP Carter", status: "Waiting", next: "Insurance check" },
  { time: "10:00", patient: "R. Patel", provider: "Dr. Imani", status: "Ready", next: "Discharge note" },
  { time: "10:40", patient: "T. Nguyen", provider: "Dr. Rowan", status: "Delayed", next: "Float MA" }
];

const workflowColumns = [
  {
    id: "intake",
    title: "Intake",
    items: [
      { id: "check-1", title: "Verify Rivergate insurance queue", meta: "Front desk" },
      { id: "check-2", title: "Prepare sports physical packet", meta: "Peds" }
    ]
  },
  {
    id: "care",
    title: "Care Team",
    items: [
      { id: "care-1", title: "Rooming delay at Rivergate", meta: "Needs float" },
      { id: "care-2", title: "A1C lab review", meta: "Dr. Imani" }
    ]
  },
  {
    id: "followup",
    title: "Follow-up",
    items: [
      { id: "fu-1", title: "Referral confirmation", meta: "Cardiology" },
      { id: "fu-2", title: "Medication check-in", meta: "Tomorrow" }
    ]
  }
];

const timelineEvents = [
  { id: "a", label: "07:35", description: "Same-day visit slots released for respiratory clinic.", meta: "Access" },
  { id: "b", label: "08:10", description: "Northside chart prep complete for first wave.", meta: "Care team" },
  { id: "c", label: "09:25", description: "Rivergate rooming delay crossed support threshold.", meta: "Operations" }
];
</script>

<svelte:head>
  <title>Clinic Dashboard | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Operations dashboard</corva-badge>
    <corva-typography as="h1" variant="display">Clinic access control</corva-typography>
    <corva-typography variant="body">
      Network leaders can see provider capacity, patient flow, rooming delays, and follow-up work before bottlenecks become missed care.
    </corva-typography>
  </corva-stack>
  <corva-button-group label="Dashboard actions">
    <corva-button size="sm" variant="secondary">Export</corva-button>
    <corva-button size="sm">Refresh</corva-button>
  </corva-button-group>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Access" heading="72% same-day">
    <corva-progress label="Target 80%" value="72"></corva-progress>
  </corva-card>
  <corva-card eyebrow="Patient flow" heading="18 min wait">
    <corva-progress label="Rooming confidence" value="78"></corva-progress>
  </corva-card>
  <corva-card eyebrow="Follow-up" heading="84% closed">
    <corva-progress label="Outreach complete" value="84"></corva-progress>
  </corva-card>
</section>

<section class="split-grid">
  <corva-chart label="Clinic access health" use:corvaProps={{ data: accessHealth }}></corva-chart>
  <corva-card eyebrow="Workflow" heading="Care coordination board">
    <corva-workflow-board use:corvaProps={{ columns: workflowColumns }}></corva-workflow-board>
  </corva-card>
</section>

<section class="split-grid">
  <corva-data-table
    caption="Morning appointment queue"
    use:corvaProps={{ columns: visitColumns, rows: visitRows }}
  ></corva-data-table>
  <div class="section-stack">
    <corva-timeline use:corvaProps={{ events: timelineEvents }}></corva-timeline>
    <corva-alert tone="warning" heading="Staffing watch">
      Float one medical assistant to Rivergate Pediatrics from 12:00 to 15:00.
    </corva-alert>
  </div>
</section>
