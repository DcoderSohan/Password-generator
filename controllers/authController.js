const passwordUtil = require('../utils/passwordUtil');

function authenticateUser(req, res) {
    const { password } = req.body;
    const currentPassword = passwordUtil.getCurrentPassword();

    if (password === currentPassword) {
        res.status(200).json({ success: true, message: "Authentication successful" });
    } else {
        res.status(401).json({ success: false, message: "Authentication failed" });
    }
}

module.exports = {
    authenticateUser
};
