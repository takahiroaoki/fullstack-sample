export class AjaxUtil {
    static getData = (url: string): Promise<any> => {
        return fetch(url).then((res: any) => {
            if (!res.ok) {
                throw new Error('NOT OK')
            }
            return res.json()
        }).catch(() => {
            console.log('Error')
        })
    }

    static postData = (url: string, data = {}) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((res: any) => {
            if (!res.ok) {
                throw new Error('NOT OK')
            }
            return res.json()
        }).catch(() => {
            console.log('Error')
        })
    }
}