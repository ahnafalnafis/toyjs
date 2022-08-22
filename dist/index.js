const px = (value) => `${value}px`;
const pt = (value) => `${value}pt`;
const pc = (value) => `${value}pc`;
const cm = (value) => `${value}cm`;
const mm = (value) => `${value}mm`;
const inch = (value) => `${value}in`;
const em = (value) => `${value}em`;
const rem = (value) => `${value}rem`;
const ex = (value) => `${value}ex`;
const ch = (value) => `${value}ch`;
const vw = (value) => `${value}vw`;
const vh = (value) => `${value}vh`;
const vmin = (value) => `${value}vmin`;
const vmax = (value) => `${value}vmax`;
const rgb = (red, green, blue) => `rgb(${red}, ${green}, ${blue})`;
const rgba = (red, green, blue, alpha) => `rgba(${red}, ${green}, ${blue}, ${alpha})`;
const _parser = (node, props) => {
    if (typeof props.id == "undefined") {
        node.id = "";
        node.removeAttribute("id");
    }
    else {
        node.id = props.id;
    }
    if (typeof props.className == "undefined") {
        node.classList = [""];
        node.removeAttribute("class");
    }
    else {
        for (let i of props.className) {
            node.classList += `${i} `;
        }
    }
    if (Array.isArray(props.child)) {
        for (let i of props.child) {
            if (typeof i == "undefined") {
                node.append("");
            }
            else if (i instanceof BaseComponent) {
                node.append(i.render());
            }
            else {
                node.append(`${i}`);
            }
        }
    }
    else {
        if (typeof props.child == "undefined") {
            node.append("");
        }
        else if (props.child instanceof BaseComponent) {
            node.append(props.child.render());
        }
        else {
            node.append(`${props.child}`);
        }
    }
    Object.assign(node.style, props.style);
    if (typeof props.on != "undefined") {
        let i;
        for (i in props.on) {
            if (typeof i != "undefined") {
                node["on" + i] = props.on[i];
            }
        }
    }
};
class BaseComponent {
    constructor(tagName, props) {
        this.tagName = tagName;
        this.props = props;
    }
    render() {
        let element = document.createElement(this.tagName);
        _parser(element, this.props);
        return element;
    }
}
const $ = (node, props) => {
    const _query = (_node, _props) => {
        let element;
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
                    let _cssList = element.style.cssText
                        .split(";")
                        .filter((n) => {
                        return n != "";
                    });
                    for (let i of _cssList) {
                        i = i.split(":");
                        let _css_prop = i[0].trim();
                        let _css_prop_value = i[1].trim();
                        css[_css_prop] = css[_css_prop_value];
                    }
                }
            }
            _parser(element, _props);
        }
        else if (node instanceof BaseComponent) {
            _node.props = _props;
        }
    };
    if (Array.isArray(node)) {
        for (let i of node) {
            _query(i, props);
        }
    }
    else
        _query(node, props);
};
const Box = (props) => {
    return new BaseComponent("div", props);
};
const Field = (props) => {
    return new BaseComponent("span", props);
};
const Title = (props) => {
    return new BaseComponent("h1", props);
};
const Subtitle = (props) => {
    return new BaseComponent("h2", props);
};
const Paragraph = (props) => {
    return new BaseComponent("p", props);
};
const Button = (props) => {
    return new BaseComponent("button", props);
};
