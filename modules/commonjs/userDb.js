module.exports = function userdb(db) {
	const get = (id) => {
		const query = db.query("SELECT * FROM users", { id: 1 });

		return {
			query: query,
			id: 1,
			name: "clement",
			email: "clement@gmail.com",
		};
	};

	return { get };
};
