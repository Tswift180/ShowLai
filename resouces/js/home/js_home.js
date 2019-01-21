//点击详情详情
var flag=0;

$(document).ready(function()
{
	
	$(".order_table tr td a").click(function()
	{
		if(flag==0)
		{
			$(".expand_msg").fadeIn(100);
			flag=1;
		    document.getElementById("down_or_up").src="../resouces/img/home/up.png";
		}		
		else if(flag==1)
		{
			$(".expand_msg").fadeOut(100);
			flag=0;
			document.getElementById("down_or_up").src="../resouces/img/home/down.png";
		}
				
	});

});
