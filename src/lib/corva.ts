import {
  defineCorvaAlert,
  defineCorvaAppBar,
  defineCorvaBadge,
  defineCorvaButton,
  defineCorvaCard,
  defineCorvaChart,
  defineCorvaDataGrid,
  defineCorvaDataTable,
  defineCorvaDatePicker,
  defineCorvaLink,
  defineCorvaPaper,
  defineCorvaProgress,
  defineCorvaSelect,
  defineCorvaSlider,
  defineCorvaStack,
  defineCorvaSwitch,
  defineCorvaTabs,
  defineCorvaTextField,
  defineCorvaTimeline,
  defineCorvaTypography,
  defineCorvaWorkflowBoard,
} from "@corvaui/svelte/components";

defineCorvaAlert();
defineCorvaAppBar();
defineCorvaBadge();
defineCorvaButton();
defineCorvaCard();
defineCorvaChart();
defineCorvaDataGrid();
defineCorvaDataTable();
defineCorvaDatePicker();
defineCorvaLink();
defineCorvaPaper();
defineCorvaProgress();
defineCorvaSelect();
defineCorvaSlider();
defineCorvaStack();
defineCorvaSwitch();
defineCorvaTabs();
defineCorvaTextField();
defineCorvaTimeline();
defineCorvaTypography();
defineCorvaWorkflowBoard();

export type CorvaProps = Record<string, unknown>;

export const corvaProps = (node: HTMLElement, props: CorvaProps) => {
  Object.assign(node, props);

  return {
    update(nextProps: CorvaProps) {
      Object.assign(node, nextProps);
    }
  };
};
