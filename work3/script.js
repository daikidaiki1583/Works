init();

var imgNumber,checkCard1,checkCard2,reverseCard1,reverseCard2,photoNumber,checkNumber,indexNuber;

var memory = {
    memoryImg1:'',
    memoryImg2:'',
}

var cardNumbers=[0,1,2,3,4,5,6,7,8,9,];
var alreadyReverse=[];　　　　　　 //　　　
var fixedCardArrey=[,,,,,,,,,];   //カードの位置を固定するために使用する配列
var alreadyGot=[];                //既に獲得したカード番号を入れておく配列
var count = 0; //何回目のカード選択かを計測



function init(){ //アプリ起動時の状態を定義
    document.querySelectorAll('.cards').forEach(function(cards){
        cards.src = './images/owner.jpg';
    });
}

function fixedCard(){
    fixedCardArrey.splice(imgNumber,1,photoNumber);
};

function random(){   //ランダムにカード並べるための関数。(実際には並べておらず、ランダムに数字を出してその数字をもとに表示される画像を決めている。)
    var x;
    while (x === undefined){
        checkNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        if(alreadyReverse.includes(checkNumber)){  //alreadyReverseをもとに重複を避ける(同じカードが3枚以上でないようにする)
              
        } else{
            photoNumber = checkNumber;
            alreadyReverse.push(photoNumber);  
            x = 1;
        }
    }
    x = undefined;
    return photoNumber
}

var alreadyOutId=[];

document.querySelectorAll('.cards').forEach(function(cards){
        
        cards.addEventListener('click',function(){

            imgNumber = this.id;
            console.log('ID = ' + imgNumber)

            if (count == 0){         //count==0が、1手目の状態


                /**
                 * クリックしたカードのidを返し、それが既に出ているものであれば、
                 * idに入っている数字をfixedCardArrey配列にいれて、画像を表示させるための番号を出す。
                 **/

                if (alreadyOutId.includes(imgNumber)){   
                    reset();

                    switch (imgNumber){
                        case '0':
                            this.src = './images/gen' + fixedCardArrey[0] + '.png';
                            console.log(this.src);
                            break;
                        case '1':
                            this.src = './images/gen' + fixedCardArrey[1] + '.png';
                            console.log(this.src);
                            break;
                        case '2':
                            this.src = './images/gen' + fixedCardArrey[2] + '.png';
                            console.log(this.src);
                            break;
                        case '3':
                            this.src = './images/gen' + fixedCardArrey[3] + '.png';
                            console.log(this.src);
                            break;
                        case '4':
                            this.src = './images/gen' + fixedCardArrey[4] + '.png';
                            console.log(this.src);
                            break;
                        case '5':
                            this.src = './images/gen' + fixedCardArrey[5] + '.png';
                            console.log(this.src);
                            break;
                        case '6':
                            this.src = './images/gen' + fixedCardArrey[6] + '.png';
                            console.log(this.src);
                            break;
                        case '7':
                            this.src = './images/gen' + fixedCardArrey[7] + '.png';
                            console.log(this.src);
                            break;                                            
                        case '8':
                            this.src = './images/gen' + fixedCardArrey[8] + '.png';
                            console.log(this.src);
                            break;
                        case '9':
                            this.src = './images/gen' + fixedCardArrey[9] + '.png'; 
                            console.log(this.src);
                            break;                                          
                    }

                        if (alreadyGot.includes(imgNumber)){　//選択したカードが既に獲得したペアのカードかどうかのチェック
                                　
                            document.getElementById('alert2').classList.add('add2');
                            count = 0;　//次の手も1手目と判断されるためにcountに0を代入

                        } else {

                            memory.memoryImg1 = saveImg();                 //選んだカードを記憶
                            count++;
                        }

                }

                else {

                reset();
                photoNumber = random(); 
                this.src = './images/gen' + photoNumber + '.png';
                fixedCard();　//カードの位置を固定するために配列にphotoNumberを入れる。
                console.log('カード位置　= ' + fixedCardArrey);

                    if (alreadyGot.includes(imgNumber)){　//選択したカードが既に獲得したペアのカードかどうかのチェック
                            　
                        document.getElementById('alert2').classList.add('add2');
                        count = 0;　//次の手も1手目と判断されるためにcountに0を代入

                    } else {

                        memory.memoryImg1 = saveImg();                 //選んだカードを記憶
                        count++;
                    }


                }   

                checkCard1= imgNumber;
                reverseCard1 =this;　 //不正解の場合にカードを裏返すためにthisオブジェクトを入れておく。
                alreadyOutId.push(imgNumber);
                
            }

            else if (count == 1){　　　//count==1が、2手目の状態

                document.getElementById('alert1').classList.remove('add1');
                document.getElementById('alert2').classList.remove('add2');

                    if (alreadyOutId.includes(imgNumber)){   
                            reset();

                            switch (imgNumber){
                                case '0':
                                    this.src = './images/gen' + fixedCardArrey[0] + '.png';
                                    console.log(this.src);
                                    break;
                                case '1':
                                    this.src = './images/gen' + fixedCardArrey[1] + '.png';
                                    console.log(this.src);
                                    break;
                                case '2':
                                    this.src = './images/gen' + fixedCardArrey[2] + '.png';
                                    console.log(this.src);
                                    break;
                                case '3':
                                    this.src = './images/gen' + fixedCardArrey[3] + '.png';
                                    console.log(this.src);
                                    break;
                                case '4':
                                    this.src = './images/gen' + fixedCardArrey[4] + '.png';
                                    console.log(this.src);
                                    break;
                                case '5':
                                    this.src = './images/gen' + fixedCardArrey[5] + '.png';
                                    console.log(this.src);
                                    break;
                                case '6':
                                    this.src = './images/gen' + fixedCardArrey[6] + '.png';
                                    console.log(this.src);
                                    break;
                                case '7':
                                    this.src = './images/gen' + fixedCardArrey[7] + '.png';
                                    console.log(this.src);
                                    break;                                            
                                case '8':
                                    this.src = './images/gen' + fixedCardArrey[8] + '.png';
                                    console.log(this.src);
                                    break;
                                case '9':
                                    this.src = './images/gen' + fixedCardArrey[9] + '.png'; 
                                    console.log(this.src);
                                    break;   
                            }     


                            if (alreadyGot.includes(imgNumber)){　　//選択したカードが既に獲得したペアのカードかどうかのチェック
                                document.getElementById('alert2').classList.add('add2');
                                count=1; //次の手も2手目と判断されるためにcountに1を代入
                            
                            } else {


                                    if (checkCard1 != checkCard2){ //2枚目選んだカードが1枚目と同じでは無いかの確認

                                        memory.memoryImg2 = saveImg();　　　 //選んだカードを記憶

                                        setTimeout(function(){ //2枚目のカードの絵柄が見えて、正解か不正解かどうかを判断するまで1秒待たす。(これが無いと不正解の場合に絵柄がなくなる。)
                                        
                                        if(memory.memoryImg1 == memory.memoryImg2){  //正解(1手目と2手目が同じの場合)の処理
                                            
                                            document.getElementById('correct').classList.add('add');
                                            memory.memoryImg1 = '';
                                            memory.memoryImg2 = '';
                                            alreadyGot.push(checkCard1);
                                            alreadyGot.push(checkCard2);

                                        } else if (memory.memoryImg1 != memory.memoryImg2){　//不正解(1手目と2手目が異なる場合)の処理

                                            document.getElementById('incorrect').classList.add('add');
                                            memory.memoryImg1 = '';
                                            memory.memoryImg2 = '';

                                            reverse()
                                            
                                        }

                                        },500);


                                    } else {
                                        document.getElementById('alert1').classList.add('add1');

                                    }

                            } //includesのelse   
                        
                            count--;


                    } else {

                        reset();
                        photoNumber = random(); 
                        this.src = './images/gen' + photoNumber + '.png';
                        fixedCard();　//カードの位置を固定するために配列にphotoNumberを入れる。
                        console.log('カード位置　= ' + fixedCardArrey);
        
                    
                        reverseCard2 =this;
                        checkCard2 = imgNumber;

        
                    if (alreadyGot.includes(imgNumber)){　　//選択したカードが既に獲得したペアのカードかどうかのチェック
                        document.getElementById('alert2').classList.add('add2');
                        count=1; //次の手も2手目と判断されるためにcountに1を代入
                    
                    } else {


                        if (checkCard1 != checkCard2){ //2枚目選んだカードが1枚目と同じでは無いかの確認

                                memory.memoryImg2 = saveImg();　　　 //選んだカードを記憶

                                setTimeout(function(){ //2枚目のカードの絵柄が見えて、正解か不正解かどうかを判断するまで1秒待たす。(これが無いと不正解の場合に絵柄がなくなる。)
                                
                                    if(memory.memoryImg1 == memory.memoryImg2){  //正解(1手目と2手目が同じの場合)の処理
                                        
                                        document.getElementById('correct').classList.add('add');
                                        memory.memoryImg1 = '';
                                        memory.memoryImg2 = '';
                                        alreadyGot.push(checkCard1);
                                        alreadyGot.push(checkCard2);

                                    } else if (memory.memoryImg1 != memory.memoryImg2){　//不正解(1手目と2手目が異なる場合)の処理

                                        document.getElementById('incorrect').classList.add('add');
                                        memory.memoryImg1 = '';
                                        memory.memoryImg2 = '';

                                        reverse()
                                        
                                    }

                                },500);


                        } else {
                            document.getElementById('alert1').classList.add('add1');
                        }

                        count--;


                    } //includesのelse

                }
                
                alreadyOutId.push(imgNumber);
            } //手数管理のelseif
            
        });
});


function reverse(){
reverseCard1.src ='./images/owner.jpg';
reverseCard2.src ='./images/owner.jpg';
};


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

document.querySelector(".button").addEventListener('click',function(){  //ゲームを0から始めるための機能。

    for (var i = 0;i = alreadyGot.length;i++){　　　//このfor文はすでに獲得したカードをいれる配列alreadyGotをデータを全て消すためのコード
        alreadyGot.pop();                     
     }
     
     for (var i =alreadyReverse.length - 1;i >= 0;i--){
        alreadyReverse.pop(i);
    }
         
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
            count=0;
    });
}


