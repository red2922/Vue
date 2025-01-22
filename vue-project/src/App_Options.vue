<script>
//Options API

export default {
  data() {
    return {
      name: " John Impact",
      status: "active",
      tasks: ["TaskOne", "Task Two", "Task Three"],
      link: "https://google.com",
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

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
