import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5078d1d191mshc05ee3601ae0af6p1c0f46jsneeba53df0644',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}

