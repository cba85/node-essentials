module.exports = class UserRepository {
	constructor(db) {
		this.db = db;
	}

	get(id) {
		const query = this.db.query("User");
		return {
			query: query,
			id: 1,
			name: "clement",
			email: "clement@gmail.com",
		};
	}
};
