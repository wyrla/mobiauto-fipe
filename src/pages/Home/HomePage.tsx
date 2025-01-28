import { useEffect, useState } from "react";
import { Autocomplete, Button, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { FipeItem, getBrands, getModels, getModelYear } from "../../api/fipe";
import { useDispatch, useQuoteContext } from "../../context/quote";
import { useNavigate } from "react-router";

export const HomePage: React.FC = () => {
  const { lists, form: formData } = useQuoteContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [models, setModels] = useState<FipeItem[]>([]);
  const [yearList, setYearList] = useState<FipeItem[]>([]);
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    console.log(lists);
  }, [lists]);
  useEffect(() => {
    if (formData.brand) fetchModels(formData.brand!.codigo);
  }, [formData.brand]);
  useEffect(() => {
    if (formData.model)
      fetchModelYear(formData.brand!.codigo, formData.model!.codigo);
  }, [formData.model]);

  const fetchModels = async (brandId: string) => {
    const models = await getModels(brandId);
    setModels(models);
  };

  const fetchItems = async () => {
    const brands = await getBrands();
    dispatch({
      type: "add_brands",
      payload: brands,
    });
  };
  const fetchModelYear = async (brandId: string, model: string) => {
    const brands = await getModelYear({
      brandCode: brandId,
      modelCode: model,
    });
    setYearList(brands);
  };

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
        <CustomCard>
          <form onSubmit={handleFormSubmit}>
            <FormControl fullWidth>
              <Autocomplete
                label="Marca"
                value={formData.brand}
                onChange={(_, value) =>
                  dispatch({
                    type: "set_form_field",
                    payload: value!,
                    field: "brand",
                  })
                }
                options={lists.brands ?? []}
              />
            </FormControl>
            <FormControl fullWidth>
              <Autocomplete
                label="Modelo"
                disabled={!formData.brand}
                value={formData.model}
                onChange={(_, value) =>
                  dispatch({
                    type: "set_form_field",
                    payload: value!,
                    field: "model",
                  })
                }
                options={models ?? []}
              />
            </FormControl>
            {formData.model && (
              <FormControl fullWidth>
                <Autocomplete
                  label="Ano"
                  disabled={!formData.model}
                  value={formData.year}
                  onChange={(_, value) =>
                    dispatch({
                      type: "set_form_field",
                      payload: value!,
                      field: "year",
                    })
                  }
                  options={yearList ?? []}
                />
              </FormControl>
            )}
            <Button type="submit" variant="contained" disabled={!(formData.brand && formData.model && formData.year)}> 
              Consultar preço
            </Button>
          </form>
        </CustomCard>
      </main>
    </HomePageWrapper>
  );
};
