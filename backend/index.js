const express = require('express')
const app = express()
const port = 5000

const connectDB = require('./db');
var cors = require('cors')
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   }
// );
app.use(cors())
app.use(express.json());
connectDB();
app.use('/api',require('./routes/userAuth'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})