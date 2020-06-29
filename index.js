
$(document).ready(function(){
        $("#plus-food").click(function(){
            const number = parseInt($("#qty").text());
            $("#mines-food").parent().closest('div').removeClass("mines-food");
            $("#qty").text(number + 1);
            $("#price-food").text(parseInt($("#qty").text()) * parseInt($("#price").text()));
            const priceFood= parseInt($("#price-food").text());
            
            $(".all-price-food").text(priceFood);
            // const allPriceFood = parseInt($(".all-price-food").text(priceFood));            
            $("#all").text(priceFood - parseInt($("#service").text()) - parseInt($("#amount-takhfif").text()));
        });
    
        $("#mines-food").click(function(){
            const number = parseInt($("#qty").text()) - 1;
            if (number <= 0) {
                $(this).parent().closest('div').addClass("mines-food");
            }
            $("#qty").text(number);
            $("#price-food").text(parseInt($("#qty").text()) * parseInt($("#price").text()));
            const priceFood= parseInt($("#price-food").text());
            
            $(".all-price-food").text(priceFood);
        });

        $("#plus-takhfif").click(function(){
            codeTakhfif(takhfif);
        });
        $("#trash-takhfif").click(function(){
            $(".code-takhfif .trash-takhfif").css("display" , "none");
            $(".code-takhfif .plus-takhfif").css("display" , "flex");
            $(".code-takhfif").css("background-color" , "transparent");
            $(".code-takhfif input").val("");
        });
});

const takhfif= {
    gold: 15000,
    silver: 10000,
    bronze: 5000
} 

function codeTakhfif(obj){
    for(let i in Object.keys(obj)){
        let code = $(".code-takhfif input").val();
        if(code == Object.keys(obj)[i]){
            $("#amount-takhfif").html(Object.values(obj)[i]);
            $(".code-takhfif").css("background-color" , "rgb(217,246,230)");
            $(".code-takhfif .plus-takhfif").css("display" , "none");
            $(".code-takhfif .trash-takhfif").css("display" , "flex");
        } else {
            // $(".code-takhfif").css("background-color" , "rgb(251,223,220)");
            // $("#amount-takhfif").html(0);
            // $(".code-takhfif input").val("");
        }
    }
}
