import "@corvaui/web-components/components/corva-accordion.js";
import "@corvaui/web-components/components/corva-alert.js";
import "@corvaui/web-components/components/corva-app-bar.js";
import "@corvaui/web-components/components/corva-autocomplete.js";
import "@corvaui/web-components/components/corva-avatar.js";
import "@corvaui/web-components/components/corva-badge.js";
import "@corvaui/web-components/components/corva-bottom-navigation.js";
import "@corvaui/web-components/components/corva-breadcrumbs.js";
import "@corvaui/web-components/components/corva-button.js";
import "@corvaui/web-components/components/corva-button-group.js";
import "@corvaui/web-components/components/corva-calendar.js";
import "@corvaui/web-components/components/corva-card.js";
import "@corvaui/web-components/components/corva-chart.js";
import "@corvaui/web-components/components/corva-checkbox.js";
import "@corvaui/web-components/components/corva-chip.js";
import "@corvaui/web-components/components/corva-data-grid.js";
import "@corvaui/web-components/components/corva-data-table.js";
import "@corvaui/web-components/components/corva-date-picker.js";
import "@corvaui/web-components/components/corva-divider.js";
import "@corvaui/web-components/components/corva-empty-state.js";
import "@corvaui/web-components/components/corva-file-upload.js";
import "@corvaui/web-components/components/corva-icon.js";
import "@corvaui/web-components/components/corva-link.js";
import "@corvaui/web-components/components/corva-list.js";
import "@corvaui/web-components/components/corva-number-field.js";
import "@corvaui/web-components/components/corva-pagination.js";
import "@corvaui/web-components/components/corva-paper.js";
import "@corvaui/web-components/components/corva-progress.js";
import "@corvaui/web-components/components/corva-radio-group.js";
import "@corvaui/web-components/components/corva-rating.js";
import "@corvaui/web-components/components/corva-search-form.js";
import "@corvaui/web-components/components/corva-select.js";
import "@corvaui/web-components/components/corva-slider.js";
import "@corvaui/web-components/components/corva-snackbar.js";
import "@corvaui/web-components/components/corva-stack.js";
import "@corvaui/web-components/components/corva-stepper.js";
import "@corvaui/web-components/components/corva-switch.js";
import "@corvaui/web-components/components/corva-tabs.js";
import "@corvaui/web-components/components/corva-text-field.js";
import "@corvaui/web-components/components/corva-textarea.js";
import "@corvaui/web-components/components/corva-timeline.js";
import "@corvaui/web-components/components/corva-toggle-group.js";
import "@corvaui/web-components/components/corva-tooltip.js";
import "@corvaui/web-components/components/corva-transfer-list.js";
import "@corvaui/web-components/components/corva-tree-view.js";
import "@corvaui/web-components/components/corva-typography.js";
import "@corvaui/web-components/components/corva-workflow-board.js";

export type CorvaProps = Record<string, unknown>;

export const corvaProps = (node: HTMLElement, props: CorvaProps) => {
  Object.assign(node, props);

  return {
    update(nextProps: CorvaProps) {
      Object.assign(node, nextProps);
    }
  };
};
