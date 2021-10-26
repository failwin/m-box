const express = require('express');
const cors = require('cors');
const _mongooseConector = require('./dbConector/dbConector');
require('dotenv').config();
const app = express();

_mongooseConector();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const { authRouter, userRouter } = require('./routes');
const { constants:{PORT} } = require('../server/constants');
const { errorMessages } = require('../server/errors');

app.use('/auth', authRouter);
app.use('/user', userRouter);

app.use('*', _notFoundHandler);
app.use(_handleErrors);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _handleErrors(err, req, res, next) {
    res
        .status(err.status)
        .json({
        message: err.message || 'Unknown error',
        customCode: err.code || 0
    });
};

function _notFoundHandler(err, req, res, next) {
    next({
        status: err.status || errorMessages.ROUTE_NOT_FOUND.code,
        message: err.message || errorMessages.ROUTE_NOT_FOUND.message
    });
};