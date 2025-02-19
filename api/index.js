const express = require('express')
const app = express()
const port = 8002

app.get('/', (req, res) => {
  console.log("/api ", req.headers)
  res.json({ status: "success" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
