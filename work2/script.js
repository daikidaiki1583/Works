
var zodiac =['申','酉','戌','亥','子','丑','寅','卯','辰','巳','牛','未',];
var sign=['おひつじ座','おうし座','ふたご座','かに座','しし座','おとめ座','てんびん座','さそり座','いて座','やぎ座','みずがめ座','うお座'];
var birthYear,birthMonth,birthDay;

/*
var jan = new Date(1990,0,20);
var feb = new Date(1990,1,19);
var march = new Date(1990,2,21);
var april = new Date(1990,3,19);
var may = new Date(1990,4,21);
var june = new Date(1990,5,22);
var july = new Date(1990,6,23);
var aug = new Date(1990,7,23);
var sep = new Date(1990,8,23);
var oct = new Date(1990,9,24);
var nov = new Date(1990,10,24);
var dec = new Date(1990,11,24);
*/


//干支の計算関数
document.getElementById('calc').addEventListener('click',function(){
    birthYear = document.getElementById('year').value; 
    birthMonth = document.getElementById('month').value;
    birthDay = document.getElementById('date').value;


    if (birthYear){ 

        var judgeNum = birthYear % 12;
        console.log(judgeNum);

        if (judgeNum >= 0){
        document.getElementById('zodiac').textContent = zodiac[judgeNum];
        document.getElementById('zodiac').classList.remove('error');
        
        var day = new Date(1990,birthMonth -1,birthDay); //表示される。

        //星座判定のための日付
        var jan = new Date(1990,0,20);
        var feb = new Date(1990,1,19);
        var march = new Date(1990,2,21);
        var april = new Date(1990,3,20);
        var may = new Date(1990,4,20);
        var june = new Date(1990,5,21);
        var july = new Date(1990,6,22);
        var aug = new Date(1990,7,22);
        var sep = new Date(1990,8,22);
        var oct = new Date(1990,9,23);
        var nov = new Date(1990,10,22);
        var dec = new Date(1990,11,21);
            
            if (day.getTime() >= jan.getTime() && day.getTime() < feb.getTime()){
                document.getElementById('sign').textContent = 'みずがめ座' ;
            }
            else if (day.getTime() >= feb.getTime() && day.getTime() < march.getTime()){
                document.getElementById('sign').textContent = 'うお座' ;
            }
            else if (day.getTime() >= march.getTime() && day.getTime() < april.getTime()){
                document.getElementById('sign').textContent = 'おひつじ座' ;
            } 
            else if (day.getTime() >= april.getTime() && day.getTime() <= may.getTime()){
                document.getElementById('sign').textContent = 'おうし座' ;
            } 
            else if (day.getTime() > may.getTime() && day.getTime() <= june.getTime()){
                document.getElementById('sign').textContent = 'ふたご座' ;
            }
            else if (day.getTime() > june.getTime() && day.getTime() <= july.getTime()){
                document.getElementById('sign').textContent = 'かに座' ;
            }
            else if (day.getTime() > july.getTime() && day.getTime() <= aug.getTime()){
                document.getElementById('sign').textContent = 'しし座' ;
            }
            else if (day.getTime() > aug.getTime() && day.getTime() <= sep.getTime()){
                document.getElementById('sign').textContent = 'おとめ座' ;
            }
            else if (day.getTime() > sep.getTime() && day.getTime() <= oct.getTime()){
                document.getElementById('sign').textContent = 'てんびん座' ;
            }
            else if (day.getTime() > oct.getTime() && day.getTime() <= nov.getTime()){
                document.getElementById('sign').textContent = 'さそり座' ;
            }
            else if (day.getTime() > nov.getTime() && day.getTime() <= dec.getTime()){
                document.getElementById('sign').textContent = 'いて座' ;
            }
            else {
                document.getElementById('sign').textContent = 'やぎ座' ;
            }


    
        } 

        else {
        document.getElementById('zodiac').textContent = '紀元前は計算できません。';
        document.getElementById('zodiac').classList.add('error');
        }

    
    }  else {
        document.getElementById('year').innerHTML = "<div>" + '生まれた年を' + "<br>" + '入力して下さい' + "</div>";
        document.getElementById('zodiac').innerHTML = "<div>" + '生まれた年を' + "<br>" + '入力して下さい' + "</div>";
        document.getElementById('zodiac').classList.add('error');
    }

});


//クリアボタンを押すと入力された値、出力された文字がすべて消える関数
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('year').value = '';
    document.getElementById('month').value = '';
    document.getElementById('date').value = ''; 
    document.getElementById('zodiac').innerHTML = "";
});



// console.log(birthMonth); //そもそもコンソールに表示されない。

//var day = new Date(birthMonth,birthDay);
//console.log(day.getTime()); //gettime


/*
var today =new Date();
console.log(today);

/*
if (2020/12/7 > day){
console.log(true);
}else{
    console.log(false);
}

*/






/*

function calczodiac(){
    var birthYear = document.forms.form1.year.value; 
    console.log(birthYear);  //これだとコンソールに表示できなかった

    var judgeNum = birthYear % 12;

    switch (judgeNum){   

        case '0':  //西暦年を12で割って、余りが0であれば申年//
            document.getElementById('zodiac').textContent = "申";
        
    }
	
};
*/