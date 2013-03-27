var config_dir = process.env.CONFIG_DIR || process.cwd();
var config_name = process.env.NODE_ENV || 'config';
var config_file = config_dir + '/'+config_name+'.json';
var config = require(config_file);

var init = function() {
  console.log(config.username + "" + config.password);
};

exports.init = init;
