import { Observable } from 'rxjs';
import { getNeo4jSession } from '../neo4j/dbUtils';

export function getAll(req) {
    let session = getNeo4jSession(req);
    return session.run('MATCH (e:CLIENT) RETURN e').then(r => r.records.map(e => e.get('e')));
};

export function getByName(req) {
    let session = getNeo4jSession(req);
    return session.run('MATCH (e:CLIENT) WHERE e.name = $name RETURN e',
        { name: req.params.name }
    ).then(r => r.records.map(e => e.get('e')));
};

export function searchByName(req) {
    let session = getNeo4jSession(req);
    return session.run('MATCH (e:CLIENT) WHERE e.name CONTAINS $name RETURN e',
        { name: req.params.name }
    ).then(r => r.records.map(e => e.get('e')));
};

export function create(req) {
    let session = getNeo4jSession(req);
    return session.run('CREATE (e:CLIENT {name: $name}) RETURN e',
        { name: req.body.name }
    ).then(r => r.records.map(e => e.get('e')));
};