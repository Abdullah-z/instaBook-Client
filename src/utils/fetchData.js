<<<<<<< HEAD
import axios from "axios";
import { BASE_URL } from "./config";
// Use environment variable if exists, otherwise fallback to /api (for old proxy behavior)

export const getDataAPI = async (url, token) => {
  const res = await axios.get(`${BASE_URL}/${url}`, {
=======
import axios from 'axios';

export const getDataAPI = async (url,token) => {
    const res = await axios.get(`/api/${url}`,{
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`/api/${url}`, post, {
>>>>>>> 2cf75d361070397fbe1a829029dd838ca87e7c73
    headers: { Authorization: token },
  });
  return res;
};

<<<<<<< HEAD
export const postDataAPI = async (url, post, token) => {
  const res = await axios.post(`${BASE_URL}/${url}`, post, {
    headers: { Authorization: token || "" }, // token may be undefined
  });
  return res;
};

export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`${BASE_URL}/${url}`, post, {
=======
export const putDataAPI = async (url, post, token) => {
  const res = await axios.put(`/api/${url}`, post, {
>>>>>>> 2cf75d361070397fbe1a829029dd838ca87e7c73
    headers: { Authorization: token },
  });
  return res;
};

export const patchDataAPI = async (url, post, token) => {
<<<<<<< HEAD
  const res = await axios.patch(`${BASE_URL}/${url}`, post, {
=======
  const res = await axios.patch(`/api/${url}`, post, {
>>>>>>> 2cf75d361070397fbe1a829029dd838ca87e7c73
    headers: { Authorization: token },
  });
  return res;
};

<<<<<<< HEAD
export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`${BASE_URL}/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
=======

export const deleteDataAPI = async (url, token) => {
  const res = await axios.delete(`/api/${url}`, {
    headers: { Authorization: token },
  });
  return res;
};
>>>>>>> 2cf75d361070397fbe1a829029dd838ca87e7c73
