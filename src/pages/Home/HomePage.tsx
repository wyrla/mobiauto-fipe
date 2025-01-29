import { Autocomplete, Button, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { useNavigate } from "react-router";
import { useQuote } from "../../hooks";
import { api, FipeItem, useGetBrandsQuery } from "../../api/fipe";
import { useAppDispatch } from "../../store";
import { useState } from "react";
import { QuoteState, setModelsList, setYearsByModelList } from "../../store/slices";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { models, years, handleFormData } = useQuote();
  const [formData, setFormData] = useState<QuoteState['form']>({ brand: null, model: null, year: null });
  const { data: brands } = useGetBrandsQuery();
  const [getModels, { isLoading: lazyGetModelIsLoading }] =
    api.endpoints.getModels.useLazyQuery();
  const [getYearListByModel, { isLoading: lazyGetYearListByModelIsLoading }] =
    api.endpoints.getYearsByModels.useLazyQuery();
  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleFormData(formData);
    navigate("/quote-result");
  };

  const handleBrandSelected = async (item: FipeItem) => {
    const codigo = item && item.codigo;
    setFormData((prev) => ({brand: item, model: null, year: null}));
    if(!codigo) return;
    const list = await getModels({
        brandCode: codigo,
      });

    dispatch(setModelsList(list.data?.modelos ?? [] ));
  };

  const handleModelSelected = async (value: FipeItem) => {
    setFormData((prev) => ({ ...prev, model: value }));
    const f = await getYearListByModel({
      brandCode: formData.brand!.codigo,
      modelCode: value!.codigo,
    });
    dispatch(setYearsByModelList(f.data ?? []));
  };

  return (
    <HomePageWrapper>
      <main>
        <Text variant="h1">Tabela Fipe</Text>
        <Text variant="h2">
          Consulte o valor de um veículo de forma gratuita
        </Text>
        {brands?.length && (
          <CustomCard>
            <form onSubmit={handleFormSubmit}>
              <FormControl fullWidth>
                <Autocomplete
                  label="Marca"
                  value={formData.brand}
                  onChange={(_, value) => {
                    handleBrandSelected(value!);
                  }}
                  options={brands ?? []}
                />
              </FormControl>
              <FormControl fullWidth>
                <Autocomplete
                  label="Modelo"
                  disabled={!formData.brand}
                  value={formData.model}
                  onChange={(_, value) => handleModelSelected(value!)}
                  options={models}
                  loading={lazyGetModelIsLoading}
                />
              </FormControl>
              {formData.model && (
                <FormControl fullWidth>
                  <Autocomplete
                    label="Ano"
                    disabled={!formData.model}
                    value={formData.year}
                    loading={lazyGetYearListByModelIsLoading}
                    onChange={(_, value) => {
                      setFormData((prev) => ({ ...prev, year: value }));
                    }}
                    options={years ?? []}
                  />
                </FormControl>
              )}
              <Button
                type="submit"
                variant="contained"
                disabled={!(formData.brand && formData.model && formData.year)}
              >
                Consultar preço
              </Button>
            </form>
          </CustomCard>
        )}
      </main>
    </HomePageWrapper>
  );
};
