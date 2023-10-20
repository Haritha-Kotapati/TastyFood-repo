import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Menu from "../components/Menu";
import UserProfile from "../components/UserProfile";

export default function Home() {
    const [user, setUser] = useState(null); // Set the user state when the user is logged in

    return (
        <div>

            {/* <Navbar /> */}
            <Menu />
            {user ? (
                <UserProfile user={user} /> // Render UserProfile if the user is logged in
            ) : (
                /* Render other content when the user is not logged in */
                <>
                    <Carousal />
                    <Card />
                    <Card />
                </>
            )}
            <Footer />
        </div>
    )
}
