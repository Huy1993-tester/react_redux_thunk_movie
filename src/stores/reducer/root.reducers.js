import {combineReducers} from 'redux';
import { movieRducer } from './moviesReducers';

export const rootReducer = combineReducers({
    movie : movieRducer,
});