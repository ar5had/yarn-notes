const exp = require('express');
const port = process.env.PORT || port;
let app = exp();

app.get('/', (req, res) => {
    res.send('This is my yarn project.');
});


app.listen(port, () => {
    console.log(`App runnin on ${port}!`);
});