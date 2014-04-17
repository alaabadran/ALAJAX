ALAJAX
======

A jQuery plugin to convert normal HTML forms into AJAX forms simply.
It Ajaxifys your HTML Form with this plugin. No change will be required on Server-Side.

Features
========
- Auto form detect. So, when you use Element ID in `$('')` "example: `$('#ID')`" the plugin will check if that is a Form ID or not.
if not, it will search inside to get the form.
- Sends the form data to "Action" url using "Method" submit method (post, or get)
- Works and tested on IE6+, Firefox (Mac, Windows), Chrome (Mac, Windows), Safari, Opera and all major browsers.
- Works fine with Dynamic forms
- Lightweight (~3KB)
- Easy to understand.
- Cool for site owners.
- Work with any CMS.. No server side changes required. Just add the script and run it.

Options
=======
its simple as:  
`$('#form').alajax({ OPTIONS });  
// OR  
$('form').alajax({ OPTIONS });  
// OR  
$('#div').alajax({ OPTIONS });`


options are: 
- `type: ''`  // Type of return value. Default is "text" and takes other values like: "json", "xml", "jsonp"
- `beforeSend: function (){}` // Code to run before sending the form
- `success: function(){}`  // Code to run when the AJAX call success
- `error: function(){}` // Code to run when error occures

For more information, please visit: [ALAJAX website](http://www.alajax.com)
