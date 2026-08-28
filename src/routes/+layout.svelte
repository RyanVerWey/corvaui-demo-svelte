<script lang="ts">
import { page } from "$app/stores";
import { base } from "$app/paths";
import { onMount } from "svelte";
import "@corvaui/tokens/css";
import "../styles.css";
import { corvaProps } from "$lib/corva";

let isDark = false;

const navItems = [
  { id: "home", label: "Home", href: `${base}/`, route: "/" },
  { id: "dashboard", label: "Clinic dashboard", href: `${base}/dashboard`, route: "/dashboard", badge: "Live" },
  { id: "work-orders", label: "Visit intake", href: `${base}/work-orders`, route: "/work-orders" },
  { id: "customers", label: "Patients", href: `${base}/customers`, route: "/customers" },
  { id: "data-table", label: "Schedule table", href: `${base}/data-table`, route: "/data-table" },
  { id: "settings", label: "Settings", href: `${base}/settings`, route: "/settings" },
  { id: "about", label: "Package proof", href: `${base}/about`, route: "/about" }
];

const bottomNavItems = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Dashboard" },
  { id: "work-orders", label: "Intake" },
  { id: "customers", label: "Patients" },
  { id: "data-table", label: "Schedule" },
  { id: "settings", label: "Settings" }
];

$: theme = isDark ? "mint-dark" : "mint-light";
$: themeLabel = isDark ? "Mint dark" : "Mint light";
$: activeId = navItems.find((item) => item.route === $page.route.id)?.id ?? "home";
$: breadcrumbs = [
  { label: "VerdantCare", href: `${base}/` },
  { label: navItems.find((item) => item.id === activeId)?.label ?? "Home", current: true }
];

onMount(() => {
  isDark = localStorage.getItem("verdantcare-theme") === "mint-dark";
});

const setTheme = (event: CustomEvent<{ checked: boolean }>) => {
  isDark = event.detail.checked;
  localStorage.setItem("verdantcare-theme", isDark ? "mint-dark" : "mint-light");
};
</script>

<svelte:head>
  <meta
    name="description"
    content="VerdantCare clinic operations demo built with SvelteKit and CorvaUI web components."
  />
</svelte:head>

<main class="site-shell" data-corva-theme={theme}>
  <corva-app-bar heading="VerdantCare Clinics">
    <nav class="top-nav" aria-label="Primary">
      {#each navItems as item}
        <corva-link href={item.href} variant="standalone">{item.label}</corva-link>
      {/each}
    </nav>
    <corva-tooltip label={themeLabel}>
      <corva-switch
        label="Dark"
        description="Toggle token theme"
        checked={isDark}
        on:corvaChange={setTheme}
      ></corva-switch>
    </corva-tooltip>
  </corva-app-bar>

  <div class="site-layout">
    <aside class="site-sidebar">
      <corva-sidebar
        heading="VerdantCare"
        label="Clinic navigation"
        active-id={activeId}
        use:corvaProps={{ items: navItems }}
      ></corva-sidebar>
      <corva-alert tone="info" heading="Mint theme">
        SvelteKit demo uses mint-light and mint-dark across a clinic operations product.
      </corva-alert>
    </aside>

    <section class="site-main" aria-label="VerdantCare page content">
      <corva-breadcrumbs label="Page trail" use:corvaProps={{ items: breadcrumbs }}></corva-breadcrumbs>
      <slot />
    </section>
  </div>

  <div class="mobile-nav">
    <corva-bottom-navigation
      label="Mobile navigation"
      active-id={activeId}
      use:corvaProps={{ items: bottomNavItems }}
    ></corva-bottom-navigation>
  </div>
</main>
