import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { MMKVStorage } from "./mmkvStorage";
import detailReducer from "./reducers/detail";
import movieReducer from "./reducers/movie";
import watchlistReducer from "./reducers/watchlist";

const rootReducer = combineReducers({
  movie: movieReducer,
  detail: detailReducer,
  watchlist: watchlistReducer,
});

const persistConfig = {
  key: "root",
  storage: MMKVStorage,
  blacklist: ["movie", "detail"],
};

const middleware: any[] = [thunk];
if (process.env.NODE_ENV === `development`) {
  const loggerMiddleware = createLogger({
    collapsed: (_, __, logEntry) => !logEntry!.error,
  });
  middleware.push(loggerMiddleware);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

export { persistor, store };
