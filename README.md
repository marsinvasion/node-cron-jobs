# Configuration for creating your own jobs

## Introduction

Node cron jobs lets you schedule your jobs in a cron based scheduling environment. It lets you set a default set of configuration parameters as well as parameters for different runtime environments (development, test, qa, stage, production etc.). 
This leverages the work done with node-cron and lets you configure jobs in config files

## Quick Start

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
        {"handle":"firstjob","cron":"* * * * * *","timezone":"America/Chicago", "config": {"url":"http://myfavurl.com","time":"30"}
        },
        {"handle":"secondjob","cron":"* * * * * *","timezone":"America/Los_Angeles","start":"true"}
      ],
      "config":{ //any key value pair
        "dburl":"mydburl",
        "port":"333"
       }
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

The config parameters are configurable globally or changeable per job. It can be accessed while creating the call back function or anywhere else required.

    console.log(nodejobs.config.dburl);
    console.log(jobs.firstjob.config.url);
    console.log(jobs.firstjob.config.time); 

## Dependencies

- [cron](https://github.com/ncb000gt/node-cron): Cron jobs for your node
- [time](https://github.com/TooTallNate/node-time): &quot;time.h&quot; bindings for Node.js

## License

MIT

Copyright (c) 2013 Anoop Kulkarni (http://anoopkulkarni.com)




