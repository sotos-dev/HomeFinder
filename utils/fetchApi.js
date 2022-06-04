import axios from "axios"

export const baseURL = "https://zoopla.p.rapidapi.com/"

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
      "X-RapidAPI-Key": "edcd01ebeamshbfc4cb2edd4a284p113fbfjsn345b0b1f2c8a",
    },
  })
  return data
}
