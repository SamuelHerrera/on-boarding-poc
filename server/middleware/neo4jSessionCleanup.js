export function neo4jSessionCleanup(req, res, next) {
  res.on('finish', function () {
    console.log('closing neo4j');
    if(req.neo4jSession) {
      req.neo4jSession.close();
      delete req.neo4jSession;
    }
  });
  next();
}