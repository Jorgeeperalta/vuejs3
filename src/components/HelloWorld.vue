<template>
  <v-container>
    <v-row class="text-center">
      <h1>desde HelloWorld</h1>
      <v-btn href="/about">iouhgoihoihoi</v-btn>
      <v-btn @click="increment">Count is: {{ count }}</v-btn>
      <v-btn @click="deincrement">Count is: {{ count }}</v-btn>
      <v-label>Desde pinia</v-label>
      <v-btn  @click="counter.increment()">pinia {{ counter.count }}</v-btn>

      <v-btn @click="counter.search()">Buscar</v-btn>
      <p>{{ counter.entries  }}</p>
      <h3>{{ saludoFun(count) }}</h3>
      <v-text-field v-model="A0"></v-text-field>
      <v-text-field v-model="A1"></v-text-field>
      <h2>{{ A2 }}</h2>
    </v-row>
    <br />
    <h2>{{ A3 }}</h2>
    <v-card width="220">
      <div
        @mousemove="onMousemove"
        :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
        class="movearea"
      >
        <p>Move your mouse across this div...</p>
        <p>x: {{ x }}</p>
      </div>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from "vue";
import { useCounterStore } from '@/store/index'
const counter = useCounterStore()



const x = ref(0);
function onMousemove(e) {
  x.value = e.clientX;
}
const A0 = ref(0);
const A1 = ref(1);
//const A2 = ref()
const A2 = computed(() => parseInt(A0.value) + parseInt(A1.value));
const A3 = computed(() => parseInt(A0.value) - parseInt(A1.value));
console.log("computed  A2: " + A2);
// watchEffect(() => {
//   // tracks A0 and A1
//   A2.value = parseInt(A0.value) + parseInt(A1.value)
// })
A0.value = 2;
console.log(A2.value);
// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

function deincrement() {
  count.value--;
}
const saludo = ref(0);
function saludoFun(cont) {
  if (cont % 2 === 0) {
    return (saludo.value = "buen dia");
  } else {
    return (saludo.value = "buenas tardes");
  }
}
// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
  console.log("The initial count is dsfdf", count.value);
});
</script>
