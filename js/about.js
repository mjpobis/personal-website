(function(window, document, undefined) {

	// data specifically for the about page
	var aboutData = {
		header: "About Me",
		description: "My background and current work",
		navbarTitle: "ABOUT",
		paragraphs: [
			'I am a writer, film producer, and student. More bio information can be put here.',
			'Multiple paragraphs are supported'
		]
	};
	
	// Handlebars template for the about page
	var aboutTemplate = [
		'{{#each pageData.paragraphs}}',
		'<p>{{{this}}}</p>',
		'{{/each}}'
	].join('\n');

	// populate page with the above data
	populatePage(aboutTemplate, aboutData);

})(this, this.document);
