const dice = [];

let Die = function (){
    this.value = (Math.floor(Math.random() * 6) + 1);
    this.die = $("<div id='divs'></div>");
    $('#dice-holder').append(this.die);

    this.roll();
    $(this.die).on("click", ()=> {
           this.roll().bind(this);
    });
    this.die.on("dblclick", ()=>{
        $(this.die).remove().bind(this);
        const num = dice.indexOf(this);
        dice.splice(num,1);
        
    });
    
};

Die.prototype.roll = function(){
    this.value = (Math.floor(Math.random() * 6) + 1);
    this.die.text(this.value);
    
};
Die.prototype.divRemover =function(){
this.die.remove();
dice.pop();
};



$('#dieGenerator').on("click", ()=>{
    let dieGenerator = new Die;
    dice.push(dieGenerator);
});

$('#dieRoller').on("click", ()=>{
    for(i = 0; i < dice.length; i++){
   dice[i].roll();
    }
});
$('#counter').on("click", ()=>{
    let numCounter = 0;
    for(i = 0; i < dice.length; i++){
            numCounter += dice[i].value;
    };
    alert(`Your total is ${numCounter}`);
});

$('#reset').on("click", ()=>{
 location.reload();
});


















