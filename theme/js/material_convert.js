// Jquery for zload and other loading functions
(function( $ ){
	
	jQuery.fn["dropdownBak"] = jQuery.fn["dropdown"];
	
	$.fn.material_select = function(params){
		
		$(this).formSelect(params);
		
	}
	
	jQuery.fn["sideNav"] = function(params){
		
		$(this).sidenav(params);
		
	}
	
	jQuery.fn["dropdown"] = function(params){

		try{
			jQuery(this).dropdownBak(params);
		}catch(e){
			console.log(e);
		}
		
	}
	
}( jQuery ));