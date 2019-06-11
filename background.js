// Clicking the extension badge/button...
chrome.browserAction.onClicked.addListener(e => chrome.runtime.reload())

// CORS
// https://github.com/vitvad/Access-Control-Allow-Origin
// https://enable-cors.org/
// https://developer.chrome.com/extensions/webRequest#type-OnHeadersReceivedOptions
chrome.webRequest.onHeadersReceived.addListener(
	details => {
		details.responseHeaders.push({ name: 'Access-Control-Allow-Origin'     , value: details.initiator })
		details.responseHeaders.push({ name: 'Access-Control-Allow-Credentials', value: 'true' })
		return { responseHeaders: details.responseHeaders }
	},
	{ urls: ['*://example.com/*'] },
	['blocking', 'responseHeaders']
)
