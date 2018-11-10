import path from 'path';
import dropdown from './dropdown'
// import gotopage from './gotopage';
import openSideBar from './opensidebar'
import login from './login'
import { writeFileSync } from 'fs';
import { trim, toLower, snakeCase, reduce, assign, keyBy } from 'lodash';
import { waitToBeNotDisplayed } from '@hetznercloud/protractor-test-helper';

const dropdownValue = async function (model) {
  // TODO: cari tau kenapa dropdown ini ga bisa di cari pakai model
  var dropdown = await element(by.css(`[model="${model}"]`));
  var text = await dropdown.element(by.css('[class="text"]')).getText();
  return text();
}


/**
 * Membuka Sidebar dan click Logout
 */
const logout = async function () {
  await openSideBar();
  let selector = '[ng-click="keluar()"]'
  var logoutButton = element(by.css(selector));
  await browser.actions()
    .mouseMove(logoutButton)
    .perform();
  await logoutButton.click();
}

const clickSidebarMenu = async function (target) {
  await openSideBar();
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = trim(toLower(menuText));
    return menuText === target;
  }

  let menu = await element.all(by.css(selector))
    .filter(selectorFunction)
    .first();

  // await browser.wait(protractor.ExpectedConditions.visibilityOf(menu, 1000));
  await browser.actions()
    .mouseMove(menu)
    .perform();

  await menu.click();

  await browser.actions()
    .mouseUp()
    .mouseMove(element(by.tagName('body')), {x: 300, y: 1})
    .perform();
  // await browser.sleep(300);
  //await browser.wait(protractor.ExpectedConditions.invisibilityOf(menu, 1000));
    // await waitToBeNotDisplayed(menu);
}

/**
 * Menutup halaman click X merah di sisi kiri atas
 */
const clickBackButton = async function () {
  let selector = '[ng-click="$location.path($route.current.params.file)"]';
  let button = await element(by.css(selector));
  await button.click();
}

/**
 * Ke halaman click Tambah di sisi kiri atas
 */
const clickTambah = async function () {
  let selector = '[ng-click="$location.path(menuOpened + \'/add\')"]';
  let button = await element(by.css(selector));
  await button.click();
}

/**
 * Ke halaman click Tambah di sisi kiri atas
 */
const bisaClickTambah = async function () {
  let selector = '[ng-click="$location.path(menuOpened + \'/add\')"]';
  let counter = await element.all(by.css(selector)).count();
  return counter > 0;
}

const clickFormTambah = async function () {

}

const clickContextMenu = async function (action) {
  let mainElement = await element(by.className('main'));
  let tableElement = await mainElement.element(by.tagName('table'));
  let tbodyElement = await mainElement.element(by.tagName('tbody'));
  let listElement = await tbodyElement.all(by.css('[ng-repeat="data in list"]')).first();
  // console.log(tableElement);
  // console.log(listElement);
  await browser.actions().mouseMove(listElement).perform();
  await browser.actions().click(protractor.Button.RIGHT).perform();
  let ctx = await element(by.className('context-menu'));
  await ctx.element(by.css(`[ng-click="$location.path(menuOpened + \'/${action}/\' + rightClickData.id)"]`)).click();
}

const listSideBar = async function () {
  await openSideBar();
  let arr = [];
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = trim(toLower(menuText));
    // console.log(menuText);
    arr.push(menuText);
  }

  await element.all(by.css(selector))
    .each(selectorFunction);
  return arr;
}

const getModelVal = async function (page) {
  const form = await element(by.className('form'));
  const processNgModel = function (str) {
    var x = str.split('.')
    return `case '${str}':
    \tret = await element(by.model('${str}')).getAttribute('value');
    \tbreak;\n`;
  }
  const processModel = function (str) {
    var x = str.split('.')
    return `case '${str}':
    \tret = await dropdownValue('${str}');
    \tbreak;\n`;
  }
  let params = []
  let body = []
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      var model = await elem.getAttribute('model');
      var ngModel = await elem.getAttribute('ng-model');
      var par = (model === null) ? ngModel : model;
      params.push(par.split('.')[1]);
      body.push((model === null) ? processNgModel(ngModel) : processModel(model));
    }
  );
  var bodyStr = reduce(
    body,
    function (result, value, key) {
      let v = `\t\t${value}`;
      return `${result}${v}`;
    },
    ''
  );
  var func = `async function (\n`
  func += `\tsearchModel` // `${paramsStr}`
  func += `\n) {\n`;
  func += `\tlet ret;\n`;
  func += `\tswitch (searchModel) {\n`;
  func += `${bodyStr}`;
  func += `\t}\n`;
  func += `\treturn ret;\n`;
  func += `}`;
  func = `export default ${func}`;
  return func;
}

const getModelList = async function (page) {
  const form = await element(by.className('form'));
  const processNgModel = function (str) {
    var x = str.split('.')
    return `await element(by.model('${str}')).sendKeys(${x[1]})`;
  }
  const processModel = function (str) {
    var x = str.split('.')
    return `await dropdown('${str}', ${x[1]})`;
  }
  let params = []
  let body = []
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      var model = await elem.getAttribute('model');
      var ngModel = await elem.getAttribute('ng-model');
      var par = (model === null) ? ngModel : model;
      params.push(par.split('.')[1]);
      body.push((model === null) ? processNgModel(ngModel) : processModel(model));
    }
  );
  var paramsStr = reduce(
    params,
    function (result, value, key) {
      let v = ((params.length-1) === key) ? `\t${value}` : `\t${value},\n`;
      return `${result}${v}`;
    },
    ''
  );
  var bodyStr = reduce(
    body,
    function (result, value, key) {
      let v = (key === 0) ? `\t${value};\n` : `\t${value};\n`;
      return `${result}${v}`;
    },
    ''
  );
  var func = `async function (\n`
  func += `${paramsStr}`
  func += `\n) {\n`
  func += `${bodyStr}`
  func += `}`;
  func = `export default ${func}`;
  return func;
}

const jsonTemplate = function () {
  var retVal = [];

  return JSON.stringify(retval);
}

const getModel = async function () {
  let dataArray = [];
  let getterTemplate = function (model, statement) {
    return `case '${model}':\n\treturnValue = ${statement};\n\tbreak;\n`;
  }
  let form = await element(by.className('form'));
  var obj = {
    jsonTemplate: {},
    setterParams: [],
    getter: [],
    setter: [],
  };
  await form.all(by.css('[ng-model],[model]')).each(
    async function (elem, index) {
      let ngModelAttribute = await elem.getAttribute('ng-model');
      let modelAttribute = await elem.getAttribute('model');
      // let fileAttribute = await elem.element(by.css('[type="file"]'));
      // let checkBoxAttribute = await elem.element(by.css('[type="checkbox"]'));
      let par = (ngModelAttribute === null) ? modelAttribute.split('.')[1] : ngModelAttribute.split('.')[1];
      // console.log(par)
      if (par !== undefined) {
        obj.setterParams.push(par);
        obj.jsonTemplate[par] = '';
      };
      // start if else
      if (ngModelAttribute !== null) {
        let fileAttribute = await elem.element(by.css('[type="file"]'));
        // obj.param = ngModelAttribute.split('.')[1];
        if (fileAttribute !== null) { // file input
          var getterStatement = `null; // await element(by.model('${ngModelAttribute}')).getAttribute('value');`;
          obj.getter.push(getterTemplate(ngModelAttribute, getterStatement));
          obj.setter.push(`await element(by.model('${ngModelAttribute}')).sendKeys(${ngModelAttribute.split('.')[1]})`);
        } else { // textinput
          var getterStatement = `await element(by.model('${ngModelAttribute}')).getAttribute('value')`;
          obj.getter.push(getterTemplate(ngModelAttribute, getterStatement));
          obj.setter.push(`await element(by.model('${ngModelAttribute}')).sendKeys(${ngModelAttribute.split('.')[1]})`);
        }
      } else if (modelAttribute !== null) {
        let checkBoxAttribute = await elem.element(by.css('[type="checkbox"]'));
        // obj.param = modelAttribute.split('.')[1];
        if (checkBoxAttribute !== null) { // checkboxinput
          var getterStatement = `await element(by.model('${modelAttribute}')).getAttribute('value')`;
          obj.getter.push(getterTemplate(modelAttribute, getterStatement));
          obj.setter.push(`await dropdown('${modelAttribute}', ${modelAttribute.split('.')[1]})`);
        } else {
          var getterStatement = `await dropdownValue('${modelAttribute}')`
          obj.getter.push(getterTemplate(modelAttribute, getterStatement));
          obj.setter.push(`// checkbox await dropdown('${modelAttribute}', ${modelAttribute.split('.')[1]})`);
        }
      }
      // dataArray.push(obj);
    }
  );
  dataArray.push(obj)
  return dataArray;
}

const generateFormFiller = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.filler.js`;
  var form = await getModelList(name);
  writeFileSync(`${filename}`, form)
}

const generateFormValueGetter = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.getter.js`;
  var form = await getModelVal(name);
  writeFileSync(`${filename}`, form);
}

const generateJsonDummyTemplate = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  // var filename = `${pagesPath}/${snakeCase(toLower(name))}_dummy.json`;
  var data = await getModel(data);
  console.log(data);
  // writeFileSync(`${filename}`, form);
}

const fillautocomplete = async function (model, sendVal, searchVal = '') {
  let selector = `[ng-model="${model}"]`;
  searchVal = (searchVal === '') ? sendVal : searchVal;
  let hidden = await element.all(by.css(selector)).first();
  let textField = await hidden.element(by.xpath('preceding-sibling::div')).element(by.model('text'));
  await textField.sendKeys(searchVal);
  let folowingParent = await textField.element(by.xpath('..')).element(by.xpath('following-sibling::div'));
  browser.wait(protractor.ExpectedConditions.visibilityOf(folowingParent), 3000);
  let c = await folowingParent.all(by.css('[class="result"]')).filter(
    async function (elem, index) {
      let texts = await elem.getText()
      return texts === sendVal;
    }
  ).first().click();
}

module.exports = {
  login,
  logout,
  openSideBar,
  clickSidebarMenu,
  clickBackButton,
  clickTambah,
  dropdown,
  clickContextMenu,
  getModelList,
  listSideBar,
  bisaClickTambah,
  generateFormFiller,
  generateFormValueGetter,
  generateJsonDummyTemplate,
  fillautocomplete
}
