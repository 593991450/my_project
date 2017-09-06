
//达令公共js代码

//侧栏显示商品数量
function showGoodsCount(){
	
	var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
	if(arr){
		//侧栏
		$(".sidebar-cart .myCart-sum").html(arr.length);
		//顶栏
		$(".top-inner .cart .myCart-sum").html(arr.length);
	}
	else{
		$(".sidebar-cart .myCart-sum").html(0);
	}
}

function intoMyCart(){
	//侧栏
	$("#sidebar .sidebar-cart").click(function(){
			
		window.open("_myCart.html");
		
	});
	//顶栏
	$(".top-inner .cart a:first").click(function(){
		
		window.open("_myCart.html");
		
	})
	
}

function login_register(){
	//点击登录、注册进入登录页面
	$(".header-inner .right .login,.header-inner .right .register").click(function(){
		
		location.href = "_login.html";
		
	})
	
	//登录后的界面
	
	var username = $.cookie("username") ? JSON.parse($.cookie("username")).username : "";
	
	if(username){
		//用户名显示
		$(".header-inner .right .username").show().html(username);
		$(".header-inner .right .welcome").show();
		$(".header-inner .right .quit").show(); 
		$(".header-inner .right .login,.right .register").hide();
		
	}
	else{
		
		$(".header-inner .right .username").hide();
		$(".header-inner .right .welcome").hide();
		$(".header-inner .right .quit").hide();
		$(".header-inner .right .login,.right .register").show();
	}
	
	//退出登录
	$(".header-inner .right .quit").click(function(){
		$(".header-inner .right .username").hide();
		$(".header-inner .right .welcome").hide();
		$(".header-inner .right .quit").hide();
		$(".header-inner .right .login,.right .register").show();
	});
	
}


//回到顶部
function backTop(){
	$(window).scroll(function(){ 
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop >　800){  
			$(".backTop").css({display : "block"});
		}
		
		else{
			$(".backTop").css({display : "none"});
		}
	})
	
	//回到顶部
	$(".backTop").click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	})
	
	
	
}
