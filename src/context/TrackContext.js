import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return state.data = action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.post('/get-tracks');
    dispatch({type: 'fetch_tracks', payload: response.data});
}

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations})
}

export const {Provider, Context} = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    {data: []},
)
