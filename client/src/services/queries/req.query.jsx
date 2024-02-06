import {
  createPatient,
  createStaff,
  deleteUser,
  editUser,
  getAllPatient,
  getAllStaff,
  getDrugData,
  getPatientRecords,
  getProfileById,
  Signin,
} from "../api/req.api";
import { useQuery, useMutation } from "react-query";

// Patients
export const useAllPatient = () => {
  return useQuery(["patients"], getAllPatient);
};

export const useProfileById = (userId, onSuccess, onError) => {
  return useQuery(["profile", userId], () => getProfileById(userId), {
    onSuccess,
    onError,
  });
};

export const useAllStaff = () => {
  return useQuery(["staff"], getAllStaff);
};

export const usePatientRecord = (userId) => {
  return useQuery(["Patint-record", userId], () => getPatientRecords(userId));
};

export const useDrugData = () => {
  return useQuery(["staff"], getDrugData);
};

export const useCreateStaff = () => {
  return useMutation(createStaff);
};

export const useNusrseRecord = () => {
  return useMutation(createStaff);
};

export const useCreatePatient = () => {
  return useMutation(createPatient);
};

export const UseDeleteUser = (onSuccess, onError) => {
  return useMutation(
    (userId) => {
      deleteUser(userId);
    },
    { onSuccess, onError }
  );
};

export const UseEditUser = (userId) => {
  return useMutation((data) => {
    editUser(userId, data);
  });
};

export const UseSignin = (onSuccess, onError) => {
  return useMutation(Signin, { onSuccess, onError });
};