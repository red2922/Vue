<script setup>
//Composition Short Way
import { ref, onMounted } from "vue";
const name = ref("Ari Impact");
const status = ref("active");
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const link = "https://google.com";
const newTask = ref();

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log("Error Fetching Tasks");
  }
});
</script>

<!--Everything under here will stay the same using either Composition or -->
<template>
  <h1>Vue Jobs</h1>
  <h2>{{ name }}</h2>
  <!--Using some directives-->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <!--@submit.prevent makes it so you don't need to block the default submit functionality-->
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span> {{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <!--Bind is :href is super good when the link or data is dynamic-->
  <a :href="link">Click for Google</a>

  <button @click="toggleStatus">Change Status</button>
</template>
