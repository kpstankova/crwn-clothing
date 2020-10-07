import userEvent from '@testing-library/user-event'
import {combineReducers} from 'redux'

import userReducer from './user/user.reduser'

export default combineReducers({
    user: userReducer
})