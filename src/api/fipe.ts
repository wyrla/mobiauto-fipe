import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type FipeItem = { 
  codigo: string; 
  nome: string
};

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

type FipeQuery = Record<"brandCode" | "modelCode" | "year", string>;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://parallelum.com.br/fipe/api/v1",
  }),
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: () => "carros/marcas",
    }),
    getModels: builder.query<FipeItem[], Pick<FipeQuery, "brandCode">>({
      query: (brandCode) => `carros/marcas/${brandCode}/modelos`,
    }),
    getYearsByModels: builder.query<
      FipeItem[],
      Pick<FipeQuery, "brandCode" | "modelCode">
    >({
      query: ({ brandCode, modelCode }) =>
        `carros/marcas/${brandCode}/modelos/${modelCode}/anos`,
    }),
    getPriceQuote: builder.query<
      FipeCar,
      Record<"brandCode" | "modelCode" | "year", string>
    >({
      query: ({ brandCode, modelCode, year }) =>
        `carros/marcas/${brandCode}/modelos/${modelCode}/anos/${year}`,
    }),
  }),
});

export const {
  useGetBrandsQuery,
  useGetModelsQuery,
  useGetYearsByModelsQuery,
  useGetPriceQuoteQuery,
} = api;
