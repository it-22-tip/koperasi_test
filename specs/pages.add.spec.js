import { forEach } from 'lodash';
import { list_sidemenuitems } from '../helper/index.js';

describe('run add', function () {
  it('run', async function () {
    await login();
  })
})

/* describe('list sidemenu items', function () {
  it('list sidemenu items', async function () {
    var itemlist = await list_sidemenuitems();
    console.log(itemlist);
  });
}); */

require(`./generate.pages.js`);

describe('run add', function () {
  it('run', async function () {
    await logout();
  })
})

