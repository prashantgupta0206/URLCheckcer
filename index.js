// var http = require('http');
// var webDriver = require('selenium-webdriver');
// var By = require('selenium-webdriver').By;
// var until = require('selenium-webdriver').until;
const {Builder, By, Key, until} = require('selenium-webdriver');
var path = require('chromedriver').path;


// var browser = new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
// browser.get('https://www.google.co.in');
var input = "google";

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://www.google.com/');
      await driver.findElement(By.name('q')).sendKeys(input, Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      //await driver.quit();
    }
  })();
