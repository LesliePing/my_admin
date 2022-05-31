<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { computed, onMounted, ref, watch } from "vue";
import type { Todo } from "@/types/todo";

let id = 0; // 待选todo id
let idwatch: any = ref(0);
const newTodo = ref<string>("");
const hideCompleted = ref<boolean>(false); // 控制是否显示已完成todo
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);
const p: any = ref(null);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});
function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
}
function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
onMounted(() => {
  p.value.textContent = "Mounted!";
});
function changeText() {
  idwatch.value++;
}
function consoleP(newNumber: number, oldNumber: any) {
  console.log(p.value.textContent, newNumber, oldNumber);
}
watch(idwatch, consoleP);
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Computed</template>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo" />
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "Hide Completed" }}
    </button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Life Cycle And Refs</template>
    <p ref="p">Hello</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Watch</template>
    <button @click="changeText">Change Text</button>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>
  </WelcomeItem>
</template>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
