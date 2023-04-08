/*************************************************
 * CSS: {{
 * Contains CSS stuff like units, functions, etc.
 ************************************************/
// Units:
const px = (value: number): string => `${value}px`;
const pt = (value: number): string => `${value}pt`;
const pc = (value: number): string => `${value}pc`;
const cm = (value: number): string => `${value}cm`;
const mm = (value: number): string => `${value}mm`;
const inch = (value: number): string => `${value}in`;

const em = (value: number): string => `${value}em`;
const rem = (value: number): string => `${value}rem`;
const ex = (value: number): string => `${value}ex`;
const ch = (value: number): string => `${value}ch`;
const vw = (value: number): string => `${value}vw`;
const vh = (value: number): string => `${value}vh`;
const vmin = (value: number): string => `${value}vmin`;
const vmax = (value: number): string => `${value}vmax`;

// Functions:
const rgb = (red: number, green: number, blue: number): string =>
    `rgb(${red}, ${green}, ${blue})`;

const rgba = (
    red: number,
    green: number,
    blue: number,
    alpha: number
): string => `rgba(${red}, ${green}, ${blue}, ${alpha})`;

/*************************************************
 * CSS }}
 ************************************************/

/*************************************************
 * Query parser: {{
 ************************************************/
const _parser = (node: any, props: ComponentProps) => {
    // For IDs
    if (typeof props.id == "undefined") {
        node.id = "";
        node.removeAttribute("id");
    } else {
        node.id = props.id;
    }

    // For classes
    if (typeof props.className == "undefined") {
        node.classList = [""];
        node.removeAttribute("class");
    } else {
        for (let i of props.className) {
            node.classList += `${i} `;
        }
    }

    // For body
    if (Array.isArray(props.child)) {
        for (let i of props.child) {
            if (typeof i == "undefined") {
                node.append("");
            } else if (i instanceof BaseComponent) {
                node.append(i.render());
            } else {
                node.append(`${i}`);
            }
        }
    } else {
        if (typeof props.child == "undefined") {
            node.append("");
        } else if (props.child instanceof BaseComponent) {
            node.append(props.child.render());
        } else {
            node.append(`${props.child}`);
        }
    }

    // For style
    Object.assign(node.style, props.style);

    // Events
    if (typeof props.on != "undefined") {
        let i: keyof Events;
        for (i in props.on) {
            if (typeof i != "undefined") {
                node["on" + i] = props.on[i];
            }
        }
    }
    // return node;
};
/*************************************************
 * Query parser }}
 ************************************************/

// Root of all Components:
class BaseComponent {
    public tagName: string;
    public props: ComponentProps;

    constructor(tagName: string, props: ComponentProps) {
        this.tagName = tagName;
        this.props = props;
    }

    render() {
        let element = document.createElement(this.tagName);
        _parser(element, this.props);
        return element;
    }
}

// Query selector wrapper
const $ = (
    node: string | string[] | BaseComponent | BaseComponent[],
    props: ComponentProps
) => {
    const _query = (_node: string | BaseComponent, _props: ComponentProps) => {
        let element: HTMLElement;
        if (typeof _node == "string") {
            element = document.querySelector(_node);
            if (typeof _props.id == "undefined") {
                _props.id = element.id;
            }
            if (typeof _props.className == "undefined") {
                _props.className = element.classList.value.split(" ");
            }
            if (typeof _props.child == "undefined") {
                _props.child = element.innerHTML;
            }
            if (typeof _props.style == "undefined") {
                let css = {};
                if (element.style.cssText != "") {
                    let _cssList: string[] = element.style.cssText
                        .split(";")
                        .filter((n: any) => {
                            return n != "";
                        });
                    let i: string | string[];
                    for (i of _cssList) {
                        i = i.split(":");
                        let _css_prop = i[0].trim();
                        let _css_prop_value = i[1].trim();
                        css[_css_prop] = css[_css_prop_value];
                    }
                }
            }
            _parser(element, _props);
        } else if (node instanceof BaseComponent) {
            _node.props = _props;
        }
    };

    if (Array.isArray(node)) {
        for (let i of node) {
            _query(i, props);
        }
    } else _query(node, props);
};

export {
    BaseComponent,
    $,
    px,
    pt,
    pc,
    cm,
    mm,
    inch,
    em,
    rem,
    ex,
    ch,
    vw,
    vh,
    vmin,
    vmax,
    rgb,
    rgba,
};
