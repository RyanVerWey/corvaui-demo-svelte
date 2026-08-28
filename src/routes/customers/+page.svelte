<script lang="ts">
import { corvaProps } from "$lib/corva";

const patientColumns = [
  { key: "patient", header: "Patient" },
  { key: "cohort", header: "Cohort" },
  { key: "owner", header: "Care lead" },
  { key: "status", header: "Status" },
  { key: "next", header: "Next step" }
];

const patientRows = [
  { patient: "Mara Ellis", cohort: "Medication follow-up", owner: "Dr. Rowan", status: "Scheduled", next: "Lab review" },
  { patient: "Sam Brooks", cohort: "Pediatrics", owner: "NP Carter", status: "Waiting", next: "Insurance check" },
  { patient: "Ravi Patel", cohort: "Chronic care", owner: "Dr. Imani", status: "Ready", next: "Care plan" },
  { patient: "Talia Nguyen", cohort: "Urgent care", owner: "PA Simmons", status: "Delayed", next: "Room assignment" }
];

const careBoardColumns = [
  {
    id: "new",
    title: "Needs review",
    items: [
      { id: "p1", title: "Outside lab import", meta: "Mara Ellis" },
      { id: "p2", title: "Referral missing diagnosis", meta: "Sam Brooks" }
    ]
  },
  {
    id: "active",
    title: "Care plan",
    items: [
      { id: "p3", title: "Hypertension follow-up", meta: "Ravi Patel" },
      { id: "p4", title: "Asthma action plan", meta: "Northside" }
    ]
  },
  {
    id: "closed",
    title: "Closed",
    items: [
      { id: "p5", title: "Portal message resolved", meta: "Yesterday" },
      { id: "p6", title: "Vaccination form sent", meta: "School packet" }
    ]
  }
];
</script>

<svelte:head>
  <title>Patients | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="info">Patient records</corva-badge>
    <corva-typography as="h1" variant="display">Care plans and patient readiness.</corva-typography>
    <corva-typography variant="body">
      Operations and clinical leads can inspect visit status, cohort work, and follow-up commitments without leaving the workspace.
    </corva-typography>
  </corva-stack>
  <corva-search-form label="Search patients" placeholder="Patient, cohort, provider" submit-label="Search"></corva-search-form>
</section>

<section class="split-grid">
  <corva-card eyebrow="Care coordination" heading="Open patient work">
    <corva-workflow-board use:corvaProps={{ columns: careBoardColumns }}></corva-workflow-board>
  </corva-card>
  <corva-card eyebrow="Selected patient" heading="Mara Ellis">
    <corva-stack gap="md">
      <div class="identity-row">
        <corva-avatar initials="ME" alt="Mara Ellis"></corva-avatar>
        <div>
          <corva-typography as="h2" variant="subtitle">Medication follow-up</corva-typography>
          <corva-typography variant="caption">Visit set for September 10, 2026</corva-typography>
        </div>
      </div>
      <corva-progress label="Chart readiness" value="91"></corva-progress>
      <corva-rating label="Follow-up confidence" value="4" max="5"></corva-rating>
      <corva-alert tone="success" heading="Next best action">
        Review outside labs and confirm pharmacy before rooming.
      </corva-alert>
    </corva-stack>
  </corva-card>
</section>

<section class="section-stack">
  <div class="section-heading">
    <corva-typography as="h2" variant="title">Patient queue</corva-typography>
    <corva-pagination label="Patient pages" count="8" page="1"></corva-pagination>
  </div>
  <corva-data-grid
    caption="Patient readiness records"
    use:corvaProps={{ columns: patientColumns, rows: patientRows }}
  ></corva-data-grid>
</section>
