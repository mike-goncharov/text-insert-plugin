function searchFocus() {
	// Устанавливаем фокус в поле поиска по конфлюенсам, если находимся на начальной странице
	(isSubdomain('confluence') && (document.getElementsByTagName('body')[0].className.match(/\bdashboard\b/))) ? document.getElementById('quick-search-query').focus(): 0; 
}

document.addEventListener('DOMContentLoaded', searchFocus());