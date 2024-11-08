let ans, num1, num2;
document.getElementById("Moneytxt").innerHTML = storedMoney;

function GenerateQuestion() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 100) + 1;
    ans = num1 + num2;

    document.getElementById("num1txt").innerHTML = num1;
    document.getElementById("num2txt").innerHTML = num2;
}

function numAlert() {
    let PlayerAns = document.getElementById("numberAns").value;
    PlayerAns = Number(PlayerAns);

    if (PlayerAns === ans) {
        storedMoney += 10;
        sessionStorage.setItem("moneyValue", storedMoney);
        alert(storedMoney);
    } else {
        alert("Dafuq you talm bout das wrong no money for u");
    }
    document.getElementById("numberAns").value = "";
    document.getElementById("Moneytxt").innerHTML = storedMoney;
    GenerateQuestion();
}

document.getElementById("SubmitButton").addEventListener("click", function(){
    numAlert();
})

GenerateQuestion();