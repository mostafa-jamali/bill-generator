
function plus(id){
    $this = $("#table tbody #" + `${id}`);
    // let i = $this.attr('id');
    // calc for price-food
    const qty = parseInt($this.find($(".qty")).text());
    $this.find($(".mines-icon")).removeClass("mines-icon");
    $this.find($(".qty")).text(qty + 1);
    const price = parseInt($this.find($(".price")).text());
    $this.find($(".price-food")).text((qty+1) * price);

    allPriceFood();   
}

function minus(id){
    $this = $("#table tbody #" + `${id}`);
    const qty = parseInt($this.find($(".qty")).text()) - 1;
    if (qty <= 0) {
        $this.find($(".mines-food")).parent().addClass("mines-icon");
    }
    $this.find($(".qty")).text(qty);
    const price = parseInt($this.find($(".price")).text());
    $this.find($(".price-food")).text((qty) * price);

    allPriceFood();
}

function allPriceFood(){
    let sum = 0;
    for (let i = 1; i < $("#table tbody").children().length + 1; i++) {
        const priceFood= parseInt($("#table tbody #" + `${i}`).find($(".price-food")).text());        
        sum += priceFood
    }
    const allPrice = $(".all-price-food").text(sum);
    $(".all").text(sum + parseInt($("#service").text()) - parseInt($("#amount-takhfif").text()));
}

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
            // $(".code-takhfif input").val("");
            // $("#amount-takhfif").html(0);
            // $(".code-takhfif").css("background-color" , "rgb(251,223,220)");
        }
    }
}

$("#plus-takhfif").click(function(){
    codeTakhfif(takhfif);
    allPriceFood();
});
$("#trash-takhfif").click(function(){
    $(".code-takhfif .trash-takhfif").css("display" , "none");
    $(".code-takhfif .plus-takhfif").css("display" , "flex");
    $(".code-takhfif").css("background-color" , "transparent");
    $(".code-takhfif input").val("");
});