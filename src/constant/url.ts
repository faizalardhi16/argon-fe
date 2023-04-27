const absenceURL = "http://localhost:4920/api/v1/absence";
const authURL = "http://localhost:4545/api/v1/auth"
const userURL = "http://localhost:4555/api/v1/users"
const profileURL = "http://localhost:4555/api/v1/profile"

export const postCreateAbsence = absenceURL;
export const detailUser = userURL + "/detail"
export const detailAbsence = absenceURL + "/detail"
export const updateProfile = profileURL
export const uploadAvatar = profileURL + "/file"

export {absenceURL, authURL, userURL}