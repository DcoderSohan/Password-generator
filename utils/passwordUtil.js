let currentPassword;
let passwordTimeout;

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function startPasswordGenerator() {
    currentPassword = generatePassword(8);
    console.log("New password:", currentPassword);

    passwordTimeout = setInterval(() => {
        currentPassword = generatePassword(8);
        console.log("New password:", currentPassword);
    }, 30000); // 30000 milliseconds = 30 seconds
}

function stopPasswordGenerator() {
    clearInterval(passwordTimeout);
}

function getCurrentPassword() {
    return currentPassword;
}

module.exports = {
    startPasswordGenerator,
    stopPasswordGenerator,
    getCurrentPassword
};
