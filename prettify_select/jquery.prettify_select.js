;(function($){
    $.fn.extend({
        "select_choice":function(){
        	var _this=$(this);
        	_this.each(function(i){
        		var _this_sel=$(this);
        		var html_="",li="";
        		_this_sel.hide();
        		_this_sel.children().each(function(){
					var _this_child=$(this);
					li+="<li data-val='"+_this_child.val()+"'>"+_this_child.text()+"</li>";
				});
				
				html_='<div class="prettify_select" id="prettify_select_'+i+'">'
						+'<span class="prettify_select_val">12</span><span class="prettify_select_arr"></span>'
						+'<input type="hidden" value="" id="prettify_select_val_'+i+'" />'
						+'<ul class="prettify_select_cont hidden">'
							+li
						+'</ul>'
					+'</div>';
				_this_sel.parent().append(html_);
				
				_this_sel.parent().find(".prettify_select_val").text(_this_sel.parent().find("li").eq(0).text());
				
				_this_sel.parent().find(".prettify_select").on("click",function(){
					var _this_main=$(this);
					if(_this_main.children("ul").hasClass("hidden")){
						$(".prettify_select").removeClass("prettify_select_active");
			  			$(".prettify_select_cont").addClass("hidden");
			  			
						_this_main.children("ul").removeClass("hidden");
						_this_main.addClass("prettify_select_active");
					}else{
						_this_main.children("ul").addClass("hidden");
						_this_main.removeClass("prettify_select_active");
					}
				});
				
				_this_sel.parent().find("li").on("click",function(){
					var _this_li=$(this);
					_this_sel.parent().find(".prettify_select_val").text(_this_li.text());
					_this_sel.parent().find("input").val(_this_li.data("val"));
				});
				
				$(document).bind("click",function(e){
				  	var target = $(e.target);
				  	if(target.closest(".prettify_select").length == 0){//点击id为sibader之外的地方触发
				  		$(".prettify_select").removeClass("prettify_select_active");
				  		$(".prettify_select_cont").addClass("hidden")
				 	}
				})
        	})
        }
    });
})(jQuery);
