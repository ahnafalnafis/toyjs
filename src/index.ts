import { ComponentInterface } from "./index.d";

class BaseComponent implements ComponentInterface {
  public tagName;
  public attrs;
  public element;

  constructor(tagName: string, attrs: Object) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.element = document.createElement(this.tagName);
  }

  render(selector: string) {
    let locations = document.querySelectorAll(selector);
    for (let i in locations) {
      console.log(i);
    }
  }
}

export { BaseComponent };
