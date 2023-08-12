const os = require("os");

console.log("free memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
// 1kb => 1024 bytes => 1mb => 1024 kb => 1gb => 1024 mb
console.log("User Info", os.userInfo());
console.log("Platform", os.platform());
console.log("version", os.version());
console.log(`Processor, ${os.cpus().length} Core`);
console.log("uptime", os.uptime());
console.log("arch", os.arch());
