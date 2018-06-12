<template>
    <li>
        <span>{{expense.name}}</span>
        <span>{{fmtPrice(expense)}}</span>            
        <button @click="$emit('remove', expense.name)">
        X
        </button>
    </li>
</template>

<script>
import Utils from "../utils.js"

export default{
    props:{
        expense:{
            type: Object,
            required: true
        }
    },
    methods:{
        fmtPrice(val){
            return Utils.fmtPrice(val)
        }
    }
}
</script>

<style>
</style>