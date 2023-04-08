// // For IDs
// if (typeof this.props.id == "undefined") {
//     element.id = "";
//     element.removeAttribute("id");
// } else {
//     element.id = this.props.id;
// }
// // For classes
// if (typeof this.props.className == "undefined") {
//     element.classList = [""];
//     element.removeAttribute("class");
// } else {
//     for (let i of this.props.className) {
//         element.classList += `${i} `;
//     }
// }
// // For body
// if (Array.isArray(this.props.child)) {
//     for (let i of this.props.child) {
//         if (typeof i == "undefined") {
//             element.append("");
//         } else if (i instanceof BaseComponent) {
//             element.append(i.render());
//         } else {
//             element.append(`${i}`);
//         }
//     }
// } else {
//     if (typeof this.props.child == "undefined") {
//         element.append("");
//     } else if (this.props.child instanceof BaseComponent) {
//         element.append(this.props.child.render());
//     } else {
//         element.append(`${this.props.child}`);
//     }
// }
// // For style
// Object.assign(element.style, this.props.style);
// // Events
// if (typeof this.props.on != "undefined") {
//     let i: keyof Events;
//     for (i in this.props.on) {
//         if (typeof i != "undefined") {
//             element["on" + i] = this.props.on[i];
//         }
//     }
// }
// return element;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
let preprops = _props;
if (
    typeof _props.id == "undefined" // &&
    // typeof _node.id != "undefined" &&
    // _node.id !== "null"
) {
    _props.id = _node.id;
}
if (
    typeof _props.className == "undefined" &&
    typeof _node.classList != "undefined"
) {
    _props.className = _node.classList;
}
if (
    typeof _props.child == "undefined" &&
    typeof _node.innerHTML != "undefined"
) {
    _props.child = _node.innerHTML;
}
if (typeof _props.style == "undefined" && typeof _node.style != "undefined") {
    let css = {};
    let _cssList = _node.style.cssText.split(";");
    for (let i in _cssList) {
        i = i.split(":");
        let _css_prop = i[0].trim();
        let _css_prop_value = i[1].trim();
        css[_css_prop] = css[_css_prop_value];
    }
}
