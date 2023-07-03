import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducers";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = { key: "yametara", storage: sessionStorage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
