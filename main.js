let child = document.getElementById('child');
let child2 = document.getElementById('child2');
let btnStop = document.getElementById('btnStop');

btnStop.addEventListener('click', function(){
    if (child.classList.contains('loader')) {
        child.classList.remove('loader');
        child2.classList.remove('loader1');
        child.classList.add('loader2');
    }else{
        child.classList.add('loader');
        child2.classList.add('loader1');
    }
   
});