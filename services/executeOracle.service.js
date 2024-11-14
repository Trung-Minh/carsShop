const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

module.exports.executeOracle = async (sql) => {
	try {
		const con = await oracledb.getConnection({
			user: process.env.oracleUser,
			password: process.env.oraclePassword,
			connectString: process.env.oracleConnectString,
		});

		const data = await con.execute(sql);
		await con.commit();

		return data.rows;
	} catch (error) {
		console.error("Lỗi khi thực thi Oracle:", error); // Thêm dòng này
		throw error; // Ném lỗi để controller có thể bắt lỗi
	}
};
