jQuery(document).ready(function($){
	$( ".sp-sponsor[data-ajaxurl]" ).on( "click", function() {
		var self = $( this );
		ajax_options = {
			action: "sp_clicks",
			nonce: self.data("nonce"),
			ajaxurl: self.data("ajaxurl"),
			post_id: self.data("post")
		};
		$.post( ajax_options.ajaxurl, ajax_options, function() {
			return true;
		});
	});

	$( ".sp-sponsors-loader" ).each(function() {
		var self = $( this );
		ajax_options = {
			action: "sp_sponsors",
			nonce: self.data("nonce"),
			ajaxurl: self.data("ajaxurl"),
			level: self.data("level"),
			limit: self.data("limit"),
			width: self.data("width"),
			height: self.data("height"),
			size: self.data("size")
		};
		$.post( ajax_options.ajaxurl, ajax_options, function( response ) {
			self.html( response );
		});
	});
});