export default async function () {
  let selector = '[ng-mousemove="(typeof($localStorage.currentUser) === \'undefined\') ? \'\' : toggleMenu($event)"]';
  let screenEdge = element(by.css(selector));
  // pindah mouse ke sisi kiri untuk menampilkan sidebar
  await browser.actions()
    .mouseMove(screenEdge, {x: 0, y: 0})
    .perform();
  return screenEdge;
}
