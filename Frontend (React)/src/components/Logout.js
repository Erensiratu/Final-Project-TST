import React, { useState } from "react";

const Logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    return (
        <div className="">You are logged out...</div>
    )
};

export default Logout;
