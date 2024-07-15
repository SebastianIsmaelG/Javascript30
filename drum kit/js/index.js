window.addEventListener('keydown',function(e){
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return
    }else{
        //console.log(key);
        //reset audio y hubo una antes y agrega la clase .playing
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        
    }

});
//borra la clase .playing 
function removeTransition(e){
    if(e.propertyName !== 'transform'){
        return;
    }else{
        //console.log(e.propertyName);
        this.classList.remove('playing');
        
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend',removeTransition));