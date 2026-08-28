<script lang="ts">
import { corvaProps } from "$lib/corva";

const serviceTypes = [
  { label: "Preventive maintenance", value: "maintenance" },
  { label: "Warranty repair", value: "warranty" },
  { label: "Emergency response", value: "emergency" }
];

const priorityOptions = [
  { label: "Standard", value: "standard", description: "Schedule inside account promise." },
  { label: "Urgent", value: "urgent", description: "Dispatch lead review required." },
  { label: "Critical", value: "critical", description: "Escalate account owner and operations." }
];

const technicianOptions = ["Crew 3", "Crew 8", "Crew 14", "Crew 21"];
const uploadFiles = [{ name: "site-access-photo.jpg", meta: "1.2 MB" }];
</script>

<svelte:head>
  <title>Work Order Form | CorvaUI Operations</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="success">Work order intake</corva-badge>
    <corva-typography as="h1" variant="display">Create a service-ready visit.</corva-typography>
    <corva-typography variant="body">
      Required account, timing, safety, and attachment fields make the form feel like daily operations, not sample controls.
    </corva-typography>
  </corva-stack>
  <corva-stepper
    active-index="1"
    use:corvaProps={{ steps: [
      { id: "account", label: "Account" },
      { id: "scope", label: "Scope" },
      { id: "dispatch", label: "Dispatch" }
    ] }}
  ></corva-stepper>
</section>

<section class="split-grid">
  <corva-card eyebrow="New request" heading="Service details">
    <form class="form-grid" aria-label="New work order">
      <corva-text-field label="Customer account" name="customer" value="Harris Medical Group"></corva-text-field>
      <corva-text-field label="Site contact" name="contact" placeholder="Name and phone"></corva-text-field>
      <corva-select
        label="Service type"
        name="serviceType"
        value="warranty"
        use:corvaProps={{ options: serviceTypes }}
      ></corva-select>
      <corva-autocomplete
        label="Preferred crew"
        placeholder="Search crews"
        value="Crew 14"
        use:corvaProps={{ options: technicianOptions }}
      ></corva-autocomplete>
      <corva-date-picker label="Requested date" name="requestedDate" value="2026-06-18"></corva-date-picker>
      <corva-number-field label="Estimated labor hours" name="hours" min="1" max="12" value="3"></corva-number-field>
      <corva-slider label="Schedule confidence" min="0" max="100" value="82"></corva-slider>
      <corva-radio-group
        label="Priority"
        name="priority"
        value="urgent"
        use:corvaProps={{ options: priorityOptions }}
      ></corva-radio-group>
      <corva-checkbox
        label="Customer approved after-hours access"
        description="Required for work outside primary reception hours."
        checked
      ></corva-checkbox>
      <corva-textarea
        label="Problem statement"
        name="problem"
        rows="5"
        value="North rooftop unit failing under afternoon load. Customer reports repeated reset."
      ></corva-textarea>
      <corva-file-upload
        label="Site photos and documents"
        description="Attach access photos, warranty documents, or compliance forms."
        action-label="Upload files"
        use:corvaProps={{ files: uploadFiles }}
      ></corva-file-upload>
      <div class="action-row form-actions">
        <corva-button type="submit">Create work order</corva-button>
        <corva-button type="reset" variant="secondary">Save draft</corva-button>
      </div>
    </form>
  </corva-card>

  <div class="section-stack">
    <corva-alert tone="info" heading="Validation smoke">
      CorvaUI fields carry labels, help copy, values, and error-ready props while SvelteKit owns page routing.
    </corva-alert>
    <corva-card eyebrow="Dispatch help" heading="What good looks like">
      Include the failure mode, site access, preferred arrival window, safety notes, parts guess, and who can approve added work.
    </corva-card>
    <corva-empty-state
      align="start"
      heading="No duplicate ticket found"
      description="Search matched the account but found no open request for this asset."
    ></corva-empty-state>
  </div>
</section>
