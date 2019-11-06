import * as client from '../models/clients.model';

export function getAll(req, res, next) {
    client.getAll(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
}

export function getByName(req, res, next) {
    client.getByName(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};

export function searchByName(req, res, next) {
    client.searchByName(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};

export function create(req, res, next) {
    client.create(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};
