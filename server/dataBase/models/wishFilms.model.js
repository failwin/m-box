const { Schema, model } = require('mongoose');

const { dataBaseTableEnum } = require('../../constants');

const wishFilmsSchema = new Schema ({
    filmName: {
        type: String,
        default: ''
    },
    isWatched: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: dataBaseTableEnum.USER
    }
});

wishFilmsSchema.pre('find', function() {
    this.populate('user');
});

module.exports = model(dataBaseTableEnum.WISH_FILMS, wishFilmsSchema);