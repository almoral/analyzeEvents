(function($){
    

      
	  var defaults = {
            linkClassName: "pdf-link",
			formClassName: "form-submit",
			flag: 0,
			checkForClass: true,
			label: '',
			eventToListenFor: 'click',
			watching: ''
	  };


		$.fn.analyzeEvents = function(options){

			var settings = $.extend({ }, defaults, options);

			var label = settings.label;

				$(this).on(settings.eventToListenFor, function(e)
				{
					
					if(e.target.nodeName == "SELECT"){
						if(settings.eventToListenFor == 'change'){
						
							label = settings.label == '' ? e.target.id : settings.label;
							
							if(settings.watching == 'Permits'){
							
								_gaq.push(['_trackEvent', settings.watching, label, $(e.target).val()]);
							}
	
						}
					}
					
					
					if(e.target.nodeName == "A")
					{

						if(!settings.checkForClass || $(e.target).hasClass(settings.linkClassName))
						{
	
							var link = $(e.target).attr('href').split('/');
							var filename = link[link.length - 1].split('.');
							
							label = settings.label == '' ? filename[0] : settings.label; 
	
							_gaq.push(['_trackEvent', 'PDF', 'Download', label]);
	
						}

					} else if(e.target.type == "submit"){
					
						if(!settings.checkForClass || $(e.target).parents().eq(0).hasClass(settings.formClassName))
						{
	
							if(settings.flag != 1 && !$(e.target).parents().eq(1).hasClass('searchBlock')){
	
								e.preventDefault();
	
								var targetedForm = window.location.href.split('/')[window.location.href.split('/').length - 1];
	
								targetedForm = targetedForm.substr(0, targetedForm.indexOf('.'));
	
								label = settings.label == '' ? targetedForm : settings.label; 
								
								_gaq.push(['_trackEvent', 'Form', 'Submit', label]); 
	
								settings.flag = 1;
								setTimeout(function(){
	
									$(e.target).click();
	
								}, 500);
	
							};
	
						}
					}
				})	

				return this;
			}

    
}(jQuery));