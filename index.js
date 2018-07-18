// var http = require('http');
var webDriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
// const {webDriver,Builder, By, Key, until} = require('selenium-webdriver');
var path = require('chromedriver').path;


// var browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
// browser.get('https://www.google.co.in');
var input = "https://www-k6.thinkcentral.com/content/hsp/math/gomath2012/na/grk/se_9780547587721_/html5/OPS/page0142.xhtml";

(async function example() {
    let driver = await new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build(); 
    try {
      await driver.get('http://hmhbiddle.pubedu.hegn.us/v2/lti_link_viewer_open_.php');
       await driver.findElement(webDriver.By.name('targ_url')).sendKeys(input);
       await driver.findElement(webDriver.By.xpath("//input[@value='Test LTI Link']")).click();
       await driver.findElement(webDriver.By.xpath("/html/body/div[3]/section/p[3]")).getText()
       .then(function(elem){
         console.log(elem)
       })
       await driver.findElement(webDriver.By.name('targ_url')).clear();
      //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      //await driver.quit();
    }
  })();

  // var request = require('request');
  // request('http://www.google.com', function (error, response, body) {
  //   console.log('error:', error); // Print the error if one occurred
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //   //console.log('body:', body); // Print the HTML for the Google homepage.
  // });
