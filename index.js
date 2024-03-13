const config = require('./config.json');

download(`${config.java8.win}`, `./`);

decompress(`./zulu8.76.0.17-ca-jdk8.0.402-win_x64.zip`, `./`)