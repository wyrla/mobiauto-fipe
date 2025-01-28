function maskify(string) {
  const maskedString = string.replace(
    /(.+)(.{4}$)/g,
    (_, firstGroup, secondGroup) =>
      `${firstGroup.replace(/[\s\S]/g, "#")}${secondGroup}`
  );
  return maskedString;
}

module.exports = maskify;
