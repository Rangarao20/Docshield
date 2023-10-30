const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 5000;
const loginRoutes = require('./src/login/rotes');
const cors = require('cors');
const doctyperoute = require('./src/doctype/routes');
const docdetroute = require('./src/document_details/ro');
const issueroute = require('./src/Receiver/rot');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
const pool = require('./db');
const path = require('path');



// app.get('*',(req,res)=>{
//   res.sendFile(__dirname + '/frontend/index.html');
// });
const allowedOrigins = ['http://example.com', 'https://example2.com' , 'http://localhost:4200'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

app.use(express.json());
// app.use(cors(corsOptions));
// app.use((req, res, next) => {
//    const userAgent = req.get('User-Agent');
 
//    // Check if the User-Agent indicates a web browser (you can add more checks)
//    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome')) {
//      res.status(403).send('Access from a web browser is not allowed.');
//    } else {
//      next(); // Allow non-browser requests to proceed
//    }
//  });


// app.use((req, res, next) => {
//    const referer = req.get('Referer');
//    console.log(referer);
//    if (!referer || !referer.startsWith('http://localhost:4200')) {
//      res.status(403).send(JSON.stringify('Access Blocked'));
//    } else {
//      next(); 
//    }
//  });
 
app.use(express.static(path.join(__dirname, 'frontend')));

app.use("/userlogin", loginRoutes);
app.use("/doctype",doctyperoute);
app.use("/docdet",docdetroute);
app.use("/issue",issueroute);
app.get("/", (req, res) =>
{
   res.send("I am listening");
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/index.html'));
});

app.listen(port, () => console.log('Good to Go on port',port));


pool.connect().then(() =>
{
  console.log("DB connection Successfull");
})
.catch(err => {
  console.log("DB Connection Unsuccessfull",err);
})