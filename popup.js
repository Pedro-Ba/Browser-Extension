const downloadFile = document.getElementById("downloadFile");

chrome.storage.sync.get("color", ({ color }) => {
    downloadFile.style.backgroundColor = color;
});

downloadFile.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //ok so we've got the TAB. This means we can probably peruse the document as well..
    chrome.downloads.download({
        url: tab.url
    })
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() { 
    console.log("Nothing I guess"); 
}
