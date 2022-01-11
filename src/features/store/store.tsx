import { configureStore } from '@reduxjs/toolkit';
import kupacReducer from '../reducers/kupacSlice';
import komariceFormaReducer from '../reducers/mrežeFormaSlice';
import roleteFormaReducer from '../reducers/roleteFormaSlice';

export const store = configureStore({
  reducer: {
    kupac: kupacReducer,
    roleteForma: roleteFormaReducer,
    komariceForma: komariceFormaReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
