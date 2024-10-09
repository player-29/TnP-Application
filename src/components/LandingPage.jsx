import React from 'react';
import './LandingPage.css'; // Create a CSS file for custom styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header Section */}
            <header className="header">
                <nav className="navbar">
                    <h1>Training & Placement Cell</h1>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#register">Register</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2>Welcome to the Placement Cell Portal</h2>
                    <p>Your journey to success starts here!</p>
                    <a href="#register" className="cta-button">Register Now</a>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features">
                <div className="feature">
                    <h3>Upcoming Company Drives</h3>
                    <p>Stay updated with all upcoming company recruitment drives, eligibility criteria, and important dates.</p>
                </div>
                <div className="feature">
                    <h3>Student Registration</h3>
                    <p>Register to upload your resume and get notified about placement opportunities.</p>
                </div>
                <div className="feature">
                    <h3>Placement Results</h3>
                    <p>Check the results of the latest placement drives and see which students got placed.</p>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 Placement Cell. All Rights Reserved.</p>
                <div className="social-media">
                    <a href="https://facebook.com">Facebook</a> | 
                    <a href="https://twitter.com">Twitter</a> | 
                    <a href="https://linkedin.com">LinkedIn</a>
                </div>
                <p>Contact Us: placement@college.edu | Phone: +123-456-7890</p>
            </footer>
        </div>
    );
};

export default LandingPage;
