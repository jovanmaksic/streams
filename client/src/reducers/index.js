import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form' // ovo je opcioni deo. ovo as formReducer.. zbog lakseg snalazenje kasnije

import AuthReducer from './authReducer'

export default combineReducers({
    auth: AuthReducer,
    form: formReducer
});