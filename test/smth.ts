// Property interfaces:
interface Style {
    accentColor?: string;
    alignContent?: string;
    alignItems?: string;
    alignSelf?: string;
    all?: string;
    animation?: string;
    animationDelay?: string;

    border?: any;
    borderRadius?: any;
    color?: any;
    backgroundColor?: any;
    fontSize?: any;
    display?: any;
    padding?: any;
    width?: any;
    height?: any;
    justifyContent?: any;
}

interface Events {
    click?: any;
    mouseover?: any;
    mouseout?: any;
}

interface ComponentProps {
    id?: string;
    className?: string[];
    child?: any;
    style?: Style;
    on?: Events;
}
