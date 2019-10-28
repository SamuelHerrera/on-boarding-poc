function getAll(session) {
    return session
        .run('MATCH (e:CLIENT) RETURN e')
        .then(r => r.records.map(e => e.get('e')));
};

module.exports = {
    getAll: getAll
}
