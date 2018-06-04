$(document).ready(function(){
    var json_data=[];
    $.getJSON("/data/data.json",function(data){
        console.log(data)
    });
});