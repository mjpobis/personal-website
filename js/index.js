(function(window, document, undefined) {

	indexData = {
		navbarTitle: "HOME",
		serviceItems: [
			{
				image: "bar-chart",
				title: "What I Do",
				content: "I work for bioGraphic, a publication of the California Academy of Sciences."
			},
			{
				image: "calendar",
				title: "Upcoming Schedule",
				content: "Over the 2019-20 academic year I am finishing up my degrees while serving as a TA for 292(?) and working for bioGraphic."
			}
		]
	};

	indexTemplate = [
		'{{#with pageData}}',
        '<div class="container">',
            '<div class="row text-center">',
                '<div class="col-lg-12">',
                    '<h2>Additional Information</h2>',
                    '<hr class="small">',
                    '<div class="row">',
                    	'{{#each serviceItems}}',
                        '<div class="col-md-6 col-sm-12">',
                            '<div class="service-item">',
                                '<span class="fa-stack fa-4x">',
                                	'<i class="fa fa-circle fa-stack-2x"></i>',
                                	'<i class="fa fa-{{image}} fa-stack-1x text-primary"></i>',
                            	'</span>',
                                '<h4><strong>{{title}}</strong></h4>',
                                '<p>{{{content}}}</p>',
                            '</div>',
                        '</div>',
                        '{{/each}}',
                    '</div>',
                '</div>',
            '</div>',
        '</div>',
        '{{/with}}',
	].join('\n');

	populatePage(indexTemplate, indexData);

	// set the minimum height of the service items to the same value based
	// on the largest initial height
	var maxHeight = 0;
	var $serviceItems = $(".service-item");
	$.each($serviceItems, function(index, item) {
		maxHeight = item.offsetHeight > maxHeight ? item.offsetHeight : maxHeight;
	});
	$serviceItems.css("min-height", maxHeight);

})(this, this.document);
