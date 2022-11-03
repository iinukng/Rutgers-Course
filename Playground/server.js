const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('static'));

app.use((req, res, next) =>{
    console.log(`${req.method} received for Endpoint ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    console.log(`GET /`);
    res.sendFile(path.join(process.cwd(), 'index.html'))}
);

app.get('/api/data', (req, res) => {
    console.log('GET - /api/data');
    console.log(`req.body `, req.body);
    return res.json('GET /api/data');
});

app.post('/api/data', (req, res) => {
    console.log('GET - /api/data');
    console.log(`req.body `, req.body);
    return res.json('POST /api/data');
});

app.listen(PORT, () =>
    console.log(`App is now listening on PORT ${PORT}`)
);


