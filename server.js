const port = 9000
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');
const dotenv = require('dotenv');
app.use(cors())
app.get("/binance",(req, res)=>{
  res.send("Hello world2")
})
dotenv.config()

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM agency", function (err, result, fields) {
    if (err) throw err;
    app.get("/binance2",(req, res)=>{
      res.send(result)
    })
    console.log(result);
  });
});
// app.use(express.static("client/build"))
// app.get("*",(req,res)=>{
//   res.sendFile("200.html")
// })
app.listen(port,()=>{
  console.log('port: '+port)
})

// const crypto = require('crypto');
// const axios = require('axios');

// const getDepositHistory = () => {
//   const apiKey = 'ehZHLTqpe5AyBCOIR73wnXtf4g7RZ0uYHOtak47RYT4OYnkLQsdueKmdNMI6abIc';
//   const apiSecret = '8irmwfRrD7At6W91ny2rjIOqEVxDWUOJHPi0JiulE6oh0yg47AqXBo6bjQivYYih';

//   const timestamp = Date.now();
//   const queryString = `timestamp=${timestamp}`;
//   const signature = crypto.createHmac('sha256', apiSecret).update(queryString).digest('hex');

//   const headers = { 'X-MBX-APIKEY': apiKey };
//   const params = { timestamp, signature };

//   return axios.get('https://api.binance.com/sapi/v1/capital/deposit/hisrec', { headers, params })
//     .then(response => response.data)
//     .catch(error => {
//       console.error('Yêu cầu không thành công:', error.response.status, error.response.data);
//       throw error;
//     });
// };

// getDepositHistory()
//   .then(depositHistory => {
//     console.log(depositHistory);
//   })
//   .catch(error => {
//     // Xử lý lỗi nếu cần
//   });
