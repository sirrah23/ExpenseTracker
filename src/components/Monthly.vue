<template>
  <div id="monthly">
    <h1>Monthly Expenses</h1>
    <form @keydown.enter="addExpense">
      <BaseInputText v-model="newExpenseName" placeholder="Expense Name"></BaseInputText>
      <BaseInputText v-model="newExpenseAmount" placeholder="Expense Amount"></BaseInputText>
    </form>
    <ul id="expense-list-monthly">
      <li class="expense" v-for="expense in expenses">
        <span class="expense-name">{{ expense.name }}:</span> 
        <span class="expense=price">{{ fmtPrice(expense) }}</span>
      </li>
    </ul>
    <a href="/#/daily">Daily</a>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue"
import API from "../api.js"
import Utils from "../utils.js"

export default {
  components:{
    BaseInputText
  },
  mounted(){
    API.getMonthly().then((d) => this.expenses = d);
  },
  data() {
    return {
      newExpenseName: "",
      newExpenseAmount: "",
      expenses: []
    };
  },
  methods: {
    addExpense(){
      //TODO: Add validations and cleanup
      this.expenses.push({
        name: this.newExpenseName,
        dollars: this.newExpenseAmount.split('.')[0],
        cents: this.newExpenseAmount.split('.')[1]
      })
      this.newExpenseName = "";
      this.newExpenseAmount = "";
    },
    fmtPrice(val){
      return Utils.fmtPrice(val)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #expense-list{
    list-style-type: none;
  }

  .expense-name{
    width: 150px;
  }

</style>
