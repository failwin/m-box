
//
// async function getRequest(url, params?) {
//     const result = await baseRequest({
//         method: 'GET',
//         url,
//         crossDomain: true,
//         params,
//     });
//
//     return R.propOr({}, 'data', result);
// }

async function postRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(data => data.json())
}
//
// async function putRequest(url, data) {
//     const result = await baseRequest({
//         method: 'PUT',
//         url,
//         data,
//     });
//
//     return R.propOr({}, 'data', result);
// }
//
// async function deleteRequest(url, data) {
//     const result = await baseRequest({
//         method: 'DELETE',
//         url,
//         data,
//     });
//
//     return R.propOr({}, 'data', result);
// }


const fetchRequest = {
    // get: getRequest,
    post: postRequest,
    // put: putRequest,
    // delete: deleteRequest,
};

export default fetchRequest;

