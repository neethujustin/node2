$(document).ready(function(){

	$.get("/getAllPosts",function(data){
		data.forEach(function(value,key){
			$("#dest").append('\<div >\
				<div class="col-xs-10">\
			<h2 class="titl">'+value.title+'</h2>\
			<img src= "'+value.url+'">\
			<p class="content">'+value.description+'</p>\
			<div class="bottom_data">\
			<p class="pull-left auth">Author:'+value.at+'</p>\
			<p class="pull-right posted glyphicon glyphicon-time">PostedOn:'+value.dat+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');
		})
		data.forEach(function(value,key){
			$("#userblog").append('\<div >\
				<div class="col-xs-10">\
		<a href="#" class="pull-right edit glyphicon glyphicon-edit">Edit</a>\
			<h2 class="titl">'+value.title+'</h2>\
			<img src= "'+value.url+'">\
			<p class="content" id="cont">'+value.description+'</p>\
			<div class="bottom_data">\
			<p class="pull-left auth">Author:'+value.at+'</p>\
			<p class="pull-right posted glyphicon glyphicon-time">PostedOn:'+value.dat+'</p>\
			</div>\
		</div>\
		<div class="col-xs-1"></div>\
		<div class="clear"></div>\
	</div>');
		})
	})

	$(document).on( 'click', '.edit', function() {
   document.getElementById("cont").contentEditable = true;
		});
		$("#save").click(function(){
		document.getElementById("cont").contentEditable = false;
		})
			
});  
