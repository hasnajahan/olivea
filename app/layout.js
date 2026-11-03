import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cartprovider from "./Context/CartContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "OLIVÉA",
    description: "A softer kind of luxury",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-scroll-behavior="smooth"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body>
                <Cartprovider>
                    {children}
                    <Footer />
                </Cartprovider>
            </body>
        </html>
    );
}