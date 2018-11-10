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

export {
  clickTambah,
  bisaClickTambah
}
