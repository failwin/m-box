const { wishFilms, User } = require('../dataBase');
const { passwordHasher } = require('../helpers');

module.exports = {
    createUser: async (data) => {
        const { password, email } = data;

        const userByEmail = await User.findOne({email});

        if(userByEmail) {
            throw new Error('Email is already exist')
        }

        const hashedPassword = await passwordHasher.hash(password);

        const createdUser = await User.create({...data, password: hashedPassword});

        return createdUser;
    },
    updateFilmById: async (params, body) => {

        const updatedUser = await wishFilms.findByIdAndUpdate(params.filmId, body);

        return updatedUser;
    },

    addFilm: async (data, user) => {

        await wishFilms.create({...data, user: user._id});

        const updatedUserFilms = await wishFilms.find({user: user._id});

        return updatedUserFilms;
    },
    removeFilm: async (data) => {
        const {filmId} = data;

       await wishFilms.findByIdAndDelete(filmId);
    }
}