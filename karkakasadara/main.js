window.addEventListener('mouseup',selected);
function selected()
{
    let text=window.getSelection().toString().trim();
if(text.length>0)
{

  let msg={txt:text};
  chrome.runtime.sendMessage(msg);
}
//console.log(window.getSelection().toString().trim());
}
