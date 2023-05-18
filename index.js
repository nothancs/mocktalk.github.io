window.addEventListener("load", function(){
    var bar = document.querySelector('.bar');
    var counter = document.querySelector('.counter');
    var loadingCounter = document.querySelector('.loading-counter');
    var progress = 0;
    var interval = setInterval(function(){
        progress += Math.floor(Math.random() * 10);
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(function(){
                window.location.href = 'role-selection.html';
            }, 1000);
        }
        bar.style.width = progress + "%";
        counter.innerHTML = progress + "%";
        loadingCounter.innerHTML = progress + "% completed";
    }, 200);
});