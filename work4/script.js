
const UIController = function(){

    return {

            addItem:(type,ID,name,num)=>{  //UIに在庫リスト追加
            let html,newHtml;
            
            if(type === `foods`) { 
                html = `<div class="item food-item" id="food-%ID%">
                            <div class="name">%name%
                                <div><i class="delete-button">×</i></div>
                            </div>

                            <div id="plus-%ID%-foods" class="change plus">+</div>
                            <div id="counter-%ID%-foods">%num%</div>
                            <div id="minus-%ID%-foods" class="change minus">-</div>
                            
                        </div>`;


            } else if (type === `liquar`) {

                html =  `<div class="item liquar-item" id="liquar-%ID%">
                            <div class="name">%name%
                                <div><i class="delete-button">×</i></div>
                            </div>

                                <div id="plus-%ID%-liquar" class="change plus">+</div>
                                <div id="counter-%ID%-liquar">%num%</div>
                                <div id="minus-%ID%-liquar" class="change minus">-</div>
                                
                        </div>`;


            } else if (type === `necessaries`) {

                html = `<div class="item necessaries-item" id="necessaries-%ID%">
                            <div class="name">%name%
                                <div><i class="delete-button">×</i></div>
                            </div>

                                <div id="plus-%ID%-necessaries" class="change plus">+</div>
                                <div id="counter-%ID%-necessaries">%num%</div>
                                <div id="minus-%ID%-necessaries" class="change minus">-</div>
                    
                        </div>`;

            }

            newHtml = html.replace(/%ID%/g,ID);
            newHtml = newHtml.replace('%name%',name);
            newHtml = newHtml.replace('%num%',num);

            console.log(newHtml);
            document.querySelector(`.${type}-list`).insertAdjacentHTML('beforeend',newHtml);
            
        },

        deleteInput:()=>{
            document.getElementById('select-type').selectedIndex = 0;
            document.querySelector('.name-of-thing').value ='';
            document.querySelector('.number-of-thing').value ='';
        },

        deleteList:(selectorID) => {

            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        changeUiNumber:(num,ID,category) => {

            document.getElementById(`counter-${ID}-${category}`).textContent = num;
        }
    }

};

const InventoryController = function() {

    const Food =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    const Liquar =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    const Necessaries =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    let allobject={
        foods:[],
        liquar:[],
        necessaries:[]
    }
 
    return{

            //入力されものの名前と数を記録する関数
            countInventory: () =>{ 
                return{
                    type:document.querySelector('.type').value,
                    nameOfThing:document.querySelector('.name-of-thing').value,
                    numberOfThing:document.querySelector('.number-of-thing').value,
                }
            },

            createObject:(type,name,num)=>{
                let newObject,ID;

                if(type === `foods`) { //入力されたものの種別(type)に応じてオブジェクトを作成

                    //オブジェクトのIDを作成するための条件分岐
                    if (allobject.foods.length === 0){ //　Foodオブジェクトの配列の長さが0の場合

                        newObject = new Food(0,name,num);
                        allobject.foods.push(newObject);
                        console.log(allobject.foods);

                    } else {

                        newObject = new Food(allobject.foods.length,name,num);
                        allobject.foods.push(newObject);
                        console.log(allobject.foods);

        
                    }

                } else if (type === `liquar`) {

                    if (allobject.liquar.length === 0){

                        newObject = new Liquar(0,name,num);
                        allobject.liquar.push(newObject);
        

                    } else {

                        newObject = new Liquar(allobject.liquar.length,name,num);
                        allobject.liquar.push(newObject);

                    }

                } else if (type === `necessaries`) {
                    
                    if (allobject.necessaries.length === 0){

                        newObject = new Necessaries(0,name,num);
                        allobject.necessaries.push(newObject);
        
                    } else {

                        newObject = new Necessaries(allobject.necessaries.length,name,num);
                        allobject.necessaries.push(newObject);

                    }

                }

                return newObject

            },

            //配列のオブジェクトを削除
            deleteObject:(type,ID) => {

                if( type === 'food'){
                
                    allobject.foods.splice(ID,1);
                    console.log(allobject);

                } else if ( type === 'liquar') {
                
                    allobject.liquar.splice(ID,1);
                    console.log(allobject);

                
                } else if ( type === 'necessaries' ) {
                
                    allobject.necessaries.splice(ID,1);
                    console.log(allobject);
                }    
                
            },

            changeNumber:(type,ID,category) => {
                    
                if (type === 'plus'){
                    allobject[category][ID].number++;
                    console.log(allobject[category][ID].number);

                } else if (type === 'minus') {

                    if(allobject[category][ID].number > 0) {
                    allobject[category][ID].number--;
                    console.log(allobject[category][ID].number);
                     }
                }    
            },

            getAllObj:() => {
                return allobject
            }

    
        }
};


const controller = function(UICtrl,InventoryCtrl) {
    let allObj;
    allObj =InventoryCtrl.getAllObj();


    document.querySelector('.button').addEventListener('click',() =>{

        //入力されものの名前と数を記録

        let newItem =InventoryCtrl.countInventory();
        let newObject = InventoryCtrl.createObject(newItem.type,newItem.nameOfThing,newItem.numberOfThing);
        console.log(newObject);

        //入力された内容を画面に表示
        UICtrl.addItem(newItem.type,newObject.id,newObject.name,newObject.number);
   
        //入力された内容をリセットする
        UICtrl.deleteInput();
    
    });

    const editItem = function(event){
        let ids,splitID,type,ID,checkID,category;

        const splitIDs = ()=>{
            splitID = ids.split('-');
            type = splitID[0];
            ID = splitID[1];
            category = splitID[2];
        };

        checkID =event.target;
        if (checkID.id){　　//＋か-をクリックした場合の処理

            ids = checkID.id;
            
            splitIDs();
            console.log(type);
            console.log(ID);
            console.log(category);

            // //データを編集
            InventoryCtrl.changeNumber(type,ID,category);

            console.log(allObj);
            // //UIの数字を変更
            UICtrl.changeUiNumber(allObj[category][ID].number,ID,category);

        }else{   //×クリックした場合の処理

            ids =event.target.parentNode.parentNode.parentNode.id;
                
            splitIDs();

            //配列のオブジェクトを削除
            InventoryCtrl.deleteObject(type,ID);
    
            //UIからリスト削除
            UICtrl.deleteList(ids);
    
        }
        
    };

    document.querySelector('.listall').addEventListener('click',editItem);

    
}(UIController(),InventoryController());






