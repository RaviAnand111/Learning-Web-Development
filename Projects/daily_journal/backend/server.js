const express = require("express");
const app = express();

const port = process.env.PORT || 9000;



app.use(express.json());


// All Routes 
app.use(require("./Routes/auth"));


// Server listening at port 9000
app.listen(port, () => {
 console.log("Server running at port 9000");
})