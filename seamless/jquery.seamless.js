;(function($){
    $.fn.extend({
        "seamless":function(options){
        	var _this=$(this);
        	_this.append(_this.html());
			var len=_this.children().length;
			var w=_this.children().eq(0).outerWidth(true)*len;
			var h=_this.children().eq(0).outerHeight(true)*len;
			var moveing="",direction="",offval="",offdirction="",posdirction="";
			
			var settings={
        		"speed":5,
        		"direction":"left"
        	}
			var result=$.extend({},settings,options);
			
			if(result.direction=="left" || result.direction=="right"){
        		_this.css("width",w);
        		offdirction="left";
        	}else{
        		_this.css("height",h);
        		offdirction="top";
        	}
        	
        	if(result.direction=="left"||result.direction=="up"){
        		direction="-";
        	}else{
        		direction="+";
        	}
        	
			setTimeout(function(){
				_this.parent().trigger("mouseout");
			},30);
			
			_this.parent().mouseout(function(){
				moveing=setInterval(function(){
					if(result.direction=="left" || result.direction=="right"){
						if( _this.position().left<-w/2){
							_this.css(offdirction,0); 
						}
						if(_this.position().left>0){
							_this.css(offdirction,-w/2); 
						}
						posdirction=_this.position().left;
					}else{
						if( _this.position().top<-w/2){
							_this.css(offdirction,0); 
						}
						if(_this.position().top>0){
							_this.css(offdirction,-w/2); 
						}
						posdirction=_this.position().top;
					}
					
					offval=direction=="-"?posdirction-result.speed:posdirction+result.speed;
					_this.css(offdirction, offval+"px");
				},30);
			});
			
			_this.parent().mouseover(function(){
				clearInterval(moveing);
			});
			
			_this.parent().find("span").each(function(){
				var _this_btn=$(this);
				_this_btn.on("click",function(){
					if(_this_btn.hasClass("seamless_prev")||_this_btn.hasClass("seamless_up")){
						direction="-";
					}else{
						direction="+";
					}
				})
			})
        }
    });
})(jQuery);
