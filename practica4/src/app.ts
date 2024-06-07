import express from 'express';
import routes from './routes/routes';
import cors from 'cors';

const app = express();


app.use(cors()); 
app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación! Ing. Adonis Velez');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
