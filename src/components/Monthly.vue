<template>
  <div id="monthly">
    <h1>Monthly Expenses</h1>
    <form @keydown.enter="addExpense">
      <BaseInputText v-model="newExpenseName" placeholder="Expense Name"></BaseInputText>
      <BaseInputText v-model="newExpenseAmount" placeholder="Expense Amount"></BaseInputText>
    </form>
    <ul id="expense-list">
      <li class="expense" v-for="expense in expenses">
        <span class="expense-name">{{ expense.name }}:</span> 
        <span class="expense=price">{{ fmtPrice(expense) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue"

export default {
  components:{
    BaseInputText
  },
  data() {
    return {
      newExpenseName: "",
      newExpenseAmount: "",
      expenses: [
        {
          name: "Digital Ocean",
          dollars: 5,
          cents: 0,
        },
        {
          name: "CrunchyRoll",
          dollars: 6,
          cents: 50,
        }
      ]
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
    fmtPrice({dollars, cents}){
      return `\$${dollars}.${cents.toString().padStart(2, '0')}`
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
