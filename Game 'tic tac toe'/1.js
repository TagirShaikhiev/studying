window.onload =() => {
    for (let i=0; i<9; i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>'
    }
    let hod = true;
    let check;
    let gameStop;
    document.getElementById('game').onclick = (event) => {
        check = event.target.innerHTML;
        if (!gameStop) {
            if (event.target.className = 'block') {
                if (hod && check == "") { 
                    hod = false;
                    event.target.innerHTML = 'x';
                    checkWinner('x');}
                else if (!hod && check == ""){
                    hod = true;
                    event.target.innerHTML = '0';
                    checkWinner('0');}        
            }
        }
    }
    function checkWinner(perem){
        const allblock = document.getElementsByClassName('block');
        const combo = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
        for(let i=0; i<8; i++){
            if (allblock[combo[i][0]].innerHTML == perem && allblock[combo[i][1]].innerHTML == perem && allblock[combo[i][2]].innerHTML == perem) {
                alert (`Победили ${perem}`);
                gameStop = true;}
        }
    }
    document.getElementById('start').onclick = () => {
        let allblock = document.getElementsByClassName('block');
        for(let i=0; i<9; i++) allblock[i].innerHTML = '';
        gameStop = false;}
}