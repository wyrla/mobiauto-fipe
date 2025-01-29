import { useEffect } from "react";
import { useNavigate } from "react-router";
import { CustomChip, QuoteResultPageWrapper } from "./QuoteResultPage.styles";
import { useQuote } from "../../hooks";
import { api } from "../../api/fipe";
import { Grid, Text } from "../../components";
import { QuoteState } from "../../store/slices/quoteSlice";

export const QuoteResult: React.FC = () => {
  const { formData } = useQuote();
  const [getPriceQuoteQuery, result] =
    api.endpoints.getPriceQuote.useLazyQuery();
  const car = result.data;

  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.values(formData).every((item) => item?.codigo)) navigate(-1);
    fecthQuote(formData);
  }, [formData]);

  const fecthQuote = (formData: QuoteState["form"]) => {
    getPriceQuoteQuery({
      brandCode: formData.brand!.codigo,
      modelCode: formData.model!.codigo,
      year: formData.year!.codigo,
    });
  };

  return (
    <QuoteResultPageWrapper>
      <Grid component="main" container direction="column" alignItems="center">
        <Text variant="h1" $bold={true}>
          Tabela Fipe: Preço {car?.Marca} {car?.Modelo} {car?.AnoModelo}
        </Text>
        <CustomChip label={car?.Valor} />
        <Text variant="caption">Este é o preço de compra do veículo</Text>
      </Grid>
    </QuoteResultPageWrapper>
  );
};
