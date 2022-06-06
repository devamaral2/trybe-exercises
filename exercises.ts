export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function lozenge(majorSide: number, minorSide: number): number { 
  return (majorSide * minorSide) / 2;
}

export function trapeze(majorBase: number, minorBase: number, heigth: number): number { 
  return ((majorBase + minorBase) * heigth) / 2;
}

export function circle(radius: number): number { 
  const pi: number = 3.14;
  return pi * (radius ** 2);
}