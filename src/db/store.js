
import { configureStore } from "@reduxjs/toolkit";
import events from "../application/services/api/v1/events";
import store_item_categories from "../application/services/api/v1/store_item_categories";
import store_items from "../application/services/api/v1/store_items";

export const store = configureStore({
  reducer: {
    events: events.reducer,
    store_item_categories: store_item_categories.reducer,
    store_items: store_items.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
