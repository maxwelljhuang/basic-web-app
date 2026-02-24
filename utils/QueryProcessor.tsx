export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "maxwell2";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "maxwell2 (Maxwell Huang)" 
    );
  }

  if (query.toLowerCase().includes("following numbers is the largest: ")) {
    const numbers = query
      .substring(query.indexOf("largest: ") + "largest: ".length)
      .split(",")
      .map((s) => parseInt(s.trim(), 10));
    return Math.max(...numbers).toString();
  }

  if (query.toLowerCase().includes("plus") && query.toLowerCase().includes("multiplied")) {
    const match = query.match(/(\d+)\s+plus\s+(\d+)\s+multiplied by\s+(\d+)/i);
    if (match) {
      const a = parseInt(match[1], 10);
      const b = parseInt(match[2], 10);
      const c = parseInt(match[3], 10);
      return (a + b * c).toString();
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a * b, 1);
      return product.toString();
    }
  }

  if (query.toLowerCase().includes("square")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a * b, 1);
      return product.toString();
    }
  }
  if (query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a ** b);
      return result.toString();
    }
  }
  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a - b);
      return product.toString();
    }
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a - b);
      return product.toString();
    }
  }
  return "";

}
