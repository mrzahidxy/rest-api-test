const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.listen(PORT, () => { console.log('server is running!') });

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Denim',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `Your logo is ${logo} and Id is ${id}`,
    });

});


