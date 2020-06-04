window._startupFunctions = new Array();
window._navToggleFunctions = new Array();
window._wysiwygFonts = new Array();
window._wysiwygStyles = new Array();
window._wysiwygStyleFilter = new Array();
window._zReloadFunctions = new Array();

var reloadToolbar = function(){
	//Do Nothing
}

window._zReloadFunctions.push(reloadToolbar);

if (!String.prototype.endsWith) {
	String.prototype.endsWith = function(search, this_len) {
		if (this_len === undefined || this_len > this.length) {
			this_len = this.length;
		}
		return this.substring(this_len - search.length, this_len) === search;
	};
}

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

(function() {
	
		if(window.jQuery){
			jQuery.holdReady(true);
		}	 
	
	//When graph.js and zpml.js are loaded signin to the backend with the cookie value in "zeusportal_auth" if that value is set
	_on_graph_load = function(){
		
		var auth = getCookie("zeusportal_auth");
		
		if(auth){
			graphAPI.setAuthToken(auth);
		}
		
	}
	
	//Call back when init_nexus_graph is called
	var nexus_init_callback = function(){
				
		var script = document.createElement('script');
		script.src = "https://cdn.muicss.com/mui-0.9.1/js/mui.min.js";
		script.async = false;
		document.body.appendChild(script);	
		
		/**
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.1/css/materialize.min.css";
		document.head.appendChild(link);	 **/
		
		/** 
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
		document.head.appendChild(link);
		
		script = document.createElement('script');
		script.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.1/js/materialize.min.js";
		script.async = false;
		document.body.appendChild(script);	**/
		
		/** 
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
		document.head.appendChild(link); */
		
		script = document.createElement('script');
		script.src = _zeusportal_base_url+"/themes/preneurhub/js/mui-init.js";
		script.async = false;
		document.body.appendChild(script);
		
		script = document.createElement('script');
		script.src = _zeusportal_base_url+"/themes/preneurhub/js/toolbarrender.js";
		script.async = false;
		document.body.appendChild(script);

			/** 
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = _zeusportal_base_url+"/themes/preneurhub/preneurhub-legacy.css";
		document.head.appendChild(link);		
		
	
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = _zeusportal_base_url+"/themes/preneurhub/preneurhub.css";
		document.head.appendChild(link); **/
		
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = _zeusportal_base_url+"/styles/zeusportal-responsive.css";
		document.head.appendChild(link);	
		
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = "https://dhbwcjr92750l.cloudfront.net/styles/materializelarge.css";
		document.head.appendChild(link);	
		
		link = document.createElement('link');
		link.rel = "stylesheet";
		link.href = _zeusportal_base_url+"/themes/30Nexus/styles/customstyle.jsp";
		document.head.appendChild(link);		

		//startupFooterFunctions(_zeusportal_base_url);	
		
		//Render the pull out navigation menu
		//doSideNav();	
	
		var showContentFunc = function(){
			
			if(!$("#content").is(":visible")){
				$("#content").show();
			}
			
		}			
		
		window._startupFunctions.unshift(showContentFunc);		

		if(window.jQuery){
			jQuery.holdReady(false);
		}	 		
	}
	
	//initialize the nexus graph
	init_nexus_graph(_zeusportal_base_url, {noloadjquery : true}, nexus_init_callback);

})();


//Get's the value of a cookie by name
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function doSideNav(){
	jQuery('#slide-out').sidenav({ menuWidth: 300, closeOnClick: true });	
}

function doDashboard(){
				
	$("#chat-out").toggle("slide", {direction: "right"});	
	
}


$(function() {
	
		
		//$("#nexus-mobile-dashboard-tabs").tabs();	
	
		//$("#preneurhub-nav").sidenav();
	  //$("#chat-out").sidenav({edge: "right"});
		//$("#nexus-mobile-dashboard-tabs").tabs();
	
 	 // $j('#searchbar-toggle').sideNav({ menuWidth: 300, closeOnClick: true });

 	 	if($j("#zeusportal-toolbar-search-actual").length){
			$( "#zeusportal-toolbar-search-actual" ).zeusautocomplete({ list : { onClickEvent : function(object) {
				var item = $( "#zeusportal-toolbar-search-actual" ).getSelectedItemData();
				$.changePage('/graph/view/object/'+object.getId());
			}}});	
		}

		$("#zeusportal-toolbar-search-actual").keypress(function(event) {

			var keycode = (event.keyCode ? event.keyCode : event.which);
			
		    if(keycode == 13) {
		        //Check if this is a hashtag query
		        if($(this).val() && $(this).val().startsWith("#")){
		        	$.changePage("/hashtag/"+$(this).val().replace("#", ""));
			    }else{
					$.changePage("/s/"+$(this).val());
				}
		    }
		});		
		
	
		
		var moveSideBar = function(){
			
			$(".zeusportal-body-sidebar").each(function(){
							
				if($j(this).is(":visible")){
					$("#preneurhub-sidebar-content").append($(this));
					$("#main").addClass("sidebarContentPresent");
					$(".zeusportal-secondary-header").addClass("sidebarContentPresent");
				}

			});
			
		}
		
		var removeSidebar = function(){
			$("#main").removeClass("sidebarContentPresent");
			$(".zeusportal-body-sidebar").remove();
			$("#main").removeClass("sidebar-hidden");
			$j('#preneurhub-nav').show(); 
		}
		
		var removeRowOnSidebarLayout = function(){
			$("#zeusportal-body-sidebar-layout").removeClass("row");
		}
		
		var slideOut = function(){
			$("#main").toggleClass("sidebar-hidden");
		}
		
		/**
		var handleDropdown = function(){
			$("[role=dropdown-trigger]").dropdown({constrainWidth : false, hover : true, coverTrigger : false});	
		} **/
		
	
		moveSideBar();

		_startupFooterFunctions.push(moveSideBar);
		_startupFooterFunctions.push(removeRowOnSidebarLayout);
		_changePageFunctions.push(removeSidebar);
		//_zReloadFunctions.push(handleDropdown);
		_navToggleFunctions.push(slideOut);
		_wysiwygStyles.push("https://s3.amazonaws.com/nexus-teams/themes/nexus-teams-theme/materialize-admin/css/themes/vertical-menu-nav-dark-template/materialize.css");
		_wysiwygStyles.push(_zeusportal_base_url+"/themes/30Nexus/styles/customstyle.jsp");
		_wysiwygStyles.push("https://fonts.googleapis.com/icon?family=Material+Icons");
		_wysiwygStyles.push("https://fonts.googleapis.com/css?family=Roboto");
		_wysiwygStyles.push("https://fonts.googleapis.com/css?family=Rubik");
		_wysiwygFonts.push("Rubik");
		_wysiwygFonts.push("-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif");
		_wysiwygStyleFilter.push("https://s3.amazonaws.com/nexus-teams/themes/nexus-teams-theme/materialize-admin/css/themes/vertical-menu-nav-dark-template/materialize.css");
	
		//$('.side-nav .rightside-navigation').sidenav({edge: "right"});
		  		
		//$("[role=dropdown-trigger]").dropdown({constrainWidth : false, hover : true, coverTrigger : false});	
		 
});

$(function() {
	
	startupFooter("/");
	
	if($("[role=slider]")[0] || $("[role=tabs]")[0]){
		$.zReload();
	}
	
});