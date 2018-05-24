function setup() {
	createCanvas(windowWidth, windowHeight);
	let bgpage=chrome.extension.getBackgroundPage();
	let word=bgpage.word;
	let url='https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180504T131049Z.ce0ad7194e99dbf1.17a1154902a55a85360d50fd4a3a93a1cf849e14&text='+word+'&lang=en-ta';
	//createP(word);
	loadJSON(url,gotData);
	function gotData(data)
	{

		createP(data.text[0]).style('font-size','30pt');
	}

}
