// type QuoteProviderProps =

import { createContext, useContext, useMemo, useReducer } from "react";
import { FipeItem } from "../api/fipe";

const initialState: State = {
  form: {
    brand: null,
    model: null,
    year: null,
  },
  lists: { brands: [], models: [], year: [] },
};

const QuoteContext = createContext<State>(initialState);

const DispatchContext = createContext<
  React.Dispatch<DispatchAction> | undefined
>(undefined);
export const useDispatch = () => useContext(DispatchContext);

export const useQuoteContext: () => State = () => {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error(
      "useQuoteContext must be used within an QuoteContextProvider"
    );
  }

  return context;
};

export const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listsReducer, initialState);

  const value = useMemo(
    () => ({
      ...state,
    }),
    [state]
  );
  return (
    <QuoteContext.Provider value={value}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </QuoteContext.Provider>
  );
};

type State = {
  form: Record<"model" | "brand" | "year", FipeItem | null>;
  lists: Lists;
};

type Lists = { brands: FipeItem[]; models: FipeItem[]; year: FipeItem[] };
type DispatchAction = {
  type: "add_brands" | "add_models" | "add_models_by_year";
  payload: FipeItem[];
};

const listsReducer = (state: State, action: DispatchAction): State => {
  switch (action.type) {
    case "add_brands": {
      return {
        ...state,
        lists: {
          ...state.lists,
          brands: action.payload,
        },
      };
    }
    case "add_models": {
      return {
        ...state,
        lists: {
          ...state.lists,
          models: action.payload,
        },
      };
    }
    case "add_models_by_year": {
      return {
        ...state,
        lists: {
          ...state.lists,
          year: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
