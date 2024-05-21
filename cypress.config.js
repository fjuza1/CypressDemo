const {defineConfig} = require('cypress');
const dotenv = require('cypress-plugin-dotenv');
const prostredia = require('./prostredia.js');
module.exports = defineConfig({
	projectId: 'zaqmt4',
	e2e: {
		baseUrl: 'https://dtcfr-w-frontv.intra.ditec.sk:8401',
    testIsolation:true,
		setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
		switch (browser.name) {
			case 'chrome':
				launchOptions.args.push('--no-sandbox')
				launchOptions.args.push('--auto-open-devtools-for-tabs')
				break;
		
			default:
				break;
		}
		return launchOptions
      })
	  	return config.env.configFile = prostredia
		},
		testIsolation: true,
		headless: true
	},
	experimentalCspAllowList: ["frame-src"],
	retries: {
		openMode: 1,
		runMode: 1
	},
	experimentalStudio: true,
	viewportHeight: 720,
	viewportWidth: 1280,
	downloadsFolder: './downloads',
	chromeWebSecurity: false,
	video: true,
	watchForFileChanges: true,
	experimentalFetchPolyfill: true,
	trashAssetsBeforeRuns:true,
  	scrollBehavior:'nearest',
	env: {
		cookie:'CfDJ8M3RCd3X6CJHtZ-t4T4jo9Rzv4r3s8GX2RSiazEQ0wUCF_3-CH8WiMJZfZZNVAJomHuIQXe06aZnxQrhvvvq48y4-vGMuNVzmizIpdhJvWVZWm2aseVm54kSE7Ykx2LU5QSo5fUWmqoPees4YXo2uP2h3AKUBTkhJTnC6vDUuxteslOV2zMzS9rj373pw02SMR2riH_kjDeYa9a27p0FHMMFRu4jLccS038xcf5Rs3JfZ-wmbq4NIR54UBJhISOviXsb7e77lScM4br7EvUoqh8Lh935UtrNagSuC_b69qUUzjUWW7AzHSEpL69TzMVVYw'
	}
});