import axios from "axios";

// Export an object containing methods we'll use for accessing the Employee DB
export default {
  // Gets all posts
  getEmployees: function() {
    return axios.get("/api/employees");
  },
  // Gets the post with the given id
  getEmployee: function(id) {
    return axios.get("/api/employees/" + id);
  },
  // Deletes the post with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employees/" + id);
  },
  // Saves a post to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/employees", employeeData);
  }
};