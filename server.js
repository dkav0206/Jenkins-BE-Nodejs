import express from "express"

const app = express()

app.listen(8088)

app.get("/", (req, res) => {
    res.send("Đây là trang chủ API");
})

app.get("/get-product", (req, res) => {
    let data = [{
        id: 1,
        name: "product 1"
    },
    {
        id: 2,
        name: "product 2"
    }]
    res.send(data);
})


