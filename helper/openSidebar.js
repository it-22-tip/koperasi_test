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

module.exports = openSideBar;
