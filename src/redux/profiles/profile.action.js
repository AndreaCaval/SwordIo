import { PROFILES_ACTION_TYPES } from "./profiles.type"
import { createAction } from "../../utils/reducer/reducer.utils";

const randomStringGen = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++)
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    return result.toUpperCase();
}
const addP = (profiles, profilesToAdd) => {
    let newP = {}
    newP[profilesToAdd["ProfileName"]] = profilesToAdd
    return {...profiles, ...newP };
};
const removeP = (profiles, profilesToRemove) => {
    let tempP = profiles
    delete tempP[profilesToRemove]
    return {...tempP }
};
const editP = (profiles, profilesToEdit, oldProfileName) => {
    let newP = {}
    newP[profilesToEdit["ProfileName"]] = profilesToEdit
    let tempP = profiles
    delete tempP[oldProfileName]
    return {...tempP, ...newP }
};
const cloneP = (profiles, profilesToClone) => {
    let newP = {}
    let randomString = ""
    do {
        randomString = randomStringGen(3)
    } while (profilesToClone + randomString in profiles);
    newP[profilesToClone + randomString] = profiles[profilesToClone]
    return {...profiles, ...newP };
};

const updateProfilesReducer = (newProfile) => createAction(PROFILES_ACTION_TYPES.SET_PROFILES, newProfile)

export const importProfiles = (profiles, profilesToImport) => {
    return updateProfilesReducer({...profiles, ...profilesToImport })
}

export const addProfiles = (profiles, profilesToAdd) => {
    const newProfile = addP(profiles, profilesToAdd)
    return updateProfilesReducer(newProfile)
}

export const removeProfiles = (profiles, profilesToRemove) => {
    const newProfile = removeP(profiles, profilesToRemove)
    return updateProfilesReducer(newProfile)
}

export const editProfiles = (profiles, profilesToEdit, oldProfileName) => {
    const newProfile = editP(profiles, profilesToEdit, oldProfileName)
    return updateProfilesReducer(newProfile)
}

export const cloneProfiles = (profiles, profilesToClone) => {
    const newProfile = cloneP(profiles, profilesToClone)
    return updateProfilesReducer(newProfile)
}