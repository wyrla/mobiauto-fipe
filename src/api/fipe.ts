const FIPE_URI = "https://parallelum.com.br/fipe/api/v1";

export type FipeItem = { codigo: string, nome: string };
export type FipeCar = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};

export const getBrands = async (): Promise<FipeItem[]> => {
  const data = await fetch(`${FIPE_URI}/carros/marcas`);
  const result = await data.json();
  return result;
}

export const getModels = async (brandCode: string): Promise<FipeItem[]> => {
  const data = await fetch(`${FIPE_URI}/carros/marcas/${brandCode}/modelos`);
  const result = await data.json();
  return result.modelos;
}

export const getModelYear = async ({brandCode, modelCode}: {brandCode: string, modelCode: string, }): Promise<FipeItem[]> => {
  const data = await fetch(`${FIPE_URI}/carros/marcas/${brandCode}/modelos/${modelCode}/anos`);
  const result = await data.json();
  return result;
}

export const getCarQuote = async ({ brandCode, modelCode, year}: {brandCode: string, modelCode: string, year: string }): Promise<FipeCar> => {
  const data = await fetch(`${FIPE_URI}/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${year}`);
  const result = await data.json();
  return result;
}

