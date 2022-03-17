class Db {
	constructor() {
		// Connect
		console.log("Connexion...");
	}

	query(query, params = {}) {
		return { query, params };
	}
}

module.exports = Db;
