import axios from 'axios';
import fetch from 'node-fetch';

type HttpClient = {
  get: (url: string) => Promise<any>;
};

const axiosClient: HttpClient = {
  get: async (url: string) => {
    console.log(`Haciendo solicitud a ${url} con axios`);
    try {
      const response = await axios.get(url);
      console.log('Respuesta recibida con axios:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error al obtener datos del servicio externo con axios:', error);
      throw new Error('Error al obtener datos del servicio externo con axios');
    }
  }
};

const fetchClient: HttpClient = {
  get: async (url: string) => {
    console.log(`Haciendo solicitud a ${url} con fetch`);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos del servicio externo con fetch');
      }
      const data = await response.json();
      console.log('Respuesta recibida con fetch:', data);
      return data;
    } catch (error) {
      console.error('Error al obtener datos del servicio externo con fetch:', error);
      throw new Error('Error al obtener datos del servicio externo con fetch');
    }
  }
};

export { axiosClient, fetchClient };
