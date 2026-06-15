function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (cache.has(obj)) {
    return cache.get(obj);
  }

  const clone = Array.isArray(obj) ? [] : {};
  cache.set(obj, clone);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], cache);
    }
  }

  return clone;
}

if (require.main === module) {
  const original = {
    name: "Alice",
    skills: ["JS", "CSS"],
    info: { age: 30 },
    birthDate: new Date("1996-05-15")
  };

  original.self = original;

  const copy = deepClone(original);

  console.log("original === copy?", original === copy);
  console.log("original.skills === copy.skills?", original.skills === copy.skills);
  
  copy.info.age = 99;
  console.log("Original age:", original.info.age);
  console.log("Cloned age:", copy.info.age);
  console.log("Circular reference points to clone?", copy.self === copy);
}

module.exports = deepClone;
