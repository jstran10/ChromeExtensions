//console.log('Hello Peoples')
//let imgs=document.getElementsByTagName('img');
//for (el of imgs){
//	el.src=chrome.extension.getURL('images/brycen.jpg');
//}
function setup(){
	console.log('Hi');
	noCanvas()
	let img = createImg('images/background.jpg');
	img.size(windowWidth, windowHeight);
	img.position(0, 0);
	size(200, 200);

  background(0);

  noStroke();

  fill(102);
  window.location = "http://www.htmlcodes.ws/"

}