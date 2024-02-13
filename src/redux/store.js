import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './contacts/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
