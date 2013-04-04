Configuration for creating your own jobs

Introduction
------------

Node cron jobs lets you schedule your jobs in a cron based scheduling environment. It lets you set a default set of configuration parameters as well as parameters for different runtime environments (development, test, qa, stage, production etc.). 
This leverages the work done with node-cron and lets you configure jobs in config files

Quick Start
-----------

**In your project directory, install npm if not already installed**

    abc$ npm install node-cron-jobs

**Create default configuration files. The extension is always json**

There are two environment variables to set:
CONFIG_DIR - This can be used to set the directory which has the configuration file. If not set it defaults to the directory where the node process is started from.
NODE_ENV - This can be set to read from a different json file. If not set the default file to be read is config.json

    abc$ export CONFIG_DIR=/mydir
    abc$ export NODE_ENV=development

This will read the configuration file from /mydir/development.json. Incase neither environment variables are set it will read config.json from the current working directory.

A sample config file

    {
      "jobs":[
        {"handle":"firstjob","cron":"* * * * * *","timezone":"America/Chicago"},
        {"handle":"secondjob","cron":"* * * * * *","timezone":"America/Los_Angeles","start":"true"}
      ]
    }

To reference node-cron-jobs in your code. Handle passed in the config contains a reference to the cron job

    var nodejobs = require('node-cron-jobs');
    var jobs = nodejobs.jobs;
    var job1 = jobs.firstjob;
    var job2 = jobs.secondjob;

Add a callback function which kicks off everytime it runs
    var func = function(){
      console.log('print this every time the job runs');
    }
    jobs.firstjob.addCallback(func);
    jobs.firstjob.start(); //assuming you haven't called start in the config file

LICENSE
-------

May be freely distributed under the MIT license

Copyright (c) 2013 Anoop Kulkarni
