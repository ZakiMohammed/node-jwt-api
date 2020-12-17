const express = require('express');
const auth = require('./middleware/auth');
const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(auth);

app.use('/api/accounts', require('./api/accounts'));
app.use('/api/employees', require('./api/employees'));

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});