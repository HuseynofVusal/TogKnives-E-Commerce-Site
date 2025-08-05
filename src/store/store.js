import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./api";

export const store = configureStore({
  reducer: {
    newsApi: newsApi.reducer,
  },

  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(newsApi.middleware);
  },
});
