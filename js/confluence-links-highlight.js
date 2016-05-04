function onContextClick() {
	var main_content = document.getElementById("main-content");
	var elements = main_content.getElementsByTagName("a");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.background="rgba(255, 255, 0, 0.2)";
		elements[i].style.outline="rgb(255, 255, 0) solid 1px";
		elements[i].style.opacity="0.5";
	}
}

chrome.contextMenus.create({
    "title":"Highlight links",
    "contexts":["page", "selection", "link"],
    "onclick": onContextClick
});
// попытка сделать подсветку ссылок настраиваемой