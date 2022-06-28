import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {token: action.payload, errorMessage: ''}
        case 'signout':
            return {token: null, errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

//quick example:
const add = (a, b) => a + b

//action functions
const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email, password});

        //user jwt set in memory
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});

        //Navigate to trackList. Can also navigate to 'mainFlow'.
        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
    }
    //make api request with that email and password.
    // if we sign up, modify state and say that we are authenticated
    //if sign up fails, we will probably need to reflect an error message somewhere
}

const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});

        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in. ' + err.message});
    }
}

const signout = dispatch => async ()  => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},

    //only state property
    //token is user jwt. if they're logged in will be token
    {token: null, errorMessage: ''}
);
