import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from "../navigationRef";


const customerReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_customer':
            return state.data = action.payload;
        case 'fetch_all_customers':
            return state.customers = action.payload;
        default:
            return state;
    }
};

const fetchCustomer = dispatch => async () => {
    const response = await trackerApi.post('/get-all-customer');
    dispatch({type: 'fetch_customer', payload: response.data});
}

const createCustomer = dispatch => async ({ fullName, address }) => {
    try {
        const response = await trackerApi.post('/create-customer', {fullName, address})
        console.log(response.status);
        navigate('CustomerList');
    } catch (err) {
        console.log(err);
        // dispatch({type: 'add_error', payload: 'Something went wrong with sign in. ' + err.message});
    }
}

const fetchAllCustomers = dispatch => async () => {
    const response = await trackerApi.get('/allcustomers');
    dispatch({type: 'fetch_all_customers', payload: response.data})
}

export const {Provider, Context} = createDataContext(
    customerReducer,
    {fetchCustomer, createCustomer, fetchAllCustomers},
    {customers: []},
)
