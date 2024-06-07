import { Request, Response } from "express";
import  httpClient from "../utils/httpClient";

// URL del servicio REST de tu compañero
const externalServiceURL = 'http://10.42.3.252:3020/api/controles';

// Controlador para obtener los datos desde el servicio REST de tu compañero
export const getAllTablas = async (resq: Request, res: Response) => {
  console.log('Recibida solicitud para obtener todas las tablas');
  try {
    const data = await httpClient.get(externalServiceURL);
    console.log('Datos recibidos del servicio externo:', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener datos del servicio externo:', error);
    res.status(500).json({ message: 'Error al obtener datos del servicio externo XD' });
  }
};
