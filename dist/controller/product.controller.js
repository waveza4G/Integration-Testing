"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../db/product");
const productList = [
    {
        id: 1,
        name: 'Bombril',
        price: 8
    },
    {
        id: 1,
        name: 'Sausage',
        price: 3
    }
];
const getAll = (req, res) => {
    product_1.default
        .selectAll() //--db/product.ts
        .then((products) => {
        // .then for async call
        res.status(200).send({
            message: "OK",
            result: products,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
exports.default = { getAll };
