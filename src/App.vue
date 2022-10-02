<template>
  <div>{{msg}}</div>
  <input v-model="msg" type="text">
  <button @click="increment"> {{count}} </button>
  <button @click="increase('a')"> {{numbers.a}} </button>
  <button @click="increase('b')"> {{numbers.b}} </button>
  <p> {{total}}</p>
  <button @click="c++"> {{ c }} </button>
  <button @click="d++"> {{ d }} </button>
  <div
  v-for="number in history"
  :key="number"
  >
  {{number}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref , Ref, reactive, computed, watch, watchEffect} from 'vue';
import {useNumbers} from './composable/useNumbers'

export default defineComponent({
  name: 'App',
  setup() {
     const msg = ref('Hello world') 
     let count: Ref<number> = ref(0)

      let numbers: any = reactive({
        a: 1,
        b: 2
      })

      const increase = (n: string) =>{
        numbers[n]++
      }

      let {c,d,totalCD,history

      } = useNumbers()


      const increment = () => {
        count.value++
     }

      watch(numbers, (newVal, oldVal)=>{
        console.log(`${oldVal.a} -> ${newVal.a}`)
      })

      watch(numbers, (newVal)=> {
        console.log(`a: ${newVal.a} b: ${newVal.b}`)
      }, {
        immediate: true
      }
      )

      watchEffect(()=>{
        console.log(numbers.a)
      })

      const total = computed (() => {
        return count.value + numbers.a + numbers.b
      })
     return{
      msg,
      total,
      count,
      increment,
      increase,
      numbers,
      c,
      d,
      totalCD,
      history
     }
  },
});
</script>

<style>
</style>
