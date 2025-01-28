import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CustomChip, QuoteResultPageWrapper } from "./QuoteResultPage.styles";
import { useQuote } from "../../hooks";
import { useGetPriceQuoteQuery } from "../../api/fipe";
import { Text } from "../../components";

export const QuoteResult: React.FC = () => {
  const { formData } = useQuote();
  const { data: car } = useGetPriceQuoteQuery({
    brandCode: formData.brand!.codigo,
    modelCode: formData.model!.codigo,
    year: formData.year!.codigo,
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.values(formData).every((item) => item)) navigate("/");
  }, [formData]);

  return (
    <QuoteResultPageWrapper>
      <main>
        <Text variant="h1" $bold>
          Tabela Fipe: Preço {car?.Marca} {car?.Modelo} {car?.AnoModelo}
        </Text>
        <CustomChip label={car?.Valor}/>
        <Text variant="caption">Este é o preço de compra do veículo</Text>
      </main>
    </QuoteResultPageWrapper>
  );
};
