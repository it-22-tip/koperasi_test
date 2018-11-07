import path from 'path';
import { writeFileSync } from 'fs';
import { trim, toLower, snakeCase, reduce } from 'lodash';
import { waitToBeNotDisplayed } from '@hetznercloud/protractor-test-helper';

/**
 *
 */
const goToUrl = async function (page) {
  const { base_url } = browser.params;
  const url = `${base_url}/${page}`;
  // console.log(url);
  await browser.get(url);
}

const login = async function () {
  await goToUrl('masuk');
  element(by.partialButtonText('Masuk')).click();
  expect(browser.getTitle()).toEqual('Dashboard');
}

/**
 * Dropdown
 */
const dropdown = async function (model, selection) {
    // TODO: cari tau kenapa dropdown ini ga bisa di cari pakai model
    var dropdown = await element(by.css(`[model="${model}"]`));
    await dropdown.click();
    // menu itu  ada di dalam class: menu transition baru di cari di repeater
    var menu = await dropdown.element(by.className('menu transition'));
    await menu.all(by.repeater('item in items')).filter(
      async function (element, index) {
        var text = await element.getText();
        return text === selection;
      }
    )
    .first()
    .click();
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

/**
 * Membuka sidebar
 */
const openSideBar = async function () {
  let selector = '[ng-mousemove="(typeof($localStorage.currentUser) === \'undefined\') ? \'\' : toggleMenu($event)"]';
  let screenEdge = element(by.css(selector));
  // pindah mouse ke sisi kiri untuk menampilkan sidebar
  await browser.actions()
    .mouseMove(screenEdge, {x: 0, y: 0})
    .perform();
  return screenEdge;
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

const genGetter = async function (page) {
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

const generateFormFiller = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.form.js`;
  var form = await getModelList(name);
  writeFileSync(`${filename}`, form)
}

const generateFormValueGetter = async function (name) {
  var pagesPath = path.join(rootPath, 'temp', 'pages');
  await clickSidebarMenu(name);
  if (!await bisaClickTambah()) return;
  await clickTambah();

  var filename = `${pagesPath}/${snakeCase(toLower(name))}_add.form.js`;
  var form = await getModelList(name);
  writeFileSync(`${filename}`, form)
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
  generateFormValueGetter
}
