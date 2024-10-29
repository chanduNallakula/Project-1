export function generateDateMarks(n: number): { value: number; label: string }[] {
  const marks = [];
  const today = new Date();

  for (let i = 0; i < n; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const day = date.toLocaleString("en-us", { weekday: "long" });
    const label = `${day} ${date.getDate()}`;
    marks.push({ value: i, label });
  }

  return marks;
}

export function rgbaStringToColorSet(rgba: string) {
  const values = rgba.replace(/^rgba?\(|\s+|\)$/g, "").split(",");

  const r = parseInt(values[0], 10);
  const g = parseInt(values[1], 10);
  const b = parseInt(values[2], 10);
  const a = Math.round(parseFloat(values[3]) * 255);

  return [r, g, b, a];
}

export function hexToRgbaArray(hex: string, alpha = 1) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b, alpha];
}

export const addDebounce = (fn: Function, delay: number) => {
  let timer: any;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};
