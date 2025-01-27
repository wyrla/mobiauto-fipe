import { Text } from "../../components/Text";
import { HomePageWrapper } from "./HomePage.styles";

export const HomePage: React.FC = () => {
  return <HomePageWrapper>
    <Text variant="h1">Tabela Fipe</Text>
    <Text variant="h2">Consulte o valor de um veículo de forma gratuita</Text>
  </HomePageWrapper>;
}