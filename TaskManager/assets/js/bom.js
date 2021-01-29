/*
Here is the exercise on working on the remaining bom method
Location , Navigator , screen , Window
Follow the Instruction on the comments
1. Declare the UI Variables for selecting on the elements
2. Use the innerHTML property to display the result on each element
3. The Text  of the elements will lead you what bom information is required
Adding Extra is Possible if you want to explore more ...
Good Luck !!!
*/




// Define UI Variables  here 
let _href = location.href;
let _protocol = location.protocol;
let _host = location.host;
let _port = location.port;
let _hostname = location.hostname;

let _appname = navigator.appName;
let _appversion = navigator.appVersion;
let _platform = navigator.platform;
let _language = navigator.language;
let _cookieenabled = navigator.cookieEnabled;

let _height = screen.height;
let _width = screen.width;
let _pixelDepth = screen.pixelDepth;

let _length = history.length;
let _state = history.state;


// Display the BOM Information on the innerHTML of the elements

let badges = document.querySelectorAll(".badge")
badges[1].innerText = _protocol;
badges[0].innerText = _href;
badges[2].innerText = _host;
badges[3].innerText = _port;
badges[4].innerText = _hostname;
badges[5].innerText = _appname;
badges[6].innerText = _appversion;
badges[7].innerText = _platform;
badges[8].innerText = _language;
badges[9].innerText = _cookieenabled;
badges[10].innerText = _height;
badges[11].innerText = _width;
badges[12].innerText = _pixelDepth;
badges[13].innerText = _length;
badges[14].innerText = _state;