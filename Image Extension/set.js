console.log('Hello Peoples')
let imgs=document.getElementsByTagName('img');
for (el of imgs){
	el.src=chrome.extension.getURL('images/brycen.jpg');
}
//function setup() {
//	noCanvas();
//	let img = createImg('images/background.jpg');
//	img.size(windowWidth, windowHeight);
//	img.position(0, 0);
//}