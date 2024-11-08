if (!sessionStorage.getItem("InitialStateStore")){
  const initialState = {
    Happiness: 100,
    Hunger: 100
  };
  sessionStorage.setItem("InitialStateStore", JSON.stringify(initialState));
  }
if (!sessionStorage.getItem("moneyValue")){
    let money = 100;
    sessionStorage.setItem("moneyValue", money)
}

  let state = { ...JSON.parse(sessionStorage.getItem("InitialStateStore")) };
  
  let storedMoney = Number(sessionStorage.getItem("moneyValue"));
  
  (function() {
   
    const updateDisplay = () => {
      document.getElementById("Happinesstxt").innerHTML = state.Happiness;
      document.getElementById("Hungertxt").innerHTML = state.Hunger;
      document.getElementById("Moneytxt").innerHTML = sessionStorage.getItem("moneyValue");
    };
    
    updateDisplay();
  
    const lanceHunger = () => {
      if (state.Hunger > 0) {
        state.Hunger -= 20;
        sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
        updateDisplay();
        hungerAlert();
      }
    };
  
    const hungerAlert = () => {
      if (state.Hunger === 0) {
        alert("LANCE HUNGRY");
      }
    };
  
    setInterval(lanceHunger, 10000);
    
    let foodPrice;
  
    const feedLance = (food) => {
      switch(food)
      {
        case 'pizza':
          foodPrice = 50;
          if(storedMoney >= foodPrice){
          state.Hunger += 50;
          storedMoney -= 50;
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          sessionStorage.setItem("moneyValue", storedMoney);}
          else {
            alert("you broke");
          }
          break;
       case 'pasta':
          foodPrice = 40;
          if(storedMoney >= foodPrice){
          state.Hunger += 60;
          storedMoney -= 40;
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          sessionStorage.setItem("moneyValue", storedMoney);}
          else {
            alert("you broke");
          }
          break;
        case 'veggie_mix':
          foodPrice = 30;
          if(storedMoney >= foodPrice){
          state.Hunger -= 20;
          storedMoney -= 30;
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          sessionStorage.setItem("moneyValue", storedMoney);
          alert("Lance no like veggies >:(")}
          else {
            alert("you broke");
          }
          break;
      };
      updateDisplay();
    };
  
    const lanceSadness = () => {
      if (state.Happiness > 0) {
        state.Happiness -= 20;
        sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
        updateDisplay();
        sadAlert();
      }
    };
  
    const sadAlert = () => {
      if (state.Happiness === 0) {
        alert("LANCE SAD :(");
      }
    };
  
    setInterval(lanceSadness, 8000);
  
  const cheerLance = (love_lang) => {
      switch(love_lang)
      {
        case 'words':
          state.Happiness -= 100;
          alert("Lance is emotionally unavailable :(");
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          break;
        case 'gift':
          state.Happiness += 100;
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          break;
        case 'touch':
          state.Happiness += 200;
          sessionStorage.setItem("InitialStateStore", JSON.stringify(state));
          break;
      };
      updateDisplay();
    };
    
    window.cheerLance = cheerLance;
    window.feedLance = feedLance;
  })();