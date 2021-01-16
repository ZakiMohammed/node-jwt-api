const express = require('express');
const cors = require('cors');
const auth = require('./middleware/auth');
const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});cors

app.use(auth);

app.use('/api/accounts', require('./api/accounts'));
app.use('/api/employees', require('./api/employees'));

app.listen(port, () => {
    console.log(`Server running on ${port}`)
});