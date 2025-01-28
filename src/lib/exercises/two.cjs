function updateData(currentObject, newDataObject) {
  for (const key in currentObject) {
    currentObject[key] = newDataObject[key] || currentObject[key];
  }

  return currentObject;
}

console.assert(
  String(
    updateData(
      { name: "Marcos", country: "Brasil", age: 22 },
      { country: "Japão", age: 33 }
    )
  ) ===
    String({
      name: "Marcos",
      country: "Japão",
      age: 33,
    }),
  "Doesn't match the expected one"
);

console.assert(
  String(
    updateData(
      { name: "Marcos", country: "Brasil", age: 22 },
      { price: 89.9, amount: 15, description: "camiseta 100% algodão" }
    )
  ) === String({ name: "Marcos", country: "Brasil", age: 22 }),
  "Doesn't match the expected one"
);

console.assert(
  String(
    updateData(
      { name: "Rafael", country: "Chile", age: 42 },
      { name: "Camiseta Polo", price: 59.9, amount: 30 }
    )
  ) === String({ name: "Rafael", country: "Chile", age: 42 }),
  "Doesn't match the expected one"
);

module.exports = updateData;
