import has_click_tambah from './has_click_tambah';
import click_sidemenu from './click_sidemenu'
import click_tambah from './click_tambah';
import fill_autocomplete from './fill_autocomplete';
import generate_testhelper from './generate_testhelper';
import list_sidemenuitems from './list_sidemenuitems';
import login from './login';
import logout from './logout';
import open_sidemenu from './open_sidemenu';
import open_tablecontextmenu from './open_tablecontextmenu';
import select_dropdown from './select_dropdown';

const dropdownValue = async function (model) {
  // TODO: cari tau kenapa dropdown ini ga bisa di cari pakai model
  var dropdown = await element(by.css(`[model="${model}"]`));
  var text = await dropdown.element(by.css('[class="text"]')).getText();
  return text();
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
  has_click_tambah,
  click_redbackbutton,
  click_sidemenu,
  click_tambah,
  dropdown,
  fill_autocomplete,
  generate_testhelper,
  list_sidemenuitems,
  login,
  logout,
  open_sidemenu,
  open_tablecontextmenu,
  select_dropdown,
}
