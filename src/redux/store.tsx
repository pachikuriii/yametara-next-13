import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const rootReducer = (state = {}, action: any) => {
  return state;
};
const authPersistConfig = { key: "yametara", storage: storageSession };
const persistedReducer = persistReducer(authPersistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
