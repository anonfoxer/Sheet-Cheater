/* Sheet Cheater
Made by anonfoxer
https://github.com/anonfoxer
The only reason this isnt an addon is that it includes semi malicious powers.
These include Bot Control


The general purpose of this script is some useful shortcuts and stuff for Google Sheets.
Probalby will make stuff for documents too.


To use:
- Copy paste all the source into the Google Sheets Script Editor.
- Select the "OnOpen" Function and run it.
- Save the document, and close it. It will run whenever you open the sheet.
- Repeat this for other sheets.

This will be made simplier in the future.*/

function onOpen() {
  var ui = SpreadsheetApp.getUi();//Get the spreadsheet ui
  //Make the Main Menu
  ui.createMenu('Sheet Cheater')
  .addItem('Copy Spreadsheet', 'copyMe')
  .addItem('Wipe Spreadsheet', 'fullWiperAsk')
  .addItem('Add Bot', 'addBot')
  .addItem('Remove Bot', 'killBot')
  .addItem('Info', 'spitInfo')
  .addItem('Changelog', 'changeMyLog')
  .addToUi();
   //make a new menu for bot control.
  /* createMenu('Bot Control')
  .addItem('Bots Spam', 'spammIfy')
  .additem('Bots Comment', 'makeMoreComments')
  .addItem('Stop Activity', 'botKillSwitch')
  */
}

//Copy Func :: Copies the spreadsheet and duplicates it.
function copyMe() {
  SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
  Browser.msgBox("Spread Sheet Copied!");
}

//Wiper :: Completely removes all data on spreadsheet
function fullWiperAsk() {
  //First, we gotta ask if they actually wanna do this. THey could just CTRL + A but eh.
  var ui = SpreadsheetApp.getUi();
  var confirm = ui.prompt("Sheet Cheater", "Delete ALL content in the spreadsheet?", ui.ButtonSet.YES_NO);
  
  //Response Processing
  if (confirm.getSelectedButton() == ui.Button.YES) {
    fullWiperAct();
  } else if (confirm.getSelectedButton() == ui.Button.NO) {
    Logger.log('No wipe.');
  } else {
    Logger.log('well ok then.');
  }
}

function fullWiperAct() {
  //if response yes, delete it all.
  SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
  Browser.msgBox('Spread Sheet Wiped!');
}

function addBot() {
  //Still in testing!
  //Adds a dummy email (will soon be a random selection) aadds it as an editor and as a viewer.
  SpreadsheetApp.getActiveSpreadsheet().addEditor(null);
  SpreadsheetApp.getActiveSpreadsheet().addViewer(null);
  Browser.msgBox('Bot Added!');
}

function killBot() {
  //Still in testing!
  //Removes the bot!
  SpreadsheetApp.getActiveSpreadsheet().removeEditor(null);
  SpreadsheetApp.getActiveSpreadsheet().removeViewer(null);
  Browser.msgBox('Bot Removed!');
}

function spitInfo() {
  //Spits out all the addon info, etc.
  Browser.msgBox('Sheet Cheater - Made by anonfoxer. Find me on github and keep an eye out for updates!');
}

function changeMyLog() {
  //Changelog!
  Browser.msgBox('Version 1.0.0 :: Start of the App. Began work on Bot controls.');
}
