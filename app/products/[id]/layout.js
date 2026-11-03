import React from "react";
import Header from "../../components/Header/Header";

export default function ProductDetailsLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}