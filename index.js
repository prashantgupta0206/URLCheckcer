var http = require('http');
var webDriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var path = require('chromedriver').path;


var browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
browser.get('https://www-review-k6.thinkcentral.com/content/hsp/math/gomath2018/ny/gr3/transition_lessons_te_9781328595836_/index.html')