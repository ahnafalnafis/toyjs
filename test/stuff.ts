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
const pr = (value: number): string => `${value}%`;

// Color functions:
const rgb = (red: number, green: number, blue: number): string =>
  `rgb(${red}, ${green}, ${blue})`;

const rgba = (
  red: number,
  green: number,
  blue: number,
  alpha: number
): string => `rgba(${red}, ${green}, ${blue}, ${alpha})`;

// Keywords:
const none = "none";
const center = "center";
