// Preloader institucional SynCodx
window.addEventListener('load', function() {
	var loader = document.getElementById('preloader');
	if (loader) {
		setTimeout(function() {
			loader.style.opacity = '0';
			setTimeout(function() {
				loader.style.display = 'none';
			}, 500);
		}, 1200);
	}
});

// Fecha o menu mobile ao clicar em qualquer link
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.menu .nav-link').forEach(function(link) {
		link.addEventListener('click', function() {
			var menubar = document.getElementById('menubar');
			if (menubar && menubar.checked) menubar.checked = false;
		});
	});
});

