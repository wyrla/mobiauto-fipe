const resolveGender = (gender) => {
  const genderMap = {
    Female: "Mulher",
    Male: "Homem",
  };
  return genderMap[gender] || "Não binário";
};

const resolveSpecie = (specie) =>
  specie === "Human" ? "Humano" : "Não humano";

async function getRickAndMortyCharacters() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5",
  );
  const data = await res.json();
  const formattedData = data.map((person) => ({
    nome: person.name,
    genero: resolveGender(person.gender),
    avatar: person.image,
    especie: resolveSpecie(person.species),
  }));
  console.log(JSON.stringify(formattedData, null, 2));
}
module.exports = getRickAndMortyCharacters;
