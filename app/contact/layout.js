import React from "react";
import Header from "../components/Header/Header";

export default function ContactLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}