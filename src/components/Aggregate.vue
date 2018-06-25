<template>
  <div id="aggregate">
    <h1>Aggregated Expenses</h1>
    <ul id="expense-list-aggregate">
        <ExpenseItem 
            v-for="expense in expenses"
            :expense="expense"
            @remove="removeExpense"
        />
    </ul>
    <a href="#/">Monthly</a>
  </div>
</template>

<script>
import ExpenseItem from "./ExpenseItem.vue"
import API from "../api.js"
import Utils from "../utils.js"

export default {
    components:{
        ExpenseItem
    },
    mounted(){
        API.getAggregate().then((d) => this.expenses = d);
    },
    data(){
        return{
            expenses: []
        }
    },
    methods:{
        removeExpense(name){
            this.expenses = this.expenses.filter(e => e.name !== name);
        }
    }
}
</script>

<style>

#expense-list-daily{
list-style-type: none;
}

.expense-name{
width: 150px;
}

</style>