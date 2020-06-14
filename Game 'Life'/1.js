const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
let mas=[];
let count = 0;
let timer;

document.getElementById('start').onclick = startLife;

canvas.onclick = (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    x = Math.floor(x/10);
    y = Math.floor(y/10);
    mas[y][x] = 1;
    drawField();
}

function goLife(){
    let n=30, m=30;
    for(let i=0; i<m; i++){
        mas[i] = [];
        for(let j=0; j<n; j++){
            mas[i][j] = 0;   
        }
    }
}
goLife();

function drawField(){
    ctx.clearRect(0,0,300,300);
    for(let i=0; i<30; i++){
        for(let j=0; j<30; j++){
            if(mas[i][j]==1){
                ctx.fillStyle = "orange";
                ctx.fillRect(j*10,i*10, 10,10)
            };   
        }
    }
}

function startLife(){
    let mas2 = mas.slice().map(i => i.slice());
    for(let i=0; i<30; i++){ 
        for(let j=0; j<30; j++){
            mas2[i][j] = 0;
        }
    }
    for(let i=0; i<30; i++){ 
        for(let j=0; j<30; j++){
            let neighbords = 0;
            if (mas[fpm(i)-1][j]==1) neighbords++;
            if (mas[i][fpp(j)+1]==1) neighbords++;
            if (mas[i][fpm(j)-1]==1) neighbords++;
            if (mas[fpp(i)+1][j]==1) neighbords++;
            if (mas[fpm(i)-1][fpp(j)+1]==1) neighbords++;
            if (mas[fpm(i)-1][fpm(j)-1]==1) neighbords++;
            if (mas[fpp(i)+1][fpm(j)-1]==1) neighbords++;
            if (mas[fpp(i)+1][fpp(j)+1]==1) neighbords++;
            (neighbords==2 && mas[i][j]==1) ? mas2[i][j]=1 : mas2[i][j]=0;
            if (neighbords==2 && mas[i][j]==0) mas2[i][j] = 0;
            (neighbords==3 || neighbords==2 && mas[i][j]== 1) ? mas2[i][j]=1 : mas2[i][j]=0;
            if (neighbords<2 || neighbords>3) mas2[i][j] = 0;
        }
    }
    mas = mas2.slice().map(i => i.slice());
    drawField();
    count++;
    document.getElementById('count').innerHTML = count;
    if (arrSum(mas) != 0) timer = setTimeout(startLife, 100);
    
}
function fpm(i){
    if(i==0) return 30;
    else return i;
}
function fpp(i){
    if(i==29) return -1;
    else return i;
}

function arrSum(array) {
    return array.flat().reduce((a,b) => a+b)
}