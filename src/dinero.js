module.exports = {

    currentDay(){
        //TODO: Unhardcode this
        return 24;
    },

    daysInCurrentMonth(){
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    },

    monthlyToDaily(cents){
        const days = this.daysInCurrentMonth();
        return cents / days;
    },

    monthlyToCurr(cents){
        const curr_day = this.currentDay();
        const days = this.daysInCurrentMonth();
        return curr_day / days * cents;
    }

}