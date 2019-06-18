const distribute = require('./first-fit');
const { doFit } = require('./machine');

const distributeVms = (host, vms) => distribute(host, vms, doFit);

module.exports = distributeVms;
