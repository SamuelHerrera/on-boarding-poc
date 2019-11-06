export function neo4jSessionCleanup(req, res, next) {
  res.on('finish', () => {
    if (req.neo4jSession) {
      req.neo4jSession.close();
      delete req.neo4jSession;
    }
  });
  next();
}