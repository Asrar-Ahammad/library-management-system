const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;


app.listen(process.env.PORT ||  port, () => console.log(`Listening on port ${port}`))
app.use(express.static('static'));

app.get('/', (request, respone) => {
    respone.sendFile('signup.html', { root : './templates/' });
});

app.get('/login', (request, respone) => {
    respone.sendFile('login.html', { root : './templates/' });
});

app.get('/books', (request, respone) => {
    respone.sendFile('books.html', { root : './templates/' });
});

app.get('/payment', (request, respone) => {
    respone.sendFile('payment.html', { root : './templates/' });
});

