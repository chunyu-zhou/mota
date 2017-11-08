const connect = require('./connect');
const model = require('./model');
const binding = require('./binding');
const bindable = require('./bindable');
const autorun = require('./autorun');
const watch = require('./watch');
const deep = require('./deep');
const utils = require('./utils');
const stateful = require('./stateful');
const composition = require('./composition');
const info = require('$info');

module.exports = {
  connect, model, binding, bindable, watch, autorun, deep, stateful,
  composition, utils, ...info
};