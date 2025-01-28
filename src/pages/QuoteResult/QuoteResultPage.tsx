import { useEffect, useState } from "react";
import { Text } from "../../components";
import { Chip } from "../../components/Chip";
import { useQuoteContext } from "../../context/quote";
import { QuoteResultPageWrapper } from "./QuoteResultPage.styles";
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
      <Text variant="h1">Tabela Fipe: Preço {car?.Marca} {car?.Modelo} {car?.AnoModelo}</Text>
      <Chip label={car?.Valor}/>
      <Text variant="h2">Este é o preço de compra do veículo</Text>
    </QuoteResultPageWrapper>
  );
};
