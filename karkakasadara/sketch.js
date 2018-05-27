function setup() {
	createCanvas(windowWidth, windowHeight);
	let bgpage=chrome.extension.getBackgroundPage();
	let word=bgpage.word;
	let api_key=' your api key from yandex API';
	let url='https://translate.yandex.net/api/v1.5/tr.json/translate?key='+api_key+'&text='+word+'&lang=en-ta';
	//createP(word);
	loadJSON(url,gotData);
	function gotData(data)
	{

		createP(data.text[0]).style('font-size','30pt');
	}

}
