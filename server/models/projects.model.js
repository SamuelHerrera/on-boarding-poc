import { Observable } from 'rxjs';
import { getNeo4jSession } from '../neo4j/dbUtils';

export function getAll(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run('MATCH (e:PROJECT) RETURN e').subscribe({
            onNext: (record) => {
                subscriber.next(record.get('e'));
            },
            onCompleted: () => {
                subscriber.complete();
            },
            onError: (error) => {
                console.log(error);
            }
        });
    });
};

export function getByName(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run('MATCH (e:PROJECT) WHERE e.name = $name RETURN e',
            { name: req.params.name }
        ).subscribe({
            onNext: (record) => {
                subscriber.next(record.get('e'));
            },
            onCompleted: () => {
                subscriber.complete();
            },
            onError: (error) => {
                console.log(error);
            }
        });
    });
};

export function getByClient(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run(`MATCH (e:PROJECT)-[:BELONG]->(c:CLIENT) 
        WHERE c.name = $name 
        RETURN e`,
            { name: req.params.client }
        ).subscribe({
            onNext: (record) => {
                subscriber.next(record.get('e'));
            },
            onCompleted: () => {
                subscriber.complete();
            },
            onError: (error) => {
                console.log(error);
            }
        });
    });
};

export function create(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run(`
        MATCH (c:CLIENT) where c.name=$client
        CREATE (e:PROJECT {name: $name})-[:BELONG]->(p)
        RETURN e`, {
            name: req.body.name,
            client: req.body.client
        }).subscribe({
            onNext: (record) => {
                subscriber.next(record.get('e'));
            },
            onCompleted: () => {
                subscriber.complete();
            },
            onError: (error) => {
                console.log(error);
            }
        });
    });
};