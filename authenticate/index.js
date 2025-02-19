const express = require('express')
const app = express()
const port = 8001

app.get('/', (req, res) => {
  // write authenticate logic here
  const cookieConfig = { httpOnly: true, maxAge: 1000000 };
  console.log("/auth", req.headers);
  res.cookie('test', 'somevalue4', cookieConfig);
  res.status(200).send('SUCCESS')
  // res.status(401).send('ERROR')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
