export const HandleExpires = (err) => {
    console.log(err)
    if (err.response.status === 401 ){
        localStorage.removeItem("token")
        window.location = "/login"
    }
}

