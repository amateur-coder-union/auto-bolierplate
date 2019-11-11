declare module '*.png' {
  const x: Image;
  export default x;
}

interface Image {
  getWidth(): number;
  getHeight(): number;
  saveTo(path: string): void;
  pixel(x: number, y: number): number;
}