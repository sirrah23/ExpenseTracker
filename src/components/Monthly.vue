<template>
  <div id="monthly">
    <h1>Monthly Expenses</h1>
    <form @keydown.enter="addExpense">
      <BaseInputText v-model="newExpenseName" placeholder="Expense Name"></BaseInputText>
      <BaseInputNumber v-model="newExpenseAmount" placeholder="Expense Amount"></BaseInputNumber>
    </form>
    <ul id="expense-list-monthly">
      <ExpenseItem 
        v-for="expense in expenses"
        :expense="expense"
        @remove="removeExpense"
      />
    </ul>
    <a href="/#/daily">Daily</a>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue"
import BaseInputNumber from "./BaseInputNumber.vue"
import ExpenseItem from "./ExpenseItem.vue"
import API from "../api.js"
import Utils from "../utils.js"

export default {
  components:{
    BaseInputText,
    BaseInputNumber,
    ExpenseItem
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
      const cents = Utils.amountToCents(this.newExpenseAmount);
      console.log(cents);
      if (isNaN(cents)){
        return;
      }
      this.expenses.push({
        name: this.newExpenseName,
        cents
      });
      this.clearInput();
    },
    removeExpense(name){
      this.expenses = this.expenses.filter(e => e.name !== name);
    },
    clearInput(){
      this.newExpenseName = "";
      this.newExpenseAmount = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#expense-list-monthly{
  list-style-type: none;
}

.expense-name{
  width: 150px;
}

</style>
