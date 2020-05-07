const express = require('express');
let app = express();

app.use('/res', express.static('res'));
app.get('/',(req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.listen(80,()=>console.log('ready!'));