// The templates common to all pages
var Templates = {};

// The common banner
Templates.navbar = [
'<nav class="navbar navbar-default navbar-fixed-top">',
    '<div class="container">',
        '<div class="navbar-header">',
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mjp-navbar-collapse" aria-expanded="false">',
                '<span class="sr-only">Toggle navigation</span>',
                '<span class="icon-bar"></span>',
                '<span class="icon-bar"></span>',
                '<span class="icon-bar"></span>',
            '</button>',
            '<a class="navbar-brand" href="index.html"><img alt="Logo Here" src="{{path}}images/logo/madison-logo.png" id="mjp-logo"></a>',
        '</div>',
        '<div class="collapse navbar-collapse" id="mjp-navbar-collapse">',
            '<ul class="nav navbar-nav" id="navbar-tabs">',
                '{{#each buttons.navbar}}',
                '<li><a href="{{link}}" {{#if target}}target="{{target}}"{{/if}}>{{text}}</a></li>',
                '{{/each}}',
                '<li class="dropdown">',
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span class="caret"></span></a>',
                    '<ul class="dropdown-menu">',
                        '{{#each buttons.dropdown}}',
                        '<li><a href="{{link}}" {{#if target}}target="{{target}}"{{/if}}>{{text}}</a></li>',
                        '{{/each}}',
                    '</ul>',
                '</li>',
            '</ul>',
            '<ul class="nav navbar-nav navbar-right">',
                '<li><a href="{{ links.email.link }}"><i class="fa fa-envelope fa-fw fa-1x"></i></a></li>',
                '<li><a href="{{ links.portfolio.link }}" target="new"><i class="fa fa-clipboard fa-fw fa-1x"></i></a></li>',
                '<li><a href="{{ links.twitter.link }}" target="new"><i class="fa fa-twitter fa-fw fa-1x"></i></a></li>',
            '</ul>',
        '</div>',
    '</div>',
'</nav>'
].join('\n');

// the header for pages including the title and subtitle
Templates.header = [
'{{#with pageData}}',
'<h1 class="page-title">{{ header }}</h1>',
'<h3 class="lead page-description">{{ description }}</h3>',
'{{/with}}'
].join('\n');

// The "callToAction," which includes the link to the mail list sign-up
Templates.callToAction = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-xs-12 text-center">',
            '<h3>Contact</h3>',
            '{{#with buttons.contact}}',
            '<a href="{{ link }}" class="btn btn-lg btn-{{ color }} btn-round" target="{{#if target}}new{{else}}_parent{{/if}}">{{ text }}</a>',
            '{{/with}}',
        '</div>',
    '</div>',
'</div>'
].join('\n');

// footer, which contains links to facebook and twitter, and a copyright
Templates.footer = [
'<div class="container">',
    '<div class="row">',
        '<div class="col-xs-12 text-center">',
            '<ul class="list-inline contact">',
                '<li><a href="{{ links.email.link }}"><i class="fa fa-envelope fa-fw fa-3x"></i></a></li>',
                '<li><a href="{{ links.portfolio.link }}" target="new"><i class="fa fa-portfolio fa-fw fa-3x"></i></a></li>',
                '<li><a href="{{ links.twitter.link }}" target="new"><i class="fa fa-twitter fa-fw fa-3x"></i></a></li>',
            '</ul>',
            '<hr class="small">',
            '<p class="text-muted">Copyright &copy; Madison Pobis {{ year }}</p>',
        '</div>',
    '</div>',
'</div>'
].join('\n');

// the sidebar, with a short "About" and links to twitter, facebook, and the blog
Templates.sidebar = [
'<div class="sidebar-module sidebar-module-inset">',
    '<h4>About</h4>',
    '<p>A quick bio could go in here</p>',
'</div>',
'<div class="sidebar-module">',
    '<h4>Elsewhere</h4>',
    '<ol class="list-unstyled">',
        '<li><a href="{{ links.email.link }}" target="_parent">{{ links.email.name }}</a></li>',
        '<li><a href="{{ links.twitter.link }}" target="_parent">{{ links.twitter.name}}</a></li>',
        '<li><a href="{{ links.portfolio.link }}" target="_parent">{{ links.portfolio.name }}</a></li>',
    '</ol>',
'</div>',
].join('\n');
