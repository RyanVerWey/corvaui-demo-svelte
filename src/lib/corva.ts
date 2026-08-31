import { registerCorvaUI } from "@corvaui/svelte";

await registerCorvaUI();

export type CorvaProps = Record<string, unknown>;

export const corvaProps = (node: HTMLElement, props: CorvaProps) => {
  Object.assign(node, props);

  return {
    update(nextProps: CorvaProps) {
      Object.assign(node, nextProps);
    }
  };
};
