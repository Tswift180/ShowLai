
var index=1;
var flag=2;

$(document).ready(function(){
		  		  
		  		  				  		  		  
	  $("#login_button").click(function()
	  {
	  	
	  	if(index==1)
	  	{
	  		 $('.user_login').animate({top:'50px'},400);
	  		 $('#registe_form').hide(100);
	  		 $('#login_form').fadeIn(100);
	  		 index=0;
	  	}
	  	else if(index==0)
	  	{
	  		 $('.user_login').animate({top:'-155px'},400);
	  		 
	  		 index=1;
	  	}
	  	         
	  });
	  
	  $("#registe_button").click(function()
	  {
	  	
	  	if(index==1)
	  	{
	  		 $('.user_login').animate({top:'50px'},400);
	  		 $('#login_form').hide(100);
	  		 $('#registe_form').fadeIn(100);
	  		 
	  		 index=0;
	  	}
	  	else if(index==0)
	  	{
	  		 $('.user_login').animate({top:'-155px'},400);
	  		 index=1;
	  	}
	  	         
	  });
	  
	
	
	
	
	
});


//$('#login_button').on("click",function(){
//
//      $('.user_login').fadeOut(1000);
//
//});


