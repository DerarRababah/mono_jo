
    import axios from 'axios';
    import axiosInstance from './axiosInstance';

    export async function getDrivers() {
        const response = await axiosInstance.get('/api/MockData/DriversData');
        console.log("responseresponseresponse",response)
        return response;
    }