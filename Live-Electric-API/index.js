import express from 'express';    // importar express
import cors from 'cors';

import { 
  obtenerColores, 
  obtenerCompradores, 
  obtenerVendedores, 
  obtenerMotos, 
  obtenerVisitas, 
  obtenerLogin, 
  aniadirComprador,
  actualizarVisita
} from './base-datos.js';

const app = express();        //siempre se crea una app, inicializa express
const port = 4000;            //definiendo el puerto del API

app.use(cors());              //permite el aceso al backend desde cualquier fuente
app.use(express.json());     //permite el uso de JSON en el body 

app.get('/', (req, res) => {
  res.send('Este es el API para nuestro proyecto DesingLab I-2026 Live-Electric');
});

app.get('/vendedores', async function (req, res) {
  const vendedores = await obtenerVendedores();
  res.send(vendedores)
})

app.get('/compradores', async function (req, res) {
  const compradores = await obtenerCompradores();
  res.send(compradores)
})

app.post('/compradores', async function (req, res) {
  const nuevoCliente = await aniadirComprador(req.body.nombres, req.body.apellidos, req.body.ci, req.body.celular, req.body.procedencia);
  res.status(201).send(nuevoCliente)
})

app.get('/colores', async function (req, res) {
  const colores = await obtenerColores();
  res.send(colores)
})

app.get('/motos', async function (req, res) {
  const motocicletas = await obtenerMotos();
  res.send(motocicletas)
})

app.get('/visitas', async function (req, res) {
  const visitas = await obtenerVisitas()
  res.send(visitas)
})

app.post('/visitas', async function (req, res) {
  const nuevaVisita = await actualizarVisita(req.body.id, req.body.correo_vendedor, req.body.nom_comprador, req.body.ape_comprador, req.body.presupuesto_min, req.body.presupuesto_max, req.body.estado, req.body.modelos, req.body.observaciones);
  res.status(201).send(nuevaVisita)
})

app.get('/login', async function (req, res) {
  const vendedor = await obtenerLogin(req.query.correo)

  if (!vendedor) {
    res.status(400).json({
      mensaje: 'La cuenta no existe'
    });
  } else if (req.query.password !== vendedor.password) {
    res.status(400).json({
      mensaje: 'Contrasena incorrecta'
    });
  } else {
    res.send(vendedor)
  }
})


/*app.get('/devs', function (req, res) {
    res.send('brenda, jorge, omar, jose')
})*/

app.listen(port, () => {
  console.log(`El backend de Live Electric esta corriendo en el puerto ${port}`);  //corre express
});
