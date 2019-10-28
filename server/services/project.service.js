import * as project from '../models/projects.model';

export function getAll(req, res, next) {
    project.getAll(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};

export function getByName(req, res, next) {
    project.getByName(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};

export function getByClient(req, res, next) {
    project.getByClient(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};

export function create(req, res, next) {
    project.create(req).subscribe(response => {
        res.write(JSON.stringify(response));
    }, error => {
        console.log(error)
    }, () => {
        res.end();
    });
};