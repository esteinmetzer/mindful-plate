import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },
    getsUser: function (id) {
        console.log("in APIU - find one")
        return axios.get("/api/users/" + id);
    },
    updateUser: function (userData) {
        console.log("in APIU - updating")
        return axios.put("/api/users/", userData)
    },
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function (userData) {
        console.log("in APIU - creating");
        return axios.post("/api/users", userData);

    }


};