/**
 * ALAJAX Plugin: Ajaxify your HTML Form with this plugin. No change will be required on Server-Side.
 * Create an auto ajax sender from your basic HTML code.
 * @url http://www.alajax.com/
 * @version 1.2
 * CopyRight: GNU General Public License v2
 * 
 * Auther & Developed by: Alaa Badran
 * http://www.alajax.com/
 * Email info@alajax.com
 *
 */
$ = jQuery; // Make sure its defined

$.fn.alajax = function (options){
    // sgObj is a holder for #gallery container.. Cashing it.
    var aObj = $(this); // contaciner object
    var aForm = ($(this).is('form') ? $(this):$(this).find('form').eq(0)); // Storing Form object
    var oid = $(this).attr('id'); // Storing the ID of current Object
    
    // Default settings.
    var settings = {
        type: 'text',   // 'text', 'json' or 'xml'
        success: function(){},
        error: function (){},
        beforeSend: function (){},
        postType: aForm.attr('method'), // Storing Form method.. POST or GET
        tourl: aForm.attr('action') // Storing URL to send data to
    };
    settings = $.extend(settings, options);
    
    function _sendData(){
        // Run AJAX function
        $.ajax({
            type: settings.postType,
            url: settings.tourl,
            data: aForm.serialize(),
            dataType: settings.type,
            beforeSend: function (){
                // add code here if you want to do something before sending the form
                settings.beforeSend();
            },
            success: function(data, textStatus, jqXHR){
                // Add code here when send is successful.
                settings.success(data);
            },
            error: function (jqXHR, textStatus, errorThrown){
                //alert(errorThrown);
                settings.error();
            }
            
        });
    }
    
    /**
     * The initializer for this plugin.
     */
    function _init(){
        aForm.submit(function (event){
            _sendData(); // Processing
            event.preventDefault(); // To disable form submitting. Submit will be by AJAX only using the function above.
        });
    }
    
    return _init();
}
// END of Plugin
