const distribute = require('./first-fit');
const { doesFit } = require('./machine');

const distributeVms = (host, vms) => distribute(host, vms, doesFit);

module.exports = distributeVms;

