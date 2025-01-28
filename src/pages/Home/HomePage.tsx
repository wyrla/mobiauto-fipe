import { useEffect, useState } from "react";
import { Autocomplete, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { FipeItem, getBrands } from "../../api/fipe";



export const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<Record<'model' | 'brand' | 'year', FipeItem | null>>({
    brand: null,
    model: null,
    year: null,
  })
  const [brands, setBrands] = useState<FipeItem[]>([]);
  useEffect(() => {
    fetchItems();
  }, []);

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
        </form>
      </CustomCard>
    </HomePageWrapper>
  );
};
