/*let myHeading=document.querySelector('h1');
//h1的内容变化了
myHeading.textContent='Hello world!';*/
/*这是变量*/
/*let myVariable='孙艺珍';
let favor='movie';
if(movie==='假如爱有天意'){
    alert('我最喜欢假如爱有天意')；
}else{
    alert('最爱脑海中的橡皮擦')；
}*/

let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/sun1.jpg'){
        myImage.setAttribute('src','images/sun2.jpg');
    }else{
        myImage.setAttribute('src','images/sun1.jpg');
    }
}

/*buttom交互*/
function setHeading(name){
    let myHeading=document.querySelector('h1');
    myHeading.textContent='真美呀，'+name+'!';
}
function setUserName(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
}
let storedName=localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}
let myButton=document.querySelector('button');
myButton.onclick=setUserName;