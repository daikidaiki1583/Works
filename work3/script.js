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
    
    if(count == 0){
        count++;

        cards.addEventListener('click',function(){
            console.log('1回目');
            
            imgNumber = this.id;
            this.src = './images/gen' + imgNumber + '.png';
            
            //選んだカードを記憶
            memory.memoryImg1=saveImg();
            console.log(memory.memoryImg1);

        });


    } else if (count == 1) {
        count++;

        cards.addEventListener('click',function(){
            console.log('2回目');

            //カードを表面にする。
            imgNumber = this.id;
            this.src = './images/gen' + imgNumber + '.png';

            //選んだカードを記憶
            memory.memoryImg2=saveImg();
            console.log(memory.memoryImg2);
            if(memory.memoryImg1 == memory.memoryImg2){
                console.log('正解');
                document.getElementById('correct').classList.add('add');
            } else{
                console.log('不正解');
                document.getElementById('incorrect').classList.add('add');

            }

    
        });

        count=0;
    }
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
            document.getElementById('correct').classList.remove('add');
            document.getElementById('incorrect').classList.remove('add');

    });
});
