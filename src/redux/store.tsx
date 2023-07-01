import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { answersReducer } from "./answerReducer";
const rootReducer = (state = answersReducer) => {
  return state;
};
const authPersistConfig = { key: "yametara", storage: storageSession };
const persistedReducer = persistReducer(authPersistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
