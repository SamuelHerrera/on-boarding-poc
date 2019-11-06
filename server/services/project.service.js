import * as project from '../models/projects.model';

export function getAll(req, res, next) {
    project.getAll(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};

export function getByName(req, res, next) {
    project.getByName(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};

export function getByClient(req, res, next) {
    project.getByClient(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};

export function create(req, res, next) {
    project.create(req).then(result => {
        res.send(result);
    }).catch(error => {
        console.log(error)
    });
};