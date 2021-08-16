const url = 'http://195.72.146.25/api/v1/cars';
const saveCar = ({model, price, year}) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
const getCars = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(value => value.json());
}
export {saveCar, getCars};