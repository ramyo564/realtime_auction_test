import useAxiosWithInterceptor from "../helpers/jwtinterceptor";
import { BASE_URL } from "../config";
import { useState } from 'react';

interface IuseCrud<T> {
    dataCRUD: T[];
    fetchData: () => Promise<void>;
    error: Error | null;
    isLoading: boolean;
}

const useCrud = <T>(initalData: T[], apiURL: string): IuseCrud<T> => {
    const jwtAxios = useAxiosWithInterceptor();
    const [dataCRUD, setDataCRUD] = useState<T[]>(initalData)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoadiing] = useState(false)

    const fetchData = async () => {
        setIsLoadiing(true)
        try{
            const response = await jwtAxios.get(`${BASE_URL}${apiURL}`, {})
            const data = response.data
            setDataCRUD(data)
            setError(null)
            setIsLoadiing(false)
            return data;
        } catch (error: any){
            if (error.response && error.response.status === 400) {
                setError(new Error("400"))
            }
            setIsLoadiing(false)
            throw error;
        }
        
    };

    return {fetchData, dataCRUD, error, isLoading}
}

export default useCrud