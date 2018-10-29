describe('xfocus login', function () {
	var appUrl = 'http://localhost/koperasi/masuk';
	var cl_no	= '001';
	var username = 'edo';
	var password = 'edo';

	it('harus masuk ke dashboard', async function () {
		browser.get(appUrl);
		element(by.partialButtonText('Masuk')).click();

		// mengharapkan title browser === 'Dashboard'
		expect(browser.getTitle()).toEqual('Dashboard');
	});

	it('Gaji ADD', async function () {
	 	await browser.get('http://localhost/koperasi/gaji');
	 	expect(browser.getTitle()).toEqual('Gaji');
	 	await browser.get('http://localhost/koperasi/gaji/add');
	    element(by.model('input.gaji_pegawai_id')).sendKeys('1');
	    element(by.model('input.gaji_bulan')).sendKeys('2018-08-08');
	    element(by.model('input.gaji_pokok')).sendKeys('200000');
	    element(by.model('input.gaji_jasa')).sendKeys('200000');
	    element(by.model('input.gaji_honor')).sendKeys('200000');
	    element(by.model('input.gaji_insentif')).sendKeys('200000');
	    element(by.model('input.gaji_tunj_jabatan')).sendKeys('200000');
	    element(by.model('input.gaji_tunj_beras')).sendKeys('200000');
	    element(by.model('input.gaji_kesra')).sendKeys('200000');
	    element(by.model('input.gaji_pot_kesra')).sendKeys('200000');
	    element(by.model('input.gaji_pot_pulsa')).sendKeys('200000');
	    element(by.model('input.gaji_bersih')).sendKeys('200000');

	    element(by.css('[items="akun"]')).click();
	    element(by.css('[data-value="15"]')).click();
	    element(by.css('[ng-click="action()"]')).click();

	    await browser.get('http://localhost/koperasi/gaji');
	    expect(element.all(by.css('[ng-right-click="contextPosition($event, data)"]')).count()).toEqual(3);

	});

	it('Kataset ADD', async function () {
	 	await browser.get('http://localhost/koperasi/kataset');
	 	expect(browser.getTitle()).toEqual('Kategori Aset');
	 	await browser.get('http://localhost/koperasi/kataset/add');

	    element(by.model('input.kataset_nama')).sendKeys('AAA');

	    element(by.css('[items="berwujud"]')).click();

	    element(by.css('[items="pajak"]')).click();

	    element(by.css('[items="akun"]')).click();
	    element(by.css('[data-value="5"]')).click();

	    element(by.css('[ng-click="action()"]')).click();

	    await browser.get('http://localhost/koperasi/kataset');
	    expect(element.all(by.css('[ng-right-click="contextPosition($event, data)"]')).count()).toEqual(3);
	    
	});




	// it('harus pergi ke logout', async function () {
	// 	// browser.driver.manage().timeouts().setScriptTimeout(30000); --> pakai ini kalau harus tunggu loading

		
	// 		ui sidebar left inverted vertical menu ng-scope --> sidebar tidak terlihat
	// 	 	ui sidebar left inverted vertical menu ng-scope overlay visible --> sidebar terlihat
		
	// 	browser.executeScript('document.querySelector(\'[class="ui sidebar left inverted vertical menu ng-scope"]\').classList.add(\'visible\')');
	// 	element(by.css('[ng-click="keluar()"]')).click();
	// 	expect(browser.getTitle()).toEqual('Focus Trading Plus');
	// });
});