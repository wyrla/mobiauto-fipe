import { Autocomplete, Button, FormControl, Text } from "../../components";
import { CustomCard, HomePageWrapper } from "./HomePage.styles";
import { useDispatch } from "../../context/quote";
import { useNavigate } from "react-router";
import { useForm } from "../../hooks";
import { useLists } from "../../hooks/useLists";
import { useEffect } from "react";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useForm();
  const { brands, fetchBrands } = useLists();

  useEffect(() => {
    fetchBrands();
  }, [])


  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/quote-result");
  };

  return (
    <HomePageWrapper>
      <main>
        <Text variant="h1">Tabela Fipe</Text>
        <Text variant="h2">
          Consulte o valor de um veículo de forma gratuita
        </Text>
        <CustomCard>
          <form onSubmit={handleFormSubmit}>
            <FormControl fullWidth>
              <Autocomplete
                label="Marca"
                value={formData.brand}
                onChange={(_, value) =>
                  dispatch({
                    type: "set_form_field",
                    payload: value!,
                    field: "brand",
                  })
                }
                options={brands}
              />
            </FormControl>
            <FormControl fullWidth>
              <Autocomplete
                label="Modelo"
                disabled={!formData.brand}
                value={formData.model}
                onChange={(_, value) =>
                  dispatch({
                    type: "set_form_field",
                    payload: value!,
                    field: "model",
                  })
                }
                options={[]}
              />
            </FormControl>
            {formData.model && (
              <FormControl fullWidth>
                <Autocomplete
                  label="Ano"
                  disabled={!formData.model}
                  value={formData.year}
                  onChange={(_, value) =>
                    dispatch({
                      type: "set_form_field",
                      payload: value!,
                      field: "year",
                    })
                  }
                  options={[]}
                />
              </FormControl>
            )}
            <Button type="submit" variant="contained" disabled={!(formData.brand && formData.model && formData.year)}> 
              Consultar preço
            </Button>
          </form>
        </CustomCard>
      </main>
    </HomePageWrapper>
  );
};
