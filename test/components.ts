import { BaseComponent } from "../../index";

// Box Component. Similar to `<div></div>`
class Box extends BaseComponent {
    constructor(props: ComponentProps) {
        super("div", props);
    }
}

// Field Component. Similar to `<span></span>`
class Field extends BaseComponent {
    constructor(props: ComponentProps) {
        super("span", props);
    }
}

// Title Component. Similar to `<h1></h1>`
class Title extends BaseComponent {
    constructor(props: ComponentProps) {
        super("h1", props);
    }
}

// Subtitle Component. Similar to `<h2></h2>`
class Subtitle extends BaseComponent {
    constructor(props: ComponentProps) {
        super("h2", props);
    }
}

// Paragraph Component. Similar to `<p></p>`
class Paragraph extends BaseComponent {
    constructor(props: ComponentProps) {
        super("p", props);
    }
}

// Button Component. Similar to `<button></button>`
class Button extends BaseComponent {
    constructor(props: ComponentProps) {
        super("button", props);
    }
}

export { Box, Field, Title, Subtitle, Paragraph, Button };
