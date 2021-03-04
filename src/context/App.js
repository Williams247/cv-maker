import { createContext } from 'use-context-selector';

const AppContext = createContext(null);

export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;