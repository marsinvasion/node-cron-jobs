var config_dir = process.env.CONFIG_DIR || process.cwd();
var config_name = process.env.NODE_ENV || 'config';
var config_file = config_dir + '/'+config_name+'.json';
var config = require(config_file);

var init = function() {
  console.log(config.username + "" + config.password);
};

exports.init = init;

var cronJob = require('cron').CronJob;
new cronJob('* * * * * *', function(){
    console.log('You will see this message every second');
}, null, true, "America/Los_Angeles");

new cronJob('* * * * * *', function(){
    console.log('This is the second set of messages');
}, null, true, "America/Los_Angeles");
