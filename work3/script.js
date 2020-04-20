init();

var imgNumber;
var memory = {
    memoryImg1:'',
    memoryImg2:'',
}
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

                imgNumber = this.id;
                this.src = './images/gen' + imgNumber + '.png';
                
                //選んだカードを記憶
                memory.memoryImg1 = saveImg();

                count++;

            }

            else if (count == 1){　　　//count==1が、2手目の状態
            
                imgNumber = this.id;
                this.src = './images/gen' + imgNumber + '.png'; 
    
                memory.memoryImg2 = saveImg();　　　 //選んだカードを記憶
                
                if(memory.memoryImg1 == memory.memoryImg2){  //正解(1手目と2手目が同じの場合)の処理
                    document.getElementById('correct').classList.add('add');
                    memory.memoryImg1 = '';
                    memory.memoryImg2 = '';
                } else if (memory.memoryImg1 != memory.memoryImg2){　//不正解(1手目と2手目が異なる場合)の処理
                    document.getElementById('incorrect').classList.add('add');
                    memory.memoryImg1 = '';
                    memory.memoryImg2 = '';
                }

                count--;

            } 
            
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
            memory.memoryImg1 = '';
            memory.memoryImg2 = '';


    });
}