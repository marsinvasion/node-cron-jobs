var config_dir = process.env.CONFIG_DIR || process.cwd();
var config_name = process.env.NODE_ENV || 'config';
var config_file = config_dir + '/'+config_name+'.json';
var config = require(config_file);

var cronJob = require('cron').CronJob;
var jobs = {};
for(var i in config.jobs){
  (function (i) {
  var job = config.jobs[i];
  var jobName = job.handle;
  var start = job.start || false;
  try{
    var myjob = new cronJob(job.cron,null, null, start, job.timezone);
    myjob.config = job.config;
    jobs[jobName] = myjob;
  } catch(ex){
	console.log("cron pattern for "+jobName+" not valid");
  }
  }) (i);
}
exports.jobs = jobs;
exports.config = config.config;
