import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de Adonis Velez!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
