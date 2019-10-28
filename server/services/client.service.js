import dbUtils from '../neo4j/dbUtils';
import db from '../models/clients.model';

export function getAllClients(req, res, next) {
    db.getAll(dbUtils.getSession(req))
        .then(response => {
            res.status(200).send(JSON.stringify(response));
        })
        .catch(next);
};