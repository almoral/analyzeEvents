(function($){
    

      
	  var defaults = {
	        elementType: "a",
            linkType: "pdf",
            className: "pdf-link"
	  };
	  
        
       // var listen = function(this.elementType){
		$.fn.analyzeEvents = function(options){
		 
			var settings = $.extend({ }, defaults, options);
		 
			console.log(defaults);
		 
            $(this).on('click', function(e){
              
                if($(e.target).hasClass(settings.className)){
                     e.preventDefault();  
                     
                     var text = $(e.target).text();
        
					console.log(text);
				};
                
            });
          
			    return this;
		  
        };
    
}(jQuery));