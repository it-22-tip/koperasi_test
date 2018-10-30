import * as helper from  './helper.spec';
describe('es6', function() {
  it('es6', async function() {
    let lg = await helper.login()
    console.log(lg);
  })
})
