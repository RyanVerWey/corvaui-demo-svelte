<script lang="ts">
import { corvaProps } from "$lib/corva";

const visitTypes = [
  { label: "Primary care", value: "primary" },
  { label: "Urgent care", value: "urgent" },
  { label: "Pediatrics", value: "pediatrics" },
  { label: "Behavioral health", value: "behavioral" }
];

const acuityOptions = [
  { label: "Routine", value: "routine", description: "Book into normal provider schedule." },
  { label: "Soon", value: "soon", description: "Offer same-day or next-day appointment." },
  { label: "Urgent", value: "urgent", description: "Clinical triage review before scheduling." }
];

const providerOptions = ["Dr. Rowan", "NP Carter", "Dr. Imani", "PA Simmons"];
const uploadFiles = [{ name: "referral-summary.pdf", meta: "228 KB" }];
</script>

<svelte:head>
  <title>Visit Intake | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="success">Visit intake</corva-badge>
    <corva-typography as="h1" variant="display">Create a visit-ready appointment.</corva-typography>
    <corva-typography variant="body">
      Staff capture patient context, visit reason, schedule fit, documents, and follow-up expectations before the chart reaches the care team.
    </corva-typography>
  </corva-stack>
  <corva-stepper
    active-index="1"
    use:corvaProps={{ steps: [
      { id: "patient", label: "Patient" },
      { id: "visit", label: "Visit" },
      { id: "ready", label: "Ready" }
    ] }}
  ></corva-stepper>
</section>

<section class="split-grid">
  <corva-card eyebrow="New appointment" heading="Visit details">
    <form class="form-grid" aria-label="New clinic visit">
      <corva-text-field label="Patient name" name="patient" value="Mara Ellis"></corva-text-field>
      <corva-text-field label="Preferred contact" name="contact" placeholder="Phone or email"></corva-text-field>
      <corva-select
        label="Visit type"
        name="visitType"
        value="primary"
        use:corvaProps={{ options: visitTypes }}
      ></corva-select>
      <corva-autocomplete
        label="Preferred provider"
        placeholder="Search providers"
        value="Dr. Rowan"
        use:corvaProps={{ options: providerOptions }}
      ></corva-autocomplete>
      <corva-date-picker label="Requested date" name="requestedDate" value="2026-09-10"></corva-date-picker>
      <corva-number-field label="Estimated visit minutes" name="minutes" min="15" max="90" value="30"></corva-number-field>
      <corva-slider label="Schedule confidence" min="0" max="100" value="78"></corva-slider>
      <corva-radio-group
        label="Acuity"
        name="acuity"
        value="soon"
        use:corvaProps={{ options: acuityOptions }}
      ></corva-radio-group>
      <corva-checkbox
        label="Patient consents to SMS reminders"
        description="Used for appointment reminders and intake completion prompts."
        checked
      ></corva-checkbox>
      <corva-textarea
        label="Visit reason"
        name="reason"
        rows="5"
        value="Follow-up for medication adjustment. Patient reports mild side effects and needs lab review."
      ></corva-textarea>
      <corva-file-upload
        label="Referral and outside records"
        description="Attach referral notes, lab files, or prior visit summaries."
        action-label="Upload files"
        use:corvaProps={{ files: uploadFiles }}
      ></corva-file-upload>
      <div class="action-row form-actions">
        <corva-button type="submit">Create visit</corva-button>
        <corva-button type="reset" variant="secondary">Save draft</corva-button>
      </div>
    </form>
  </corva-card>

  <div class="section-stack">
    <corva-alert tone="info" heading="Clinical readiness">
      CorvaUI fields carry labels, help copy, values, and error-ready props while SvelteKit owns the visit route.
    </corva-alert>
    <corva-card eyebrow="Care team hint" heading="Before rooming">
      Confirm medications, lab status, referral source, pharmacy, interpreter needs, and preferred follow-up channel.
    </corva-card>
    <corva-empty-state
      align="start"
      heading="No duplicate appointment found"
      description="Search matched the patient but found no open request for this visit reason."
    ></corva-empty-state>
  </div>
</section>
