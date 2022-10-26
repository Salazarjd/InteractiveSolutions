const { response } = require('express');

const getProducts = (req, res = response ) => {

    res.json({
        msg: 'Get products -controller'
    });
}

const getProduct = (req, res = response ) => {

    res.json({
        msg: 'Get product controller'
    });
}

const postProduct = (req, res = response ) => {

    res.json({
        msg: 'Post product controller'
    });
}

const putProduct = (req, res = response ) => {

    res.json({
        msg: 'Put product controller'
    });
}

const deleteProduct = (req, res = response ) => {

    res.json({
        msg: 'Delete product controller'
    });
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    deleteProduct
}