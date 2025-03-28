const registerUser = async (req, res, next) => {
	try {
		if (!req.body.email) {
			res.status(400);
			throw new Error('Please add an email');
		}
		res.status(200).send('Register User');
	} catch (error) {
		next(error); // Pass the error to the error-handling middleware
	}
};

module.exports = {
	registerUser,
};
