const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#E4E791");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#A0DAB4");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#B5DEFF");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#CAB8FF");
        }
        else if(color.contains("btn5")){
            theme.style.setProperty("--theme-color", "#FFADAD");
        }
        else{
            theme.style.setProperty("--theme-color", "#FFBF86");
        }
    });
});