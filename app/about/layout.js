import React from "react";
import Header from "../components/Header/Header";

export default function AboutLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}