const API_KEY = "pk_vY85vQ0iDWNhBqYqLAIfBDSgncRenqBf"

export const retrieveLicense = async(key) => {
    try {
        const res = await fetch(`https://api.hyper.co/v6/licenses/${key}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        })
        if (res.status === 200) {
            const user = await res.json()
            return user
        } else {
            throw new Error('License not found')
        }
    } catch {
        throw new Error('License not found')
    }
}