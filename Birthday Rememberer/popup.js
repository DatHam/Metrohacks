function handleButtonClick(){
    // Use stored sync value.
    chrome.storage.sync.get("textBoxValue", ({ textBoxValue }) => {
       alert(textBoxValue);
    });
 }
 
 document.getElementById("popupButton").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Store sync value before the script is executed.
    let textBoxValue = document.getElementById('textBox').value;
    chrome.storage.sync.set({ textBoxValue });
 
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: handleButtonClick,
    });
 });