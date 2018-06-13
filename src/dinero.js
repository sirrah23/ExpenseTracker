module.exports = {

    daysInCurrentMonth(){
        const now = new Date()
        return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    },

    monthlyToDaily(cents){
        const days = this.daysInCurrentMonth();
        console.log(days);
        return cents / days;
    }

}