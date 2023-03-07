import React from "react";
import { useLocation, useNavigation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();
    console.log(location);
    return <h1>Добро пожаловать</h1>;
};

export default HomePage;
