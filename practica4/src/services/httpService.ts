import axios from 'axios';

const httpClient = {
    get: async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos del servicio externo:', error);
            throw new Error('Error al obtener datos del servicio externo');
        }
    }
}

export default httpClient;
