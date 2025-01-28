import { useEffect, useState } from "react";
import { Autocomplete, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { getBrands } from "../../api/fipe";

export const HomePage: React.FC = () => {
  const [brands, setBrands] = useState([]);
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
            options={brands.map((brand: { codigo: string, nome: string}) => ({id: brand.codigo, label: brand.nome}))} />
          </FormControl>
        </form>
      </CustomCard>
    </HomePageWrapper>
  );
};
