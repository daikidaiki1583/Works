document.querySelectorAll('.cards').forEach(function(cards){
    var judge = 0;

    cards.addEventListener('click',function(){
        console.log(this);

        var imgNumber = this.id;
        
        if (judge === 0){

        this.src = './images/owner.jpg';
        judge++;    
        
        } else if (judge === 1) {

        this.src = './images/gen' + imgNumber + '.png';
        judge--;    

        }

    });
});
