interface Attributes {
  class?: Array<string>;
  dir?: string;
  draggable?: boolean;
  hidden?: boolean;
  readonly id?: string;
  lang?: string;
  on?: Object;
  spellcheck?: boolean;
  style?: Object;
  tabindex?: string;
}

interface ComponentInterface {
  readonly tagName: string;
  attrs: Attributes;
  element: HTMLElement;
  render: (selector: string) => void;
}

export { ComponentInterface };
