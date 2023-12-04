export const createQr = (company_id: number | null = null) => (dispatch: any) => {
    try {
        return fetch(`${URL}/qr/create_qr`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset-utf-8",
                    // authorization: storage.get(ACCESS_TOKEN) ?? '',
                },
                // @ts-ignore
                body: JSON.stringify({
                    // login: Number(String(storage.get(LOGIN_ACCOUNT)).replace(/\+/g, '')),
                    // company_id: company_id ? Number(company_id) : null,
                }),
            })
            .then((result) => result.json())
            .then((resp) => {
                // if (resp.status === 'success') {
                //     dispatch(addQr({ qr_link: resp.qr_link }))
                // }
                // return resp
            })
            .catch(e => console.error(e))
    } catch (error) {
        console.error(error);
    }
}