import { configureStore } from '@reduxjs/toolkit';
import workReducer from './features/work/workSlice';
import artReducer from './features/art/artSlice';

export default configureStore({
  reducer: {
    work: workReducer,
    art: artReducer
  },
});
