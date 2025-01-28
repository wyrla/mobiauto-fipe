function maskify(string) {
  const maskedString = string.replace(
    /(.+)(.{4}$)/g,
    (_, firstGroup, secondGroup) =>
      `${firstGroup.replace(/[\s\S]/g, "#")}${secondGroup}`
  );
  return maskedString;
}

console.assert(
  maskify("4556364607935616") === "############5616",
  "4556364607935616 should be masked as ############5616"
);
console.assert(
  maskify("64607935616") === "#######5616",
  "64607935616 should be masked as #######5616"
);
console.assert(maskify("1") === "1", "1 should be masked as 1");
console.assert(maskify("") === "", '"" should be masked as ""');
console.assert(
  maskify("Nanananananananananana Batman!") ===
    "##########################man!",
  "Nanananananananananana Batman! should be masked as ##########################man!"
);

module.exports = maskify;
