import { Observable } from 'rxjs';
import { getNeo4jSession } from '../neo4j/dbUtils';

export function getAll(req) {
    let session = getNeo4jSession(req);
    return session.run('MATCH (e:PROJECT) RETURN e').then(r => r.records.map(e => e.get('e')));
};

export function getByName(req) {
    let session = getNeo4jSession(req);
    return session.run('MATCH (e:PROJECT) WHERE e.name = $name RETURN e',
        { name: req.params.name }
    ).then(r => r.records.map(e => e.get('e')));
};

export function getByClient(req) {
    let session = getNeo4jSession(req);
    return session.run(`MATCH (e:PROJECT)-[:BELONG]->(c:CLIENT) 
        WHERE c.name = $name 
        RETURN e`,
        { name: req.params.client }
    ).then(r => r.records.map(e => e.get('e')));
};

export function create(req) {
    let session = getNeo4jSession(req);
    return session.run(`
        MATCH (c:CLIENT) where c.name=$client
        CREATE (e:PROJECT {name: $name})-[:BELONG]->(p)
        RETURN e`, {
        name: req.body.name,
        client: req.body.client
    }).then(r => r.records.map(e => e.get('e')));
};