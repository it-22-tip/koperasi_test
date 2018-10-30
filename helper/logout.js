const logout = async function () {

  let selector = '[ng-click="keluar()"]'
  let button = element(by.css(selector));

  // scroll to logout button
  await browser.actions()
    .mouseMove(button)
    .perform();

  // click logout
  await button.click();
}

module.exports = logout;
