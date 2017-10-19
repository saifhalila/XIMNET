$(document).ready(function(){



function Save_as_news(){
	tabID++;
	$("#tblData tbody").append(
		'<tr id="tab'+tabID+'">'+
		"<td></td>"+
		"<td>"+$('[name=title]').val()+"</td>"+
		"<td>"+$('[name=content]').val()+"</td>"+
		"<td><button class='btnEdit'><i class='material-icons'>edit</i></button><button class=btnDelete><i class='material-icons' class='btnDelete'>delete</i></button></td>"+
		'</tr>');
	$(".tabs .tab-links").append(
		'<li><a id="tab'+tabID+'" href="#tab'+tabID+'">'
		+$('[name=title]').val()+'</a>'+
		'<li>');
	$(".tabs .tab-content").append(
		'<div id="tab'+tabID+'" class="tab">'+
		"<p>"+$('[name=content]').val()+"</p>"+
		"</div>");
	
	$(".tabs .tab-links a").bind("click", function(e)  {

    	
        var currentAttrValue = $(this).attr("href");
 
        // Show/Hide Tabs
        $(".tabs " + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent("li").addClass("active").siblings().removeClass("active");
 
        e.preventDefault();
    });



	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);

}; 

function Edit(){
	var par = $(this).parent().parent(); //tr
	var tdTitle = par.children("td:nth-child(2)");
	var tdContent = par.children("td:nth-child(3)");
	
	$('[name=title]').val(tdTitle.text());
	$('[name=content]').val(tdContent.text());
	$("#btnSave").bind("click", function Save(){
		
		var tdTitle = par.children("td:nth-child(2)");
		var tdContent = par.children("td:nth-child(3)");
		 tdTitle.text($('[name=title]').val());
		 tdContent.text($('[name=content]').val());
	
});
};
function Delete(){
	var par = $(this).parent().parent(); //tr
	par.remove();
	$("#"+par.attr("id")).remove();

	}; 
$(window).resize(function(){
	if ($(window).width() <= 480){	

   // Get all the links.
   var link = $(".tabs .tab-links  a");

   // On clicking of the links do something.
    link.on('click', function(e) {

    e.preventDefault();

    var a = $(this).attr("href");

    $(a).slideDown('fast');

    //$(a).slideToggle('fast');
    $("tabs div").not(a).slideUp('fast');
    
});
	


	}	
});
	var tabID = 1;
    //Save_as_news, Save, Edit and Delete functions code
/*
	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", Delete);*/
	$("#btnAdd").bind("click", Save_as_news);
});
