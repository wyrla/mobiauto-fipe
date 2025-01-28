import { Autocomplete, Button, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { useNavigate } from "react-router";
import { useQuote } from "../../hooks";
import {
  api,
  useGetBrandsQuery,
} from "../../api/fipe";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { formData, handleFormData } = useQuote();
  const { data: brands } = useGetBrandsQuery();
  const [trigger, lazyGetModel] = api.endpoints.getModels.useLazyQuery();
  const { data: lazyGetModelData, isLoading: lazyGetModelIsLoading } = lazyGetModel;
  const models = lazyGetModelData?.modelos ?? [];
  const [getYearListByModel, lazyGetYearListByModel] = api.endpoints.getYearsByModels.useLazyQuery();
  const { data: lazyGetYearListByModelData, isLoading: lazyGetYearListByModelIsLoading } = lazyGetYearListByModel;
  const years = lazyGetYearListByModelData ?? [];
 

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/quote-result");
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
                      handleFormData("brand", value!);
                      trigger({brandCode: value!.codigo})
                    }}
                    options={brands ?? []}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Autocomplete
                    label="Modelo"
                    disabled={!formData.brand}
                    value={formData.model}
                    onChange={(_, value) => {handleFormData("model", value!); getYearListByModel({
                      brandCode: formData.brand!.codigo,
                      modelCode: value!.codigo
                    })}}
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
                      onChange={(_, value) => handleFormData("year", value!)}
                      options={years ?? []}
                    />
                  </FormControl>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={
                    !(formData.brand && formData.model && formData.year)
                  }
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
