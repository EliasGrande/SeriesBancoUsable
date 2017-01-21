// ==UserScript==
// @name         SeriesBlancoUsable
// @description  SeriesBlanco se ha pasado tres pueblos poniendo publicidad invisible por todos lados, este escriptillo la hace usable de nuevo.
// @namespace    https://github.com/EliasGrande/
// @downloadURL  https://github.com/EliasGrande/SeriesBancoUsable/raw/master/series-blanco-usable.user.js
// @updateURL    https://github.com/EliasGrande/SeriesBancoUsable/raw/master/series-blanco-usable.meta.js
// @version      1.0.0
// @include      *://seriesblanco.com/*
// ==/UserScript==
/*! SeriesBlancoUsable (C) 2017 Elías Grande Cásedas | MIT | opensource.org/licenses/MIT */
(function($){
	
	$(function(){
		//anuncios invisibles por toda la página
		function removeAds() { $('iframe, #capac').remove(); }
		removeAds();
		setInterval(removeAds, 3000);
		
		//resaltar enlaces
		$('a[href^="/enlacen/"]')
			.mouseenter(function() { $(this).css('outline','2px solid #00f'); })
			.mouseleave(function() { $(this).css('outline','0'); });
		
		//redes sociales
		$('.st_twitter_hcount').remove();
		$('a[href^="https://www.facebook"]').parents('li:first').remove();
		$('a[href^="https://plus.google"]').parents('li:first').remove();
		$('a[href^="https://twitter"]').parents('li:first').remove();
		
		//banners menu izda
		var nav = $('#menu > ul.nav li').each(function(){
			var o = $(this);
			if (/(Manga Online)|(submanga\.org)/.test(o.html())) o.remove();
		});
		
		//imagen de cabecera
		$('.cover-photo').remove();
		
		//español latino
		$('img[src="http://seriesblanco.com/banderas/la.png"]').each(function(){
			$(this).parents('tr:first').remove();
		});
			
		//disqus
		$('#disqus_thread').parents('.row:first').remove();
	});

})(jQuery || $);