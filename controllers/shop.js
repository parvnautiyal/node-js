const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            docTitle: 'All Products',
            path: '/products',
        });
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            docTitle: 'Shop',
            path: '/',
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {path: '/cart', docTitle: 'Your Cart'});
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {path: '/orders', docTitle: 'Your Cart'});
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {path: '/checkout', docTitle: 'Checkout'});
};
