import express from 'express'; //cambiar a modules
import connection from './db.js'

const app = express()
const port = 3000

app.use(express.json());

app.get('/api/users', async (req, res) => {
  // A simple SELECT query
  try {
    const [results, fields] = await connection.query( // ponemos la promesa --> async-await
      'SELECT * FROM `personas`'
    );
    res.status(200).json(results)
  } catch (err) {
    console.log(err);
    res.status(500).send("Error en el servidor")
  }
})

app.post('/api/users', async (req, res) => {
  try {
    if (req.body) {
      const { name, password, role } = req.body; //creo las constantes para que sepa cual es el objeto json , para asignarle valor
      
      if (!name || !password || !role) {
      return res.status(400).send("Faltan campos obligatorios: name, password, role");
    }

      const [results, fields] = await connection.query( // ponemos la promesa --> async-wait
        'INSERT INTO pesonas (name, password, role) VALUES (?,?,?)',
        [name, password, role]
      );

      if (results[0].affectedRows == 1) {
        console.log(results); // results contains rows returned by server
        // res.json(results)
        res.status(200).send("Usuari insertat correctment");
      }
    }
  } catch (err) {
    res.status(500).send("Error : ${err}");
  }

})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
