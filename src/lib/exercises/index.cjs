const maskify = require("./one.cjs");
const updateData = require("./two.cjs");
const getRickAndMortyCharacters = require("./three.cjs");
const checkIfTheFirstLetterIsUppercase = require("./four.cjs");

(async function () {
  console.log("Exercício 1: iniciado");
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
  console.log("Exercício 1: finalizado");
  console.log("Exercício 2: iniciado");

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
  console.log("Exercício 2: finalizado");

  console.log("Exercício 3: iniciado");
  await getRickAndMortyCharacters();
  console.log("Exercício 3: finalizado");

  console.log("Exercício 4: iniciado");
  console.assert(
    checkIfTheFirstLetterIsUppercase("Brasil") === true,
    "Brasil should be true"
  );
  console.assert(
    checkIfTheFirstLetterIsUppercase("mobiauto") === false,
    "mobiauto should be masked as false"
  );
  console.assert(
    checkIfTheFirstLetterIsUppercase("xXx xXx") === false,
    "xXx xXx should be false"
  );
  console.assert(
    checkIfTheFirstLetterIsUppercase("xDD") === false,
    "xDD should be false"
  );
  console.assert(
    checkIfTheFirstLetterIsUppercase("Deu Certo!") === true,
    "Deu Certo! should be true"
  );
  console.log("Exercício 4: finalizado");
})();
