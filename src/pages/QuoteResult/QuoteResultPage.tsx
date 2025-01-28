import { Text } from "../../components";
import { Chip } from "../../components/Chip";
import { QuoteResultPageWrapper } from "./QuoteResultPage.styles";

export const QuoteResult: React.FC = () => {
  
  return (
    <QuoteResultPageWrapper>
      <Text variant="h1">Tabela Fipe: Preço ...</Text>
      <Chip label={'placeholder'}/>
      <Text variant="h2">Este é o preço de compra do veículo</Text>
    </QuoteResultPageWrapper>
  );
};
