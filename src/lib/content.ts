export const routes = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "Programs", href: "/about" },
  { id: "data-table", label: "Sites", href: "/data-table" },
  { id: "dashboard", label: "Impact", href: "/dashboard" },
  { id: "steward", label: "Steward", href: "/steward" },
] as const;

export const planColumns = [
  { key: "feature", header: "Program detail" },
  { key: "neighbor", header: "Neighbor" },
  { key: "resilience", header: "Resilience" },
  { key: "steward", header: "Steward" },
];
export const planRows = [
  { feature: "Local solar share", neighbor: "25%", resilience: "50%", steward: "75%" },
  { feature: "Outage backup", neighbor: "Essential loads", resilience: "Whole home", steward: "Whole site" },
  { feature: "Monthly insight", neighbor: "Summary", resilience: "Hourly", steward: "Portfolio" },
  { feature: "Community vote", neighbor: "Included", resilience: "Included", steward: "Included" },
  { feature: "Annual credit", neighbor: "$180 avg.", resilience: "$310 avg.", steward: "Custom" },
];

export const siteColumns = [
  { key: "site", header: "Site", sortable: true, filterable: true },
  { key: "community", header: "Community", sortable: true, filterable: true },
  { key: "source", header: "Source", sortable: true, filterable: true },
  { key: "capacity", header: "Capacity", sortable: true, filterable: true },
  { key: "storage", header: "Storage", sortable: true, filterable: true },
  { key: "today", header: "Today", sortable: true, filterable: true },
  { key: "status", header: "Status", sortable: true, filterable: true },
];
export const siteRows = [
  { site: "Maple School", community: "East Ward", source: "Solar", capacity: "680 kW", storage: "1.2 MWh", today: "91%", status: "Sharing" },
  { site: "Foundry Roof", community: "River District", source: "Solar", capacity: "940 kW", storage: "800 kWh", today: "84%", status: "Charging" },
  { site: "Cedar Battery", community: "North Hill", source: "Storage", capacity: "2.4 MW", storage: "6.0 MWh", today: "73%", status: "Reserve" },
  { site: "Market Hall", community: "Old Town", source: "Solar + storage", capacity: "510 kW", storage: "640 kWh", today: "95%", status: "Sharing" },
  { site: "Juniper Homes", community: "West Terrace", source: "Solar", capacity: "420 kW", storage: "520 kWh", today: "88%", status: "Sharing" },
  { site: "Harbor Pump", community: "South Basin", source: "Storage", capacity: "1.1 MW", storage: "3.2 MWh", today: "69%", status: "Protected" },
  { site: "Library Canopy", community: "Civic Center", source: "Solar", capacity: "360 kW", storage: "400 kWh", today: "93%", status: "Sharing" },
  { site: "Garden Co-op", community: "East Ward", source: "Solar + storage", capacity: "290 kW", storage: "310 kWh", today: "86%", status: "Charging" },
];

export const generationData = [
  { label: "Solar", value: 67 },
  { label: "Storage", value: 19 },
  { label: "Grid", value: 11 },
  { label: "Flex", value: 3 },
];
export const districtData = [
  { label: "East Ward", localShare: 92, resilience: 84, memberGoal: 88 },
  { label: "River", localShare: 86, resilience: 91, memberGoal: 85 },
  { label: "North Hill", localShare: 78, resilience: 82, memberGoal: 86 },
  { label: "Old Town", localShare: 89, resilience: 87, memberGoal: 89 },
];
export const impactColumns = [
  { key: "district", header: "District" },
  { key: "members", header: "Members" },
  { key: "local", header: "Local energy" },
  { key: "credit", header: "Member credit" },
];
export const impactRows = [
  { district: "East Ward", members: "1,842", local: "74%", credit: "$28,410" },
  { district: "River District", members: "1,206", local: "69%", credit: "$19,870" },
  { district: "North Hill", members: "986", local: "62%", credit: "$14,220" },
  { district: "Old Town", members: "1,394", local: "71%", credit: "$21,640" },
];
export const reportTabs = [
  { id: "day", label: "Today" },
  { id: "month", label: "Month" },
  { id: "year", label: "Year" },
];

export const stewardshipWorkflow = [
  { id: "proposed", title: "Proposed", items: [{ id: "school", title: "Maple School shade canopy", meta: "$128K request" }, { id: "pump", title: "Harbor Pump battery", meta: "Resilience" }] },
  { id: "review", title: "Community review", items: [{ id: "library", title: "Library storage expansion", meta: "Vote closes Friday" }] },
  { id: "funded", title: "Funded", items: [{ id: "market", title: "Market Hall solar", meta: "Install October" }] },
];

export const stewardshipTimeline = [
  { id: "model", label: "Benefit model published", description: "Savings, resilience hours, and neighborhood reach are visible.", meta: "Aug 22" },
  { id: "review", label: "Technical review complete", description: "Interconnection and lifecycle costs were validated.", meta: "Aug 26" },
  { id: "vote", label: "Member vote opens", description: "Ranked choice voting runs for seven days.", meta: "Sep 2" },
];
