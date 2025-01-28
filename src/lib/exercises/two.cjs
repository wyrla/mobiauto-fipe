function updateData(currentObject, newDataObject) {
  for (const key in currentObject) {
    currentObject[key] = newDataObject[key] || currentObject[key];
  }

  return currentObject;
}

module.exports = updateData;
