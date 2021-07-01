import { useState, useEffect } from 'react';
import axios from 'axios';

const baseurl = 'http://ec2-18-117-121-115.us-east-2.compute.amazonaws.com:8080';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = `${baseurl}/api/students`;
  const getById = `${baseurl}/api/students/` + param;
  const search = `${baseurl}/api/students/search/` + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    case 'search': url = search;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + data[0]);
        }
      } catch (error) {
        setData(false);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createStudent(student) {
  return axios.post(`${baseurl}/api/add/student`, student);
}

export function updateStudent(student) {
  console.log('in the upate service');
  return axios.put(`${baseurl}/api/update/student`, student);
}

export function deleteStudent(studentId) {
  return axios.delete(`${baseurl}/api/delete/student/` + studentId);
}




