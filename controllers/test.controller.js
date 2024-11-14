const executeOracle = require("../services/executeOracle.service");

module.exports.index = async (req, res) => {
	try {
		res.render("pages/index.pug");
	} catch (e) {
		console.log(e);
	}
};

module.exports.viewCars = async (req, res) => {
	try {
		const result = await executeOracle.executeOracle(`
			SELECT * FROM CARS
		`);
		res.render("pages/cars/viewCars.pug", {
			cars: result,
		});
	} catch (e) {
		console.log(e);
	}
};

module.exports.insertCar = async (req, res) => {
	try {
		const result = await executeOracle.executeOracle(`
			BEGIN
				NHAP_XE_MOI(
					'${req.body.hangXe}',
					'${req.body.dongXe}',
					'${req.body.phienBan}',
					'${req.body.giaNiemYet}',
					'${req.body.phanKhuc}',
					'${req.body.dongCo}',
					'${req.body.damPhan}'
				);
			END;
		`);

		// Điều hướng đến trang viewCars sau khi thêm xe thành công
		res.redirect("/admin/cars/viewCars");
	} catch (e) {
		console.log("Lỗi khi thêm xe:", e);
		res.status(500).send("Lỗi khi thêm xe");
	}
};

module.exports.insertCarView = async (req, res) => {
	try {
		res.render("pages/cars/insertCar.pug");
	} catch (e) {
		console.log(e);
	}
};

module.exports.deleteCarView = async (req, res) => {
	try {
		res.render("pages/cars/deleteCar.pug");
	} catch (e) {
		console.log(e);
	}
};

module.exports.deleteCar = async (req, res) => {
	try {
		const result = await executeOracle.executeOracle(`
			BEGIN
				XOA_XE(
					'${req.body.hangXe}',
					'${req.body.dongXe}',
					'${req.body.phienBan}'
				);
			END;
		`);
		res.redirect("/admin/cars/viewCars");
	} catch (e) {
		console.log("Lỗi khi thêm xe:", e);
		res.status(500).send("Lỗi khi thêm xe");
	}
};
