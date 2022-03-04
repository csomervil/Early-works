document.getElementById("grower").addEventListener("click", function(){

    document.getElementById("box").style.height = "1000px";
    document.getElementById("box").style.width = "1000px";

});

document.getElementById("bluer").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fader").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "white";
});

document.getElementById("shrinker").addEventListener("click", function(){

    document.getElementById("box").style.width = "10px";
    document.getElementById("box").style.height = "10px";
});

document.getElementById("reseter").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
});