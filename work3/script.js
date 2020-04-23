init();

var imgNumber,checkCard1,checkCard2,reverseCard1,reverseCard2;

var memory = {
    memoryImg1:'',
    memoryImg2:'',
}

var alreadyGot=[];

var count = 0; //何回目のカード選択かを計測


function init(){ //アプリ起動時の状態を定義
    document.querySelectorAll('.cards').forEach(function(cards){
        cards.src = './images/owner.jpg';
    });

    //ここに残り枚数を10枚に設定するコードをきさい
}

document.querySelectorAll('.cards').forEach(function(cards){
        
        cards.addEventListener('click',function(){
            
            if (count == 0){         //count==0が、1手目の状態

                reset();
                reverseCard1 =this;　 //不正解の場合にカードを裏返すためにthisオブジェクトを入れておく。
                imgNumber = this.id;
                checkCard1= this.id;

                if (alreadyGot.includes(imgNumber)){　//選択したカードが既に獲得したペアのカードかどうかのチェック
                    　
                    document.getElementById('alert2').classList.add('add2');
                    count = 0;　//次の手も1手目と判断されるためにcountに0を代入

                } else {

                    console.log(checkCard1);
                    this.src = './images/gen' + imgNumber + '.png';

                    memory.memoryImg1 = saveImg();                 //選んだカードを記憶


                    count++;
                }

            }

            else if (count == 1){　　　//count==1が、2手目の状態

                document.getElementById('alert1').classList.remove('add1');
                document.getElementById('alert2').classList.remove('add2');

                reverseCard2 =this;
                imgNumber = this.id;
                checkCard2 = this.id;

                if (alreadyGot.includes(imgNumber)){　　//選択したカードが既に獲得したペアのカードかどうかのチェック
                    document.getElementById('alert2').classList.add('add2');
                    count=1; //次の手も2手目と判断されるためにcountに1を代入
                
                } else {

                    console.log(checkCard2);

                    if (checkCard1 != checkCard2){ //2枚目選んだカードが1枚目と同じでは無いかの確認

                        this.src = './images/gen' + imgNumber + '.png'; 
                
                        memory.memoryImg2 = saveImg();　　　 //選んだカードを記憶
                        
                        if(memory.memoryImg1 == memory.memoryImg2){  //正解(1手目と2手目が同じの場合)の処理
                            
                            document.getElementById('correct').classList.add('add');
                            memory.memoryImg1 = '';
                            memory.memoryImg2 = '';
                            alreadyGot.push(checkCard1);
                            alreadyGot.push(checkCard2);
                            console.log(alreadyGot);

                        } else if (memory.memoryImg1 != memory.memoryImg2){　//不正解(1手目と2手目が異なる場合)の処理

                            document.getElementById('incorrect').classList.add('add');
                            memory.memoryImg1 = '';
                            memory.memoryImg2 = '';

                            // reverseCard1.src ='./images/owner.jpg';
                            // reverseCard2.src ='./images/owner.jpg';

                        }

                        count--;

                    } else {
                        document.getElementById('alert1').classList.add('add1');
                    }

                } //includesのelse

            } //手数管理のelseif
            
        });
});


function saveImg(){ //選んだカードが何なのかを識別するための関数
    if(imgNumber == 1 ||imgNumber == 6){
        return 'cardrmemory-1';
        
    } else if (imgNumber == 2 || imgNumber == 7){
        return 'cardrmemory-2';
        
    } else if (imgNumber == 3 || imgNumber == 8){
        return 'cardrmemory-3';
        
    } else if (imgNumber == 4 || imgNumber == 9){
        return 'cardrmemory-4';
        
    } else{
        return 'cardrmemory-5';  
    } 
};

document.querySelector(".button").addEventListener('click',function(){  //全てのカードを裏面にする。
        
    document.querySelectorAll('.cards').forEach(function(cards){
            cards.src = './images/owner.jpg';
            reset();

    });
});


function reset(){ //判定の部分のクラス名addを削除する。
        document.querySelectorAll('.cards').forEach(function(cards){
            document.getElementById('correct').classList.remove('add');
            document.getElementById('incorrect').classList.remove('add');
            document.getElementById('alert1').classList.remove('add1');
            document.getElementById('alert2').classList.remove('add2');

            memory.memoryImg1 = '';
            memory.memoryImg2 = '';


    });
}