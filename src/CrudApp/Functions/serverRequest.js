export async function serverRequest(method, id= '', obj= null) {
    try {
        if (method === 'DELETE') {
            await fetch(`${process.env.REACT_APP_CURRENCY_URL}/${id}`, {
                method: method,
            });
            return;
        }
        if (method === 'POST') {
            await fetch(process.env.REACT_APP_CURRENCY_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(obj),
            });
            return;
        }
        let response = await fetch(process.env.REACT_APP_CURRENCY_URL);
        return await response.json();
    } catch(e) {
        console.log(e);
    }
}
