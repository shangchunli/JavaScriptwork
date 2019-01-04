//选择商品容量和选择的内容
    var choice1=document.getElementById('choice1');
    var choice2=document.getElementById('choice2');
    var gou1=document.getElementById('gou1');
    var gou2=document.getElementById('gou2');
    var gou3=document.getElementById('gou3');
    window.onload=function(){
        gou1.src="img/duigou.png";
        var i=zi4.value;
        if(i<4){
            add.style.cursor='pointer';
        }else{
            add.style.cursor='not-allowed';
        }
        if(i>1){
            sub.style.cursor='pointer';
        }else{
            sub.style.cursor='not-allowed';
        }
    }
    choice1.onclick=function(){
        choice1.style.border='1px solid #ff0754';
        choice1.style.borderRadius='3px';
        choice2.style.border='1px solid #fff'; 
        gou1.style.display='block';
        gou2.src="";
        gou3.innerHTML='"150ml"';
    }

    choice2.onclick=function(){  
        choice2.style.border='1px solid #ff0754';
        choice1.style.border='1px solid #fff';
        choice2.style.borderRadius='3px';
        gou2.src='img/duigou.png';
        gou1.style.display='none';
        gou3.innerHTML='"200ml"';
    }

    //数量的增加与减少
    var sub=document.getElementById('sub');
    var add=document.getElementById('add');
    var zi4=document.getElementById('zi4');
    sub.onclick=function(){
        var i=zi4.value;
        if(i>2){
            --i;
            zi4.value=i;
            sub.style.cursor='pointer';
        }else{
            zi4.value=1;
            sub.style.cursor="not-allowed";
        }
    }
    sub.onmouseover=function(){
        var i=zi4.value;
        if(i>0){
            sub.style.cursor='pointer';
        }else{
            sub.style.cursor='not-allowed';
        }
    }
    add.onclick=function(){
        var i=zi4.value;
        if(i<4){
            ++i;
            zi4.value=i;
            add.style.cursor='pointer';
        }else{
            zi4.value=5;
            add.style.cursor="not-allowed";
        }
    }
    add.onmouseover=function(){
        var i=zi4.value;
        if(i>4){
            add.style.cursor='not-allowed';
        }else{
            add.style.cursor='pointer';
        }
    }

    //加入购物车
    var che=document.getElementById('che');
    var con=document.getElementById('con');
    var quan=document.getElementById('quan');
    var shopping=document.getElementById('shopping');
    var no=document.getElementById('no');
    che.onclick=function(){
        quan.style.display='block';
        shopping.style.display='block';
    }
    con.onclick=function(){
        quan.style.display='none';
        shopping.style.display='none';
    }
    no.onclick=function(){
        quan.style.display='none';
        shopping.style.display='none';
    }

    //放大镜
    var tu1=document.getElementById('tu1');
    var img1=document.getElementById('img1');
    var img2=document.getElementById('img2');
    var big=document.getElementById('big');
    var slider=document.getElementById('slider');
    img1.onmouseover=function(){
        slider.style.display='block';
        img2.style.display='block';
    }
    img1.onmouseout=function(){
        slider.style.display='none';
        img2.style.display='none';
    }
    img1.onmousemove=function(ev){
        var ev = ev || window.event;
        var oL = ev.clientX - tu1.offsetLeft - slider.offsetWidth / 2;
        var oT = ev.clientY - tu1.offsetTop - slider.offsetHeight / 2;

        var oMaxw = img1.offsetWidth - slider.offsetWidth;
        var oMaxh = img1.offsetHeight - slider.offsetHeight;
        oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
        oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
        slider.style.left = oL + 'px';
        slider.style.top = oT + 'px';
        var scale = img2.offsetWidth / slider.offsetWidth;
        big.style.left = -scale * oL +22 + 'px'
        big.style.top = -scale * oT +22 + 'px'
    }
    var c1=document.getElementById('c1');
    var c2=document.getElementById('c2');
    var c3=document.getElementById('c3');
    var c4=document.getElementById('c4');
    var orgin=document.getElementById('orgin');
    c2.onmouseover=function(){
        c2.style.border="1px solid #ff9003";
        c3.style.border='1px solid #fff';
        orgin.src='img/pp0.jpeg';
        big.src='img/pp0.jpeg'
    }
    c3.onmouseover=function(){
        c3.style.border='1px solid #ff9003';
        c2.style.border='1px solid #fff';
        orgin.src='img/pp1.jpeg';
        big.src='img/pp1.jpeg';
    }
    c1.onclick=function(){
        c2.style.border="1px solid #ff9003";
        c3.style.border='1px solid #fff';
        orgin.src='img/pp0.jpeg';
        big.src='img/pp0.jpeg'
    }
    c4.onclick=function(){
        c3.style.border='1px solid #ff9003';
        c2.style.border='1px solid #fff';
        orgin.src='img/pp1.jpeg';
        big.src='img/pp1.jpeg';
    }