const FIPE_URI = "https://parallelum.com.br/fipe/api/v1";

export const getBrands = async () => {
  const data = await fetch(`${FIPE_URI}/carros/marcas`);
  const result = await data.json();
  return result;
}

export const getModels = async (brandCode: string) => {
  const data = await fetch(`${FIPE_URI}/carros/marcas/${brandCode}/modelos`);
  const result = await data.json();
  return result;
}

export const getModelYear = async ({brandCode, modelCode}: {brandCode: string, modelCode: string, }) => {
  const data = await fetch(`${FIPE_URI}/carros/marcas/${brandCode}/modelos/${modelCode}/anos`);
  const result = await data.json();
  return result;
}
