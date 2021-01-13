import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee DB

import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/employees");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/employees/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/employees/" + id);
  },
  // Saves a post to the database
  savePost: function(employeeData) {
    return axios.post("/api/employees", employeeData);
  }
};