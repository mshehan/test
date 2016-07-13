/*
/Matthew Shehan
//mshehan@my.smccd.edu
//CIS 
//114 OL
//translate.js
//assignment 7
// 05-13-2016
 */
var API_KEY = "trnsl.1.1.20160512T011224Z.7e3993af26f021b2.bfebf8acecba7d15bf88b55905fa82b721c118c8";
$(document).ready(function(){
    $("#translate").click(function(event){
        var source_text = $("#source_lang").val().replace(/\s/g,"+");
        //all spaces are replaced with + for use in query string
        var target_text = $("#target_lang");
        var query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" +
        API_KEY + "&lang=en-fr&text=" + source_text + "&callback=?"; 
        var source; 
        
        var jqxhr = $.getJSON(query, function(response){
            source = {translation: response.text}; 
        }).done(function() {
            target_text.text(source.translation);
        });
        
        if(!jqxhr){
            target_text.text("Sorry, try again :(");
        }
        event.preventDefault(); 
    });// end of click event handler
    
});// end of document ready