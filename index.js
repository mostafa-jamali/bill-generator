
for (let i = 1; i < $("#table tbody").children().length +1; i++) {
    $this = $("#table tbody tr").eq([i-1]).attr("id",`${i}`);

    $this.find($(".plus-food")).attr("onclick",`plus(${i})`);
    $this.find($(".mines-food")).attr("onclick",`minus(${i})`);
}


function plus(id){
    $this = $("#table tbody #" + `${id}`);
    // calc for price-food
    const qty = parseInt($this.find($(".qty")).text());    
    $this.find($(".mines-icon")).removeClass("mines-icon");
    $this.find($(".qty")).text(qty + 1);
    const price = parseInt($this.find($(".price")).text());
    $this.find($(".price-food")).text((qty+1) * price);
    // calc for all-price
    allPriceFood();  
}

function minus(id){
    $this = $("#table tbody #" + `${id}`);
    // calc for price-food
    const qty = parseInt($this.find($(".qty")).text()) - 1;
    if (qty <= 0) {
        $this.find($(".mines-food")).parent().addClass("mines-icon");
    }
    $this.find($(".qty")).text(qty);
    const price = parseInt($this.find($(".price")).text());
    $this.find($(".price-food")).text((qty) * price);
    // calc for all-price
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
            allPriceFood();
            return;
        }
    }
    $("#amount-takhfif").html(0);
    $(".code-takhfif").css("background-color" , "rgb(251,223,220)");
    setTimeout(()=>{
        $(".code-takhfif input").val("");
        $(".code-takhfif").css("background-color" , "transparent");
    } ,2000);
    allPriceFood();
}

function trashTakhfif(){
    $(".code-takhfif .trash-takhfif").css("display" , "none");
    $(".code-takhfif .plus-takhfif").css("display" , "flex");
    $(".code-takhfif").css("background-color" , "transparent");
    $(".code-takhfif input").val("");
}

function refresh(){
    $(".qty").text(0);
    $(".mines-food").parent().addClass("mines-icon");
    $(".price-food").text(0);
    $(".all-price-food").text(0);
    $("#amount-takhfif").text(0);
    $(".all").text(0);
}