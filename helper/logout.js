import openSideBar from './open_sidemenu';
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
export default logout;
