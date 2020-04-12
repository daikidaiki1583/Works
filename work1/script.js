var number;

function slot(){
    document.querySelector('.reel-' + number).textContent = Math.floor(Math.random() * 10 );
    
};


document.getElementById('button-0').addEventListener('click',function(){
    number=0;
    slot();       
});
document.getElementById('button-1').addEventListener('click',function(){
    number=1;
    slot();       
});
document.getElementById('button-2').addEventListener('click',function(){
    number=2;
    slot();       
});

/**
 * div親要素の中のdiv子要素をpositionで親要素の下に配置して、
 * addEventListener('click',function){}を使って外の関数呼び出したら、
 * positionで配置したdiv子要素が消えた。
 * →対処法:親子関係をやめて、横に配置したら消えずに作動するようになった。
 */
