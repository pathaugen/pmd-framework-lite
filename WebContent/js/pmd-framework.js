
/*
pmd-framework.js
*/


/*
$.getScript( "js/styleswitch.js" )
.done(function( script, textStatus ) {
	console.log( textStatus );
})
.fail(function( jqxhr, settings, exception ) {
	$( "div.log" ).text( "Triggered ajaxError handler." );
});
*/
newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'js/styleswitch.js';
document.getElementsByTagName('head')[0].appendChild(newScript);


/*
window.onload=function(){
	var formref=document.getElementById("switchform")
	indicateSelected(formref.choice)
}
*/
