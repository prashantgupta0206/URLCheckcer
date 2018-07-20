var webDriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var path = require('chromedriver').path;
const XLSX = require('xlsx');
const fs = require('fs');


let readData = [];
let newArr;
let statusArray = [];
let finalstatusArray = [];
let headers = ["URL", "Link Check Code", "Direct Check Code", "Code Logic Code"];

(async function readInput() {
  await fs.readFile('input.txt', function (err, data) {
    if (err) {
      throw err;
    } else {
      newArr = data.toString().split('\n');
      for (let i = 0; i <= newArr.length - 1; i++) {
        readData.push(newArr[i]);
      }
    }
  })
}());

(async function example() {
  let driver = await new webDriver.Builder().withCapabilities(webDriver.Capabilities.chrome()).build();
  try {
    await driver.get('http://hmhbiddle.pubedu.hegn.us/v2/lti_link_viewer_open_.php');
    for (let j = 0; j <= readData.length - 1; j++) {
      await driver.findElement(webDriver.By.name('targ_url')).sendKeys(readData[j]);
      await driver.findElement(webDriver.By.xpath("//input[@value='Test LTI Link']")).click();
      await driver.wait(until.elementIsVisible, 50000);
      await driver.findElement(webDriver.By.xpath("/html/body/div[3]/section/p[3]")).getText()
        .then(function (elem) {
          var str = elem.replace(/\s/g, '');
          var numbers = str.match(/\d+/g).map(Number);
          statusArray.push(readData[j]);
          statusArray.push(numbers[0]);
          statusArray.push(numbers[1]);
          statusArray.push(numbers[2]);
          finalstatusArray.push(statusArray);
          statusArray = [];
        })
      await driver.findElement(webDriver.By.name('targ_url')).clear();
    }

  } finally {
    await driver.quit();
    finalstatusArray.splice(0, 0, headers);
    let data = finalstatusArray;
    let ws = XLSX.utils.aoa_to_sheet(data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Output");
    XLSX.writeFile(wb, 'output.xlsx', { type: 'buffer', bookType: "xlsx" });
    console.log("Output xls has been created successfully!!!!")

  }
})();

