export const prepareScrollableTables = () => {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll<HTMLElement>(".corva-table-container").forEach((container) => {
      const caption = container.querySelector("caption")?.textContent?.trim() ?? "Data table";
      container.tabIndex = 0;
      container.setAttribute("role", "region");
      container.setAttribute("aria-label", `${caption}, horizontally scrollable`);
    });
  }));
};
