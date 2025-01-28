// type QuoteProviderProps =

import { createContext, useContext, useMemo, useReducer } from "react";
import { FipeItem } from "../api/fipe";

type QuoteContextActions = {
  lists: {
    brands: FipeItem[];
    models: FipeItem[];
    year: FipeItem[];
  };
};

const QuoteContext = createContext<QuoteContextActions>({
  lists: {
    brands: [],
    models: [],
    year: [],
  },
});

const DispatchContext = createContext<
  React.Dispatch<DispatchAction> | undefined
>(undefined);
export const useDispatch = () => useContext(DispatchContext);

export const useQuoteContext: () => QuoteContextActions = () => {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error(
      "useQuoteContext must be used within an QuoteContextProvider"
    );
  }

  return context;
};

const initialState: Lists = {
  brands: [],
  models: [],
  year: [],
};

export const QuoteProvider = ({ children }) => {
  const [lists, dispatch] = useReducer(listsReducer, initialState);

  const value = useMemo(
    () => ({
      lists,
    }),
    [lists]
  );
  return (
    <QuoteContext.Provider value={value}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </QuoteContext.Provider>
  );
};

// type ListsReducer = {lists
type Lists = { brands: FipeItem[]; models: FipeItem[]; year: FipeItem[] };
type DispatchAction = {
  type: "add_brands" | "add_models" | "add_models_by_year";
  payload: FipeItem[];
};

const listsReducer = (lists: Lists, action: DispatchAction): Lists => {
  switch (action.type) {
    case "add_brands": {
      return {
        ...lists,
        brands: action.payload,
      };
    }
    case "add_models": {
      return {
        ...lists,
        models: action.payload,
      };
    }
    case "add_models_by_year": {
      return {
        ...lists,
        year: action.payload,
      };
    }
    default:
      return lists;
  }
};
