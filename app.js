const express = require('express');
const app = express();
const path = require('path');

/* app.get('/', (req,res) => {
    res.send('Servidor levantado')
});
 */

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen(3030, () => console.log('Servidor levantado en http://localhost:3030'));