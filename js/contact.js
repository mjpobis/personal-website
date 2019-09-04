(function(window, document, undefined) {

	// data specifically for the about page
	var aboutData = {
		header: "Contact Me",
		description: "Please reach out!",
		navbarTitle: "CONTACT",
		prompts: [
			{
				tag: 'name',
				text: 'Your Name'
			},
			{
				tag: 'email',
				text: 'Your Email'
			},
			{
				tag: 'subject',
				text: 'Subject'
			},
			{
				tag: 'message',
				text: 'Your Message' 
			}
		]
	};
	
	// Handlebars template for the about page
	var aboutTemplate = [
		'<form>',
			'{{#each pageData.prompts}}',
				'<p>',
					'{{text}} <br>',
					'<input type="text" name={{tag}}>',
				'</p>',
			'{{/each}}',
			'<input type="submit" value="Send">',
		'</form>'
	].join('\n');

	// populate page with the above data
	populatePage(aboutTemplate, aboutData);

})(this, this.document);
