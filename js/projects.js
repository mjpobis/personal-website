(function(window, document, undefined) {

	// data specifically for the jobs page
	var projData = {
		header: "My Projects",
		description: "Environmental Communication, through film, writing, and podcasting",
		navbarTitle: "MY WORK",
		overview: "Below are several examples of work I have done, hosted at other websites",
		projects: [
			{
				title: "Enemy of My Enemy",
				description: "An Amazonian frog finds refuge under the watchful compound gaze of a surprising guardian.",
				link: 'https://www.biographic.com/posts/sto/enemy-of-my-enemy',
				date: {
					posted: {
						year: 2019,
						month: 8,
						day: 9
					}
				},
				show: true
			},
			{
				title: "Californians Grapple with the Loss of Red Abalone",
				description: "The loss of the red abalone is not just a blow to the kelp forest ecosystem, but to the sense of California coastal identity. Scientists, fishermen, divers, and long-time residents recognize the abalone as a cultural icon and are working to ensure their survival.",
				link: 'http://peninsulapress.com/2019/06/11/californians-grapple-with-the-loss-of-red-abalone/',
				embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Cx9J4OnEi1w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				date: {
					posted: {
						year: 2019,
						month: 6,
						day: 9
					}
				},
				show: true
			},
			{
				title: "Aquanaut",
				description: "Underwater photographer Patrick Webster experiences the California kelp forest ecosystem through art and science and shares the magic of diving.",
				link: 'https://www.youtube.com/watch?v=K9IbhNiCv40',
				embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/K9IbhNiCv40" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				date: {
					posted: {
						year: 2019,
						month: 4,
						day: 17
					}
				},
				show: true
			},
			{
				title: "Show, Don't Tell: The Power of the Field Trip",
				description: "What's so great about the field trip? In this podcast we explore the concept of experiential learning by traveling to coral reefs, the Grand Tetons, and the Santa Cruz foothills. We talk to Stanford undergraduates Nick and Judith about how experiential learning can help students participate in conservation, and how to make learning opportunities more accessible.",
				link: 'https://soundcloud.com/madison-pobis/show-dont-tell-the-power-of-the-field-trip',
				embed: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/413821533&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
				date: {
					posted: {
						year: 2018
					}
				},
				show: true
			},
			{
				title: "Sucker Deception",
				description: "Mesmerizing bioluminescence is a rare trait—and a clever lure—for this deep-sea drifter.",
				link: 'https://www.biographic.com/posts/sto/sucker-deception',
				date: {
					posted: {
						year: 2019,
						month: 7,
						day: 30
					}
				},
				show: true
			}
		]
	};

	// Handlebars template for the projects page
	projTemplate = [
		'{{#with pageData}}',
			'{{#if overview}}',
				'<p>{{overview}}</p>',
			'{{/if}}',
			'{{#if projects}}',
				'<h2 class="center">Projects</h2>',
				'<div class="row">',
					'{{#each projects}}',
						'<div class="row project">',
							'<h3>{{title}}</h3>',
							'{{#if embed}}',
								'{{{embed}}}',
							'{{/if}}',
							'<p>{{description}}</p>',
							'<a href="{{link}}" target="_blank"> View project in new tab </a>',
						'</div>',
					'{{/each}}',
				'</div>',
			'{{/if}}',
		'{{/with}}',
	].join('\n');

	// populate page with the above data
	populatePage(projTemplate, projData);

})(this, this.document);
