import * as client from '../models/clients.model';

export function getAll(req, res, next) {
    client.getAll(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};

export function getByName(req, res, next) {
    client.getByName(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};

export function create(req, res, next) {
    client.create(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};