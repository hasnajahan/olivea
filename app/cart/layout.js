import React from "react";
import Header from "../components/Header/Header";

export default function CartLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}