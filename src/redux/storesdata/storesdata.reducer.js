import { STORESDATA_ACTION_TYPES } from "./storesdata.type"

const INITIAL_STATE = {
    storesDataMap: {
        CMV2: { aco: false },
        FamousFoxes: { aco: false },
        MagicEden: { aco: false },
        OpenSea: { aco: false },
        Amazon: { aco: false },
        Mediaworld: { aco: false },
        LDLC: {
            aco: false,
            login: false,
            account_email: "",
            account_password: "",
            profile: "",
            country: {
                "value": "off",
                "label": "off"
            },
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        NBB: {
            aco: false,
            login: false,
            account_email: "",
            account_password: "",
            profile: "",
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        Asos: {
            aco: false,
            size: "random",
            multicart: false,
            delay: "0"
        },
        Awlab: {
            aco: false,
            login: false,
            size: "random",
            account: "",
            account_email: "",
            account_password: "",
            multicart: false,
            payment_mode: {
                "value": "CreditCard",
                "label": "CreditCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: "",
            profile_it: "",
            profile_en: "",
            profile_es: ""
        },
        B4B: {
            aco: false,
            size: "random",
            delay: "0",
            mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        Courir: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            payment_mode: false,
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        Footdistrict: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        "Here Store": {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            multicart: false,
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        "Kith EU": {
            aco: false,
            size: "random",
            profile: "",
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        LVR: {
            aco: false,
            login: false,
            size: "random",
            profile: "",
            payment_mode: {
                "value": "PayPal",
                "label": "PayPal"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        Naked: {
            aco: false,
            size: "random",
            delay: "0",
            mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        Office: {
            aco: false,
            size: "random",
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: "",
            delay: "0"
        },
        Offspring: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: "",
            delay: "0"
        },
        Onygo: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            payment_mode: {
                "value": "PayPal",
                "label": "PayPal"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        SNS: {
            aco: false,
            delay: "0",
            size: "random",
            mode: {
                "value": "Fast",
                "label": "Fast"
            }
        },
        Snipes: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            country: {
                "value": "off",
                "label": "off"
            },
            payment_mode: {
                "value": "PayPal",
                "label": "PayPal"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        Solebox: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            payment_mode: {
                "value": "PayPal",
                "label": "PayPal"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        Supreme: {
            aco: false,
            size: "random",
            payment_mode: {
                "value": "CrediCard",
                "label": "CrediCard"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            profile: ""
        },
        Woodwood: {
            aco: false,
            size: "random",
            mode: {
                "value": "Fast",
                "label": "Fast"
            },
            delay: "0"
        },
        Zalando: {
            aco: false,
            login: false,
            size: "random",
            account_email: "",
            account_password: "",
            delay: "0",
            payment_mode: {
                "value": "PayPal",
                "label": "PayPal"
            },
            cart_mode: {
                "value": "Fast",
                "label": "Fast"
            },
            checkout_mode: {
                "value": "Fast",
                "label": "Fast"
            }
        }

    },
}

export const storesDataReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case STORESDATA_ACTION_TYPES.SET_STORES_DATA:
            return { storesDataMap: payload }
        default:
            return state
    }
}