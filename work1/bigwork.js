        //中间图片轮播图
        var box6 = document.getElementById('box6');
        var slider = document.getElementById('slider');
        var left = document.getElementById('left');
        var right = document.getElementById('right');
        var oNavlist = document.getElementById('nav').children;
        var index = 1; 
        var timer;
        var isMoving = false;
        box6.onmouseover = function () {
            animate(left, {
                opacity: 0.6
            })
            animate(right, {
                opacity: 0.6
            })
            clearInterval(timer); 
        }
        box6.onmouseout = function () {
            animate(left, {
                opacity: 0
            })
            animate(right, {
                opacity: 0
            })
            timer = setInterval(next, 2000);
        }
        right.onclick = next;
        left.onclick = prev;

        function next() {
            if (isMoving) {
                return;
            }
            isMoving = true;
            index++;
            navmove();
            animate(slider, {
                left: -800 * index
            }, function () {
                if (index == 7) {
                    slider.style.left = '-800px';
                    index = 1;
                }
                isMoving = false;
            });
        }

        function prev() {
            if (isMoving) {
                return;
            }
            isMoving = true;
            index--;
            navmove();
            animate(slider, {
                left: -800 * index
            }, function () {
                if (index == 0) {
                    slider.style.left = '-4000px';
                    index = 6;
                }
                isMoving = false;
            });
        }
        //按钮点击切换事件
        for (var i = 0; i < oNavlist.length; i++) {
            oNavlist[i].index = i;
            oNavlist[i].onclick = function () {
                index = this.index + 1;
                navmove();
                animate(slider, {
                    left: -800 * index
                });
            }

        }
        //图片切换时按钮样式跟着切换
        function navmove() {
            for (var i = 0; i < oNavlist.length; i++) {
                oNavlist[i].className = "";//清除，把之前切换之前选中的颜色清空
            }
            if (index > 6) {
                oNavlist[0].className = "active";//active类名，设置背景颜色
            } else if (index <= 0) {
                oNavlist[5].className = "active";
            } else {
                oNavlist[index - 1].className = "active";
            }
        }
        timer = setInterval(next, 2000);

        //右侧轮播图
        var ul = document.getElementById("ul");
        function show() {
            var top = ul.offsetTop - 1; 
            ul.style.top = top + "px"; 
            if (-1 * ul.offsetTop >= ul.offsetHeight / 1) {
                ul.style.top = 0;
            }
        }
        var t1 = setInterval(show, 20);
        var li = document.getElementById("li");
        console.log(ul.children.length)
        for (var i = 0; i < ul.children.length; i++) {
           ul.children[i].onmouseout = function () {           
                t1 = setInterval(show, 20);
            };
           ul.children[i].onmouseover = function () {
                clearInterval(t1);
            };
        }


        //根据选择改变钱数
        var money=document.getElementById('money');
        function pay(that){
            money.innerHTML="￥";
             money.innerHTML += that.value;    
        }


   		//右侧浮动图
        var float1 = document.getElementById('float1');
		float1.onmouseover = function(){
		    animate(float1,{
                right:0,
                top:80,
                opacity:100
            });
		}
		float1.onmouseout = function(){
		    animate(float1,{
                right:-83,
                top:80,
                opacity:1
            });
		}
		var float2 = document.getElementById('float2');
		float2.onmouseover = function(){
		    animate(float2,{
                right:0,
                top:190,
                opacity:1
            });
		}
		float2.onmouseout = function(){
		    animate(float2,{
                right:-83,
                top:190,
                opacity:1
            });
		}
		var float3 = document.getElementById('float3');
		var float31t = document.getElementById('float31t');
		float3.onmouseover = function(){
		    animate(float3,{
                right:0,
                top:335,
                opacity:1
            });
		    float31t.src = "img/erwei.png";
		    float31t.style.width='90px';
		    float31t.style.height='90px';
		    float31t.style.marginTop = "3px";
		}
		float3.onmouseout = function(){
		    animate(float3,{
                right:-83,
                top:335,
                opacity:1
            });
		    float31t.src = "img/serwei.png";
		    float31t.style.width='25px';
		    float31t.style.height='25px';
		    float31t.style.marginTop = "36px";
		}
		var float4 = document.getElementById('float4');
		float4.onmouseover = function(){
		    animate(float4,{
                right:0,
                top:490,
                opacity:1
            });
		}
		float4.onmouseout = function(){
		    animate(float4,{
                right:-83,
                top:490,
                opacity:1
            });
		}    


		//顶部上划后固定
		var cover=document.getElementById('cover');
        window.onscroll=function(){
                var st=document.documentElement.scrollTop || document .body.scrollTop;
            if(st>180){
                cover.style.position='fixed';
            }else{
                cover.style.position='static';
            }
        }