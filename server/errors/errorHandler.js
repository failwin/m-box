class ErrorHandler extends Error {
    constructor(status, message, customCode) {
        super(message);
        this.message = message;
        this.status = status;
        this.code = customCode;
    }
}

module.exports = ErrorHandler;