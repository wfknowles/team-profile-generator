const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // If the 'dist' folder doesn't exist, create it...
        if (!fs.existsSync('./dist')) {
            fs.mkdirSync('./dist');
        }

        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
        });
        resolve({
            ok: true,
            message: 'File copied!'
        });
    });
};

module.exports = { writeFile, copyFile };