console.log("background running fine");
chrome.runtime.onMessage.addListener(getter);
window.word="tamil";
function getter(message,sender,response)
{
console.log(message.txt);
word=message.txt;
}
