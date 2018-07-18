var webDriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var path = require('chromedriver').path;
const XLSX = require('xlsx');
const fs = require('fs');




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


 // Write Data in XLSx
//   newInput.splice(0, 0, headers); 
//   let data = newInput; 
//   let ws = XLSX.utils.aoa_to_sheet(data); 
//       let wb = XLSX.utils.book_new(); 
//       XLSX.utils.book_append_sheet(wb, ws, "Output"); 
//       XLSX.writeFile(wb, 'output.xlsx',  {type:'buffer', bookType:"xlsx"}); 
//       console.log("Output xls has been created successfully!!!!")

// Read File
// let newArr; 
// let readData = [];
// fs.readFile('input.txt', function(err, data) {
    //     if (err) {
    //         throw err; 
    //     }else {
    //          newArr = data.toString().split('\n'); 
    //          var count = 1; 
    //         for (let i = 0; i <= newArr.length-1; i++ ) {
    //             readData.push(newArr[i]); 
    //             if (readData.length == splitCount || newArr.length-1 == i) {
    //                 writeData(readData, count); 
    //                 readData = [];
    //                 count++;
    //             }
                
    //         }
    //     }
    // })