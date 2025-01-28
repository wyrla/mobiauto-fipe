import { useEffect, useState } from "react";
import { Autocomplete, Button, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { FipeItem, getBrands, getModels, getModelYear } from "../../api/fipe";
import { useDispatch, useQuoteContext } from "../../context/quote";

export const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<
    Record<"model" | "brand" | "year", FipeItem | null>
  >({
    brand: null,
    model: null,
    year: null,
  });
  const { lists } = useQuoteContext();
  const dispatch = useDispatch();
  const [models, setModels] = useState<FipeItem[]>([]);
  const [yearList, setYearList] = useState<FipeItem[]>([]);
  useEffect(() => {
    fetchItems();
  }, []);

  
  useEffect(() => {
    console.log(lists)
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
      payload: brands
    })
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
    console.log(formData);
  };

  return (
    <HomePageWrapper>
      <Text variant="h1">Tabela Fipe</Text>
      <Text variant="h2">Consulte o valor de um veículo de forma gratuita</Text>
      <CustomCard>
        <form onSubmit={handleFormSubmit}>
          <FormControl fullWidth>
            <Autocomplete
              label="Marca"
              value={formData.brand}
              onChange={(_, value) =>
                setFormData({  brand: value, model: null, year: null })
              }
              options={lists.brands}
            />
          </FormControl>
          <FormControl fullWidth>
            <Autocomplete
              label="Modelo"
              disabled={!formData.brand}
              value={formData.model}
              onChange={(_, value) =>
                setFormData({ ...formData, model: value })
              }
              options={models}
            />
          </FormControl>
          {formData.model && (
            <FormControl fullWidth>
              <Autocomplete
                label="Ano"
                disabled={!formData.model}
                value={formData.year}
                onChange={(_, value) =>
                  setFormData({ ...formData, year: value })
                }
                options={yearList}
              />
            </FormControl>
          )}
          <Button type="submit" variant="contained" >Consultar preço</Button>
        </form>
      </CustomCard>
    </HomePageWrapper>
  );
};
