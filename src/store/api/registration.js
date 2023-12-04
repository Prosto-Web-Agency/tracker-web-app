import axios from "axios";

const url = 'http://v2224385.hosted-by-vdsina.ru/'

export const registrationApi = {
    getTokenRequest(id) {
        return axios.get(url + `gettoken`, 
        {
            id: id
        })
            .then(response => {
                console.log(response)
                // if (response.data.statusCode === null) {
                //     console.log(response.data)
                //     config = { ...config, headers: { ...config.headers, Authorization: `Bearer ${response.data}` } }
                //     localStorage.setItem('Authorization', JSON.stringify(response.data.value.access_token))
                //     localStorage.setItem('ID', JSON.stringify(response.data.value.userId))
                //     window.location.href = `${urlUser}Office`;
                //     return response
                // } else {
                //     alert('Проверьте правильность введенных данных')
                //     return null
                // }
            })
    },
}