import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  Text,
} from "../../components";
import { CustomCard } from "./HomePage.styles";
import { useNavigate } from "react-router";
import { useQuote } from "../../hooks";
import { api, FipeItem, useGetBrandsQuery } from "../../api/fipe";
import { useAppDispatch } from "../../store";
import { Suspense, useState } from "react";
import {
  QuoteState,
  setModelsList,
  setYearsByModelList,
} from "../../store/slices";
import { Alert } from "../../components/Alert";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { models, years, handleFormData } = useQuote();
  const [formData, setFormData] = useState<QuoteState["form"]>({
    brand: null,
    model: null,
    year: null,
  });
  const { data: brands, isError: brandListSucceed } = useGetBrandsQuery();
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
    setFormData(() => ({ brand: item, model: null, year: null }));
    if (!codigo) return;
    const list = await getModels({
      brandCode: codigo,
    });

    dispatch(setModelsList(list.data?.modelos ?? []));
  };

  const handleModelSelected = async (value: FipeItem) => {
    setFormData((prev) => ({ ...prev, model: value }));
    const f = await getYearListByModel({
      brandCode: formData.brand!.codigo,
      modelCode: value.codigo,
    });
    dispatch(setYearsByModelList(f.data ?? []));
  };

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: "100vh" }}
    >
      <Grid
        component="main"
        size={{ xs: 10, sm: 10, md: 6, xl: 4 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={2}
      >
        <Text variant="h1">Tabela Fipe</Text>
        <Text variant="h2" align="center">
          Consulte o valor de um veículo de forma gratuita
        </Text>
        {brandListSucceed && (<Alert severity="error">Desculpe, mas não possível obter os dados para consulta. Entre</Alert>)}
        {brands?.length && (
          <CustomCard>
            <Suspense fallback={<Text>Carregando...</Text>}>
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
                    onChange={(_, value) => {
                      handleModelSelected(value!);
                    }}
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
                  disabled={
                    !(formData.brand && formData.model && formData.year)
                  }
                >
                  Consultar preço
                </Button>
              </form>
            </Suspense>
          </CustomCard>
        )}
      </Grid>
    </Grid>
  );
};
