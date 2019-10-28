import { Observable } from 'rxjs';
import { getNeo4jSession } from '../neo4j/dbUtils';

export function getAll(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run('MATCH (e:CLIENT) RETURN e').subscribe({
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
        session.run('MATCH (e:CLIENT) WHERE e.name = $name RETURN e',
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

export function create(req) {
    let session = getNeo4jSession(req);
    return new Observable((subscriber) => {
        session.run('CREATE (e:CLIENT {name: $name}) RETURN e',
            { name: req.body.name }
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