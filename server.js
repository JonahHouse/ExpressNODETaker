const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/notes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);



app.listen(PORT, () => console.log(`listening on port ${PORT}`))
