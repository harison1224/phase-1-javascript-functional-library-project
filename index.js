// Implement myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection; 
  }
  
  
  // Implement myMap function
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, item => {
      result.push(callback(item));
    });
    return result;
  }
  
// Implement myReduce function
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : Object.values(collection)[0];
  
    if (Array.isArray(collection)) {
      for (let i = initialValue !== undefined ? 0 : 1; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = initialValue !== undefined ? 0 : 1; i < keys.length; i++) {
        accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
      }
    }
  
    return accumulator;
  }
  
  // Implement myFind function
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // Implement myFilter function
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, item => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // Implement mySize function
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Implement myFirst function
  function myFirst(collection, n = 1) {
    if (!Array.isArray(collection)) return undefined;
    if (n === 1) return collection[0];
    return collection.slice(0, n);
  }
  
  // Implement myLast function
  function myLast(collection, n = 1) {
    if (!Array.isArray(collection)) return undefined;
    if (n === 1) return collection[collection.length - 1];
    return collection.slice(-n);
  }
  
  // Implement myKeys function
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Implement myValues function
  function myValues(object) {
    return Object.values(object);
  }
  
  