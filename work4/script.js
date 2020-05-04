
const UIController = function(){

    return {

    }

};

const InvetoryCtrl = function() {

    let nameOfThing=[];
    let numberOfThing=[];


    return{

        //入力されものの名前と数を記録する関数
        countInventory: () =>{ 
            nameOfThing.push(document.querySelector('.name-of-thing').value);
            numberOfThing.push(document.querySelector('.number-of-thing').value);
            console.log(nameOfThing);
            console.log(numberOfThing);

        }
        
    }
};


const controller = function(UICtrl,InvetoryCtrl) {

    document.querySelector('.button').addEventListener('click',() =>{

        //入力されものの名前と数を記録
        InvetoryCtrl.countInventory();

        //
    
    });
        
}(UIController(),InvetoryCtrl());






