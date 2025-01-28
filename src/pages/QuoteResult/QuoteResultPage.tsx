import { useEffect, useState } from "react";
import { Text } from "../../components";
import { useQuoteContext } from "../../context/quote";
import { CustomChip, QuoteResultPageWrapper } from "./QuoteResultPage.styles";
import { FipeCar, getCarQuote } from "../../api/fipe";
import { useNavigate } from "react-router";

export const QuoteResult: React.FC = () => {
  const { form : formData } = useQuoteContext();
  const navigate = useNavigate();
  const [car, setCar] = useState<FipeCar | null>(null);
  console.log(formData);

  useEffect(() => {
    console.log(Object.values(formData));
    console.log(Object.values(formData).every((item) => item));
    if(Object.values(formData).every((item) => item)) {
      fetchQuotePrice();
      return;
    }
    navigate('/');

  }, [formData]);


  const fetchQuotePrice = async () => {
    
    const cart = await getCarQuote({
      brandCode: formData.brand!.codigo,
      modelCode: formData.model!.codigo,
      year: formData.year!.codigo,
    });
    setCar(cart);
  };

  return (
    <QuoteResultPageWrapper>
      <main>
        <Text variant="h1" $bold>Tabela Fipe: Preço {car?.Marca} {car?.Modelo} {car?.AnoModelo}</Text>
        <CustomChip label={car?.Valor}/>
        <Text variant="caption" >Este é o preço de compra do veículo</Text>
      </main>
    </QuoteResultPageWrapper>
  );
};
