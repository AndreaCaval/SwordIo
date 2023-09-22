const API_KEY = "pk_vY253iDWNfsd4AIfBDSgncRenqBf"

const user_info = {
    "integrations": {
        "discord": {
            "id": "326811663732834305",
            "username": "cava",
            "discriminator": "6755",
            "avatar": "https://cdn.discordapp.com/avatars/326811663732834305/a_5112a0684bc0e4bde28b8e1ad063f46c.gif"
        }
    },
    "canceled_at": null,
    "subscription": null,
    "delinquent": false,
    "invite": null,
    "raffle": null,
    "affiliate": null,
    "coupon": null,
    "eth_address": null,
    "sol_public_key": null,
    "email": "andreacava@gmail.com",
    "unlocked": false,
    "status": "active",
    "cancel_at": null,
    "release": null,
    "metadata": {
        "hwid": "nbegflnkmapjfjaodjmidheeccicdnbb"
    },
    "user": {
        "email_verified": false,
        "stripe_account": null,
        "telegram": null,
        "discord": {
            "id": "326811663732834305",
            "username": "cava",
            "discriminator": "6755",
            "avatar": "5112a0684bc0e4bde28b8e1ad063f46c"
        },
        "admin": false,
        "banned": false,
        "created": 1612703756804,
        "email": "andreacava@gmail.com",
        "last_login": 1651426085162,
        "twitter": {
            "id": "1176141936786325504",
            "username": "andreacavalluz1"
        },
        "avatar": "https://cdn.discordapp.com/avatars/326811663732834305/5112a0684bc0e4bde28b8e1ad063f46c.png",
        "stripe_acccount": null,
        "seller": false,
        "google": null,
        "eth_wallet": "0x34te4jk6fwbjkehefiowhi2344",
        "username": "cava",
        "id": "aOzmsfsuaTwe3j3gdVR6GOYfy-q"
    },
    "plan": {
        "integrations": {
            "telegram": null,
            "discord": {
                "past_due_action": "none",
                "guild": "726167965182984253",
                "roles": [
                    "735588648501903411"
                ],
                "cancel_action": "kick"
            }
        },
        "transfers": {
            "enabled": false,
            "cooldown_days": 0,
            "product": null
        },
        "waitlist": {
            "enabled": false,
            "trial_period_days": null,
            "initial_fee_amount": null,
            "questions": [
                "Why do you want to join Owner?"
            ],
            "collect_payment_method": false
        },
        "top_ups": {
            "enabled": false,
            "discounts": []
        },
        "image": null,
        "description": null,
        "rental_period_days": null,
        "nft": null,
        "files": [],
        "active": true,
        "roles": [
            "735588648501903411"
        ],
        "recurring": null,
        "name": "Owner",
        "type": "free",
        "amount": 0,
        "currency": "usd",
        "account": "HT68btnA4-3blj4ww_7fp",
        "created": 1612714836935,
        "product": "prod_Iu48GbzANXG0ef",
        "price": "price_1IIG01D1WHfX7ZIjMMqUIYyp",
        "options": {
            "roles": [
                "735588648501903411"
            ],
            "guild": "726167965182984253",
            "cancel_action": "kick"
        },
        "recipe": "discord",
        "links": [],
        "id": "pO4NjJYFKUU2JqpQQqVk3"
    },
    "account": "HT6sadsf4a4-3blj4ww_7fp",
    "key": "29K9-F0XM-07H8-N59Q",
    "created": 1612715710005,
    "payment_processor": "stripe",
    "id": "E6wXF453fd_zabkhEU82U7"
}

export const retrieveLicense = async(key) => {
    // try {
    //     const res = await fetch(`https://api.hyper.co/v6/licenses/${key}`, {
    //         headers: {
    //             'Authorization': `Bearer ${API_KEY}`,
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     if (res.status === 200) {
    //         const user = await res.json()
    //         return user
    //     } else {
    //         throw new Error('License not found')
    //     }
    // } catch {
    //     throw new Error('License not found')
    // }

    return user_info
}