function myFuction(){
    document.getElementById('myHealthDrop').classList.toggle('show');
}
window.onClick = function(e){
    if(!e.target.matches('.dropbtn')){
        var myHealthDrop = document.getElementById('myHealthDrop');
        if(myHealthDrop.classList.contains('show')){
            myHealthDrop.classList.remove('show');
        }
    }
}