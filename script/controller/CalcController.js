class CalcController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display")
        this._dateCalcEl = document.querySelector("#data")
        this._timeCalcEl = document.querySelector("#hora")
        this._currentDate;
        this.inicialize();
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