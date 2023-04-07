import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  //serializable ignored actions
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; // 1st impoer this
import storage from "redux-persist/lib/storage"; // 2nd import the storage
import amazonReducer from "../redux/AmazonSlice";

//3rd make a config
const persistConfig = {
  key: "root",
  storage,
};

//4th make a reducer and put config and our custom reducer in it
const persistedReducer = persistReducer(persistConfig, amazonReducer);

export const store = configureStore({
  reducer: { amazon: persistedReducer }, // 5th add the reducer in configstore

  // to prevent the non-serializable error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//6th put the store in presiststore and export it
export let persistor = persistStore(store);
