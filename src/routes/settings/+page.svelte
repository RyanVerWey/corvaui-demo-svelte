<script lang="ts">
import { corvaProps } from "$lib/corva";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "notifications", label: "Alerts" },
  { id: "localization", label: "Locale" }
];

const densityOptions = [
  { label: "Compact", value: "compact" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Spacious", value: "spacious" }
];

const localeOptions = [
  { label: "English, United States", value: "en-US" },
  { label: "Spanish, United States", value: "es-US" },
  { label: "Arabic", value: "ar" }
];

const timezoneOptions = [
  { label: "America/New York", value: "America/New_York" },
  { label: "America/Chicago", value: "America/Chicago" },
  { label: "America/Denver", value: "America/Denver" }
];
</script>

<svelte:head>
  <title>Settings | VerdantCare</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="neutral">Account settings</corva-badge>
    <corva-typography as="h1" variant="display">Preferences for clinic operations.</corva-typography>
    <corva-typography variant="body">
      Settings cover identity, notification rules, locale, density, and theme-adjacent preferences for care teams.
    </corva-typography>
  </corva-stack>
  <corva-tabs label="Settings sections" active-id="profile" use:corvaProps={{ items: tabs }}></corva-tabs>
</section>

<section class="split-grid">
  <corva-card eyebrow="Profile" heading="Clinic operator">
    <div class="form-grid">
      <corva-text-field label="Name" value="Lina Mercado"></corva-text-field>
      <corva-text-field label="Role" value="Network operations lead"></corva-text-field>
      <corva-text-field label="Email" type="email" value="lina@verdantcare.example"></corva-text-field>
      <corva-select label="Locale" value="en-US" use:corvaProps={{ options: localeOptions }}></corva-select>
      <corva-select label="Timezone" value="America/New_York" use:corvaProps={{ options: timezoneOptions }}></corva-select>
      <corva-toggle-group label="Workspace density" value="comfortable" use:corvaProps={{ options: densityOptions }}></corva-toggle-group>
    </div>
  </corva-card>

  <div class="section-stack">
    <corva-card eyebrow="Theme" heading="Mint token family">
      <corva-stack gap="md">
        <corva-typography variant="body">
          Global light/dark toggle lives in the app bar and switches the root data-corva-theme between mint-light and mint-dark.
        </corva-typography>
        <corva-progress label="Contrast smoke coverage" value="82"></corva-progress>
      </corva-stack>
    </corva-card>
    <corva-alert tone="info" heading="Framework-native state">
      Preferences are laid out as a SvelteKit route while individual controls remain CorvaUI custom elements.
    </corva-alert>
  </div>
</section>

<section class="content-grid three">
  <corva-card eyebrow="Access" heading="Same-day capacity">
    <corva-switch label="Alert when same-day capacity drops below 20%" checked></corva-switch>
  </corva-card>
  <corva-card eyebrow="Care plans" heading="Follow-up gaps">
    <corva-switch label="Send daily unresolved follow-up digest" checked></corva-switch>
  </corva-card>
  <corva-card eyebrow="Quality" heading="Chart readiness">
    <corva-switch label="Warn when chart prep is incomplete before visit"></corva-switch>
  </corva-card>
</section>
