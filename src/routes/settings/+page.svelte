<script lang="ts">
import { corvaProps } from "$lib/corva";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "notifications", label: "Notifications" },
  { id: "localization", label: "Locale" }
];

const densityOptions = [
  { label: "Compact", value: "compact" },
  { label: "Comfortable", value: "comfortable" },
  { label: "Spacious", value: "spacious" }
];

const localeOptions = [
  { label: "English, United States", value: "en-US" },
  { label: "English, Canada", value: "en-CA" },
  { label: "Spanish, United States", value: "es-US" }
];

const timezoneOptions = [
  { label: "America/New York", value: "America/New_York" },
  { label: "America/Chicago", value: "America/Chicago" },
  { label: "America/Denver", value: "America/Denver" }
];
</script>

<svelte:head>
  <title>Settings | CorvaUI Operations</title>
</svelte:head>

<section class="page-header">
  <corva-stack gap="md">
    <corva-badge tone="neutral">Account settings</corva-badge>
    <corva-typography as="h1" variant="display">Preferences for dispatch work.</corva-typography>
    <corva-typography variant="body">
      Settings cover identity, notification rules, locale, density, and theme-adjacent preferences.
    </corva-typography>
  </corva-stack>
  <corva-tabs label="Settings sections" active-id="profile" use:corvaProps={{ items: tabs }}></corva-tabs>
</section>

<section class="split-grid">
  <corva-card eyebrow="Profile" heading="Account owner">
    <div class="form-grid">
      <corva-text-field label="Name" value="Mina Patel"></corva-text-field>
      <corva-text-field label="Role" value="Regional operations lead"></corva-text-field>
      <corva-text-field label="Email" type="email" value="mina@northstar.example"></corva-text-field>
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
  <corva-card eyebrow="Dispatch" heading="Route exceptions">
    <corva-switch label="Notify when a route falls below promise confidence" checked></corva-switch>
  </corva-card>
  <corva-card eyebrow="Accounts" heading="Renewal proof">
    <corva-switch label="Send weekly customer proof digest" checked></corva-switch>
  </corva-card>
  <corva-card eyebrow="Billing" heading="Closeout gaps">
    <corva-switch label="Alert when invoice evidence is incomplete"></corva-switch>
  </corva-card>
</section>
