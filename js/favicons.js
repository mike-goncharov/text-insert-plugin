function isSubdomain(subdomain) {
	// Проверяем на том ли мы находимся домене, который нам нужен
	var domain = 'agmsoft.org';
	var url = location.href;
	return (url.indexOf(subdomain+'.'+domain) + 1) ? true : false;
}

function changeIconForUrl() {
	// Заменяем фавиконку в соответствии с текущим доменом
	function replaceIcon(faviconHref) {
		var head = document.getElementsByTagName('head')[0];
		// Найти и удалить старую иконку из тега HEAD
		var links = head.getElementsByTagName('link');
		for (var i = 0; i < links.length; i++) {
		    var lnk = links[i];
		    if (lnk.rel=='shortcut icon') {
		        head.removeChild(lnk);
		    }
		}
		// Добавить новую иконку
		var link = document.createElement('link');
		link.setAttribute('href',faviconHref);
		link.setAttribute('type','image/x-icon');
		link.setAttribute('rel','shortcut icon');
		link.setAttribute('id','favicon');
		head.appendChild(link);
	}
	// Определить домен и соответсвующую ему иконку
	isSubdomain('agm-test') ? replaceIcon('https://dl.dropboxusercontent.com/s/jrc405dgh2w9t0q/agm-test-1.png'):
	isSubdomain('agm-test2') ? replaceIcon('https://dl.dropboxusercontent.com/s/gptgw50u6gojk3o/agm-test-2.png'):
	isSubdomain('agm-test3') ? replaceIcon('https://dl.dropboxusercontent.com/s/xc5x832s77cd64i/agm-test-3.png'):
	isSubdomain('jira') ? replaceIcon('https://dl.dropboxusercontent.com/s/fzt5qzgh2d62rha/jira.png'):
	0;
}


// Дергаем функции
document.addEventListener('DOMContentLoaded', changeIconForUrl());
window.onload = changeIconForUrl();
setInterval(changeIconForUrl, 10000);