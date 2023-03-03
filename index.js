const express = require('express')
const app = express()
const port = 9091

const indexRoute = require("./routes/index")
const productsRoute = require("./routes/products")

app.use("/", indexRoute)
app.use("/products", productsRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})