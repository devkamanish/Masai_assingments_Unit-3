function memoize(fn, maxSize = 5) {
  const cache = new Map(); // Maintains insertion order

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      // Move accessed key to end to mark it as recently used
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }

    const result = fn(...args);
    cache.set(key, result);

    if (cache.size > maxSize) {
      // Remove the oldest (first) entry
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    return result;
  };
}


function slowAdd(a, b) {
  console.log('Calculating...');
  return a + b;
}

const memoizedAdd = memoize(slowAdd, 3);

console.log(memoizedAdd(1, 2)); // Calculating... → 3
console.log(memoizedAdd(1, 2)); // Cached → 3
console.log(memoizedAdd(2, 3)); // Calculating... → 5
console.log(memoizedAdd(3, 4)); // Calculating... → 7
console.log(memoizedAdd(4, 5)); // Calculating... → 9
console.log(memoizedAdd(1, 2)); // Recalculates because (1,2) was evicted → Calculating... → 3
