import _ from 'lodash';
const { trim, toLower } = _;

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
  // var appUrl = 'http://localhost/koperasi/masuk';
  // await browser.get(appUrl);
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
  var logoutButton = element(by.css('[ng-click="keluar()"]'));
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

  await browser.actions()
    .mouseMove(menu)
    .perform();

  await menu.click();

  await browser.actions()
    .mouseUp()
    .mouseMove(element(by.tagName('body')), {x: 300, y: 1})
    .perform();
}

const findClickMenu = async function () {
  await openSideBar();

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

module.exports = {
  login,
  logout,
  openSideBar,
  clickSidebarMenu,
  clickBackButton,
  clickTambah,
  dropdown
}
