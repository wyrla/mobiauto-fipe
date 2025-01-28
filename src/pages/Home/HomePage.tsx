import { useEffect, useState } from "react";
import { Autocomplete, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { FipeItem, getBrands, getModels } from "../../api/fipe";



export const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<Record<'model' | 'brand' | 'year', FipeItem | null>>({
    brand: null,
    model: null,
    year: null,
  })
  const [brands, setBrands] = useState<FipeItem[]>([]);
  const [models, setModels] = useState<FipeItem[]>([]);
  useEffect(() => {
    fetchItems();
  }, []);
  useEffect(() => {
    if(formData.brand) fetchModels(formData.brand!.codigo);
  }, [formData.brand]);

  const fetchModels = async (brandId: string) => {
    const models = await getModels(brandId);
    setModels(models);
  };

  const fetchItems = async () => {
    const brands = await getBrands();
    setBrands(brands);
  };

  return (
    <HomePageWrapper>
      <Text variant="h1">Tabela Fipe</Text>
      <Text variant="h2">Consulte o valor de um veículo de forma gratuita</Text>
      <CustomCard>
        <form>
          <FormControl fullWidth>
            <Autocomplete 
            label="Marca"
            value={formData.brand}
            onChange={(_, value) => setFormData({...formData, brand: value})}
            options={brands} />
          </FormControl>
          <FormControl fullWidth>
            <Autocomplete 
            label="Modelo"
            disabled={!formData.brand}
            value={formData.model}
            onChange={(_, value) => setFormData({...formData, model: value})}
            options={models} />
          </FormControl>
        </form>
      </CustomCard>
    </HomePageWrapper>
  );
};
