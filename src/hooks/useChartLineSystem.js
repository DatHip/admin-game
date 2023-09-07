import {
    useQuery,
  } from '@tanstack/react-query'
import { apiGet } from '../utils/https/request';
import { tmpAPI } from '../utils/https/tmpApi';

const useChartLineSystem = () => {
    return useQuery(['getSystemInfo'] , () => apiGet(tmpAPI.getSystemInfo))
};

export default useChartLineSystem;