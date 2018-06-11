<template>
  <div id="daily">
    <h1>Daily Expenses</h1>
    <ul id="expense-list-daily">
      <li class="expense" v-for="expense in expenses">
        <span class="expense-name">{{ expense.name }}:</span> 
        <span class="expense=price">{{ fmtPrice(expense) }}</span>
      </li>
    </ul>
    <a href="#/">Monthly</a>
  </div>
</template>

<script>
import API from "../api.js"
import Utils from "../utils.js"

export default {
    mounted(){
        API.getDaily().then((d) => this.expenses = d);
    },
    data(){
        return{
            expenses: []
        }
    },
    methods: {
        fmtPrice(val){
            return Utils.fmtPrice(val)
        }
    }
}
</script>

<style>
</style>