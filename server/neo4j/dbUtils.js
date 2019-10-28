import { v1 as neo4j } from 'neo4j-driver';
console.log(`Database URL: ${process.env.DATABASE_URL} remote: ${process.env.DATABASE_REMOTE}`)
var driver = neo4j.driver(process.env.DATABASE_URL,
  neo4j.auth.basic(process.env.DATABASE_USER, process.env.DATABASE_PASS));

if (process.env.DATABASE_REMOTE) {
  driver = neo4j.driver(process.env.DATABASE_REMOTE_URL,
    neo4j.auth.basic(process.env.DATABASE_REMOTE_USER, process.env.DATABASE_REMOTE_PASS));
}

export function getNeo4jSession(context) {
  if (context.neo4jSession) {
    return context.neo4jSession;
  }
  else {
    context.neo4jSession = driver.session();
    return context.neo4jSession;
  }
}
