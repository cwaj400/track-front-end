import createDataContext from './createDataContext';

// Tracks users location and stores points in locations[]
const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload}
        case 'start_recording':
            return {...state, recording: true};
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]};
        case 'stop_recording':
            return {...state, recording: false};
        case 'change_name':
            return {...state, name: action.payload};
        case 'reset':
            return {...state, name: '', locations: []};
        default:
            return state;
    }
}

const changeName = dispatch => (name) => {
    dispatch({type: 'change_name', payload: name})
}
const startRecording = dispatch => () => {
    dispatch({type: 'start_recording'})
}

const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'})
}

const addLocation = dispatch => (location, recording) => {
    // let location = {"coords": {"accuracy": 5, "altitude": 0, "altitudeAccuracy": -1, "heading": 289.69, "latitude": 37.50142772, "longitude": -122.32853953, "speed": 32.37}, "timestamp": 1656509517540.3162}

    dispatch({type: 'add_current_location', payload: location})
    //Add to locations array
    if (recording) {
        dispatch({type: 'add_location', payload: location});
    }
}

const reset = dispatch => () => {
    dispatch({type: 'reset'});
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, reset, addLocation, changeName},
    {recording: false, name: '', locations: [], currentLocation: null}
)
