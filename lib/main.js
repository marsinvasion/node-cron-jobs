var config_dir = process.env.CONFIG_DIR || process.cwd();
var config_name = process.env.NODE_ENV || 'config';
var config_file = config_dir + '/'+config_name+'.json';
var config = require(config_file);

var cronJob = require('cron').CronJob;
var jobs = {};
for(var i in config.jobs){
  var job = config.jobs[i];
  var jobName = job.handle;
  var myjob = new cronJob(job.cron, function(){
    console.log('You will see this message on cron schedule for handle');
}, null, true, job.timezone);
  jobs[jobName] = myjob;
}
exports.jobs = jobs;