class BaseComponent {
  public tagName: string;
  public id: string;
  public className: string[];
  public body: any;
  public style: object;
  public element: Element;
  constructor(
    tagName: string,
    id?: any,
    className?: any,
    body?: any,
    style?: any
  ) {
    this.tagName = tagName;
    this.id = id;
    this.className = className;
    this.body = body;
    this.style = style;

    this.element = document.createElement(this.tagName);
    this.element.id = typeof this.id == "undefined" ? "" : this.id;
    this.element.className =
      typeof this.className == "undefined" ? "" : this.className;
    this.element.append(typeof this.body == "undefined" ? "" : this.body);
    if (typeof this.style != "undefined") {
      for (let property in this.style) {
        this.element.style[property] = this.style[property];
      }
    }
  }
  render() {
    return this.element;
  }
}

interface BaseComponentProps {
  tagName: string;
  id?: any;
  className?: any;
  body?: any;
  style?: any;
}

interface ComponentProps {
  tagName: string;
  id?: any;
  className?: any;
  body?: any;
  style?: any;
}

const Component = function (props: BaseComponentProps): BaseComponent {
  return new BaseComponent(
    props.tagName,
    props.id,
    props.className,
    props.body,
    props.style
  );
};

class Box extends Component {
  constructor(props: ComponentProps) {
    super({
      tagName: props.tagName,
      id: props.id,
      className: props.className,
      body: props.body,
      style: props.style,
    });
  }
}
