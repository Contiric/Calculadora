class CalcController {

    constructor() {
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display")
        this._dateCalcEl = document.querySelector("#data")
        this._timeCalcEl = document.querySelector("#hora")
        this._currentDate;
        this.inicialize();
        this.initButtonsEvents();
    }

    inicialize() {
       
        this.setDisplayDateTime();
        
        setInterval(()=> {
           this.setDisplayDateTime();

       }, 1000);

       /*
       setTimeout(() => {
           
        clearInterval(interval);  
        
       }, 10000);
      */

    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
    }

    setError() {
         //this.displayCalc = "Error";
    }

    exectBtn(value) {
        
        switch(value) {
            case 'ac':
            this.clearAll();
            break;
        
            case 'ce': 
            this.clearEntry();
            break;

            case 'soma':
            break;  
            
            case 'subtracao':
            break;  

            case 'divisao':
            break;  

            case 'multiplacao':
            break;  

            case 'porcento':
            break;  

            case 'igual':
            break;  

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":  
            case "6":
            case "7":
            case "8":
            case "9":
            this.addOperation(parseInt(value));
            break;

            default:
            this.setError();
            break;  

            
    }

}

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event=>{
            element.addEventListener(event, fn);
        })
    }

    

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, "click drag", e=>{
                console.log(btn.className.baseVal.replace("btn-"," "));
            });

            let textBtn = btn.className.baseVal.replace("btn-", " ");

            this.exectBtn();

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
                btn.style.cursor = "pointer";
            });
        });
    }
    

    
      setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit", 
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
      }
     

    get displayTime() {
        return this._timeCalcEl.innerHTML;
    }

    set displayTime(value) {
        return this._displayCalcEl.innerHTML = value;
    }

    get displayDate() {
        returnthis._dateCalcEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateCalcEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor; 
    }

    get currentDate() {
        return new Date();
    }
    set currentDate(valor) {
        this._currentDate = valor;
    }

}