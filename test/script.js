const wrapDom = document.querySelector('.wrap');

const image = wrapDom.addEventListener('click',el => {


    const photo = el.target.src;
    const newPhoto =photo.replace(/http:\/\/127.0.0.1:5500/,`.`);
    let newNum;
    let displayPhoto = () =>{
        document.getElementById(`image${newNum}`).setAttribute('src',`${newPhoto}`);
    }

    const num = parseInt(prompt('何番目に表示したいですか'));    
    
    if (num === 1) {
        newNum = 4;
        displayPhoto();
    }   else if (num === 2) {
        newNum = 5;
        displayPhoto();
    }  else if (num === 3) {
        newNum = 6;
        displayPhoto();

    } else {
        alert('1~3を入力してください');
    }

});

