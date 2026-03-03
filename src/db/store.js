
import { configureStore } from "@reduxjs/toolkit";
import departments from "../application/services/api/v1/departments";
import events from "../application/services/api/v1/events";
import house_fellowship_centres from "../application/services/api/v1/house_fellowship_centres";
import past_sermons from "../application/services/api/v1/past_sermons";
import store_item_categories from "../application/services/api/v1/store_item_categories";
import store_items from "../application/services/api/v1/store_items";

export const store = configureStore({
  reducer: {
    departments: departments.reducer,
    events: events.reducer,
    house_fellowship_centres: house_fellowship_centres.reducer,
    past_sermons: past_sermons.reducer,
    store_item_categories: store_item_categories.reducer,
    store_items: store_items.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
