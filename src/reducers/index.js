import { combineReducers } from "redux";

import {default as map} from "./map";
import {default as location} from './location';

export default combineReducers({
		map,
		location,
});