interface BaseComponentProps {
  tagName: string;
  id?: string;
  className?: string[];
  body?: any;
  styles?: object;
}

interface ComponentProps {
  id?: string;
  className?: string[];
  body?: any;
  styles?: object;
}

// Base component:
const Component = (props: BaseComponentProps) => {
  let tagName, id, className, body, styles;
  tagName = props.tagName;
  id = props.id;
  className = props.className;
  body = props.body;
  styles = props.styles;

  let element = document.createElement(tagName);
  element.id = typeof id == "undefined" ? "" : id;
  element.classList = typeof className == "undefined" ? "" : className;
  element.append(typeof body == "undefined" ? "" : body);
  element.id = typeof id == "undefined" ? "" : id;
  if (typeof styles != "undefined") {
    for (let property in styles) {
      element.style[property] = styles[property];
    }
  }
  return element;
};

/*
 * Box Component:
 * Similar as `div`
 */

const Box = (props?: ComponentProps) => {
  return Component({
    tagName: "div",
    body: props.body,
    styles: props.styles,
  });
};

/*
 * Title Component:
 * Similar as `h1`
 */

const Title = (props?: ComponentProps) => {
  return Component({
    tagName: "h1",
    body: props.body,
    styles: props.styles,
  });
};

document.title = "whatever";
document.body.append(
  Box({
    body: Title({
      id: "smth",
      body: "This is a title",
      styles: {
        color: "red",
      },
    }),
    styles: {
      backgroundColor: "green",
    },
  })
);
