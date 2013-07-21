(function($){
    

      
	  var defaults = {
            linkClassName: "pdf-link",
			formClassName: "form-submit",
			flag: 0,
			grabAllOfThem: false
	  };
	  

		$.fn.analyzeEvents = function(options){
		 
			var settings = $.extend({ }, defaults, options);

			
				$(this).on('click', function(e)
				{
				

					if(settings.grabAllOfThem || $(e.target).hasClass(settings.linkClassName))
					{
						e.preventDefault();  
						
						var link = $(e.target).attr('href').split('/');
						var filename = link[link.length - 1].split('.');

						_gaq.push(['_trackEvent', 'PDF', 'Download', filename[0]]); 
						
					}
					else if($(e.target).parents().eq(0).hasClass(settings.formClassName))
					{
				
						if(settings.flag != 1 && !$(e.target).parents().eq(1).hasClass('searchBlock')){
						
							e.preventDefault();
		
							var targetedForm = window.location.href.split('/')[window.location.href.split('/').length - 1];
							
							targetedForm = targetedForm.substr(0, targetedForm.indexOf('.'));
							
							_gaq.push(['_trackEvent', 'Form', 'Submit', targetedForm]); 
							
							settings.flag = 1;
							setTimeout(function(){
		
								$(e.target).click();
		
							}, 500);
	
						};
					
					}
				})	
				
				return this;
			}

    
}(jQuery));