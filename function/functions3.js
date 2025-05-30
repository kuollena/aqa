function divide (numerator, denominator) {
 if (denominator === 0) {
   throw new Error('Denominator cannot be zero');
 }
 if (typeof numerator !== 'number' || typeof denominator !== 'number') {
   throw new Error('Both numerator and denominator must be numbers');
 }
    return numerator / denominator; 
}

const testCases = [
    [10, 2],
    [10, 0],
    [10, "п’ять"],
    ["десять", 5]
  ];
  
  for (const [a, b] of testCases) {
    try {
      const result = divide(a, b);
      console.log(`Результат: ${result}`);
    } catch (err) {
      console.error("Помилка:", err.message);
    } finally {
      console.log("Робота завершена\n");
    }
  }