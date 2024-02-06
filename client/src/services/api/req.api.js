import axios from "axios";

const BaseURI = "https://health-hub-5ola.onrender.com/api/v1";

// Patients
export const getProfileById = (userId) => {
  return axios
    .get(`${BaseURI}/getprofile/${userId}`, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }})
    .then((res) => res.data);
};

export const getAllPatient = () => {
  return axios
    .get(`${BaseURI}/patient/all-profile`, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.data);
};

export const getAllStaff = () => {
  return axios
    .get(`${BaseURI}/allstaffprofile`, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }})
    .then((res) => res.data);
};

export const getPatientRecords = (userId) => {
  return axios
    .get(`${BaseURI}/patient/all-single-record/${userId}`, {
      "headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      } })
    .then((res) => res.data);
};

export const getDrugData = () => {
  return axios
    .get(`${BaseURI}/`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.data); //not complete
};

// create staff
export const createStaff = (data) => {
  return axios.post(`${BaseURI}/regstaff`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
export const createNurseRecord = (data) => {
  return axios.post(`${BaseURI}/nurse/createRecord`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// create patient
export const createPatient = (data) => {
  return axios.post(`${BaseURI}/patient/register`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// create patient
export const deleteUser = (userId) => {
  return axios.delete(`${BaseURI}/deleteprofile/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// edit user
export const editUser = (userId, data) => {
  console.log(userId, data);
  return axios.put(`${BaseURI}/updateprofile/${userId}`, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

// create patient
export const Signin = (data) => {
  return axios.post(`${BaseURI}/login`, data);
};
