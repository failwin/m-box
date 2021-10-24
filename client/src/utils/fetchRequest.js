import constants from "../constants/constants";

const fetchRequests = {
    getWishList: async (id) => {
        return await fetch(`${constants.BASE_URL}/user/${id}`)
            .then(data => data.json())
            .then((data) => data);
    },

    signUpUser: async (data) => {
        return await fetch(`${constants.BASE_URL}/auth/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json())
    },

    signInUser: async (data) => {
        return await fetch(`${constants.BASE_URL}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json())
    },

    logOutUser: async () => {
        const token = JSON.parse(localStorage.getItem('user'));

        return await fetch(`${constants.BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token.accessToken
            },
        });
    },

    addToWishList: async (id, data) => {
        const token = JSON.parse(localStorage.getItem('user'));

        return await fetch(`${constants.BASE_URL}/user/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token.accessToken
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json());
    },

   removeFromWishList: async (id, data) => {
       const token = JSON.parse(localStorage.getItem('user'));

       return await fetch(`${constants.BASE_URL}/user/${id}/films/${data}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token.accessToken
            }
        });
    },

    updateFilmInWishList: async (id, data) => {
        const token = JSON.parse(localStorage.getItem('user'));

        return await fetch(`${constants.BASE_URL}/user/${id}/films/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token.accessToken
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json());
    }
}

export default fetchRequests;

