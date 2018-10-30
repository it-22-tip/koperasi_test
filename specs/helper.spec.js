const _ = require('lodash');
const login = async function () {
  await element(by.partialButtonText('Masuk')).click();
  return;
}

/**
 * Membuka Sidebar dan click Logout
 */
const logout = async function () {
  var logoutButton = element(by.css('[ng-click="keluar()"]'));

  // scroll to logout button
  await browser.actions()
    .mouseMove(logoutButton)
    .perform();

  // click logout
  await logoutButton.click();
}

/**
 * Membuka sidebar
 */
const openSideBar = async function () {
  let selector = '[ng-mousemove="(typeof($localStorage.currentUser) === \'undefined\') ? \'\' : toggleMenu($event)"]';
  var screenEdge = element(by.css(selector));
  // var sidebarSearchInput = element(by.model('filterMenu'));

  // scroll to edge to view sidebar
  await browser.actions()
    .mouseMove(screenEdge, {x: 0, y: 0})
    .perform();

  // send key to find
  // await sidebarSearchInput.sendKeys('logout');

  return screenEdge;
}

const clickSidebarMenu = async function (target) {
  await openSideBar();
  let selector = '[ng-click="$location.path(menu_anak.menu_url)"]';
  const selectorFunction = async function (element, index) {
    var menuText = await element.getText();
    menuText = _.trim(_.toLower(menuText));
    return menuText === target;
  }
  // filter menu by text and select first match
  let menu = await element.all(by.css(selector)).filter(selectorFunction).first();
  // scroll to menu
  await browser.actions()
    .mouseMove(menu)
    .perform();

  // var x = await menu.getText();
  // console.log(x);

  await menu.click();

  await browser.actions()
    .mouseUp()
    .mouseMove(element(by.tagName('body')), {x: 300, y: 1})
    .perform();
  return true;
}

const findClickMenu = async function () {
  await openSideBar();

}

const clickBackButton = async function () {
  let selector = '[ng-click="$location.path($route.current.params.file)"]';
  let button = await element(by.css(selector));
  await button.click();
}

const clickTambah = async function () {
  let selector = '[ng-click="$location.path(menuOpened + \'/add\')"]';
  let button = await element(by.css(selector));
  await button.click();
}

module.exports = {
  login,
  logout,
  openSideBar,
  clickSidebarMenu,
  clickBackButton,
  clickTambah
}
