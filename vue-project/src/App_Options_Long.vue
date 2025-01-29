<script>
//Composition Long way
import { ref } from "vue";
export default {
  setup() {
    const name = ref("Ari Impact");
    const status = ref("active");
    const tasks = ref(["Task One", "Task Two", "Task Three"]);
    const link = "https://google.com";

    const toggleStatus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };

    return {
      name,
      status,
      tasks,
      link,
      toggleStatus,
    };
  },
};
</script>

<!--Everything under here will stay the same using either Composition or -->
<template>
  <h1>Vue Jobs</h1>
  <h2>{{ name }}</h2>
  <!--Using some directives-->
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!--Bind is :href is super good when the link or data is dynamic-->
  <a :href="link">Click for Google</a>

  <button @click="toggleStatus">Change Status</button>
</template>
