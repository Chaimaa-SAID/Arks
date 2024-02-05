function add1<T extends number | string>(a: T, b: T): T {
    return (a as any) + (b as any);
  }
  
  console.log(add1("Hello", "World")); // Concatenates strings: HelloWorld
  console.log(add1(1, 3)); // Adds numbers: 4
  
  