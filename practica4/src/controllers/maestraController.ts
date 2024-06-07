import { Request, Response } from "express";
import { httpClient } from "../services/index";

// URL del servicio REST de tu compañero
const externalServiceURL = 'http://10.42.0.1:3011/api/control';

// Controlador para obtener los datos desde el servicio REST de tu compañero
export const getAllTablas = async (req: Request, res: Response) => {
  try {
    const response = await httpClient.get(externalServiceURL);
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener datos del servicio externo:', error);
    res.status(500).json({ message: 'Error al obtener datos del servicio externo' });
  }
};
