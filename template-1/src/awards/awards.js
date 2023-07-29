import React from 'react';
import './awards.css'; // Import the newly created CSS file

const Awards = () => {
    return (
        <>
            <div className="awards-section">
                <div className="awards-container">
                    <div className="awards-title">
                        <svg className="awards-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 0C8.78622 4.04828 11.9517 7.2137 16 7.99992C11.9517 8.78623 8.7863 11.9517 8.00008 16C7.21377 11.9517 4.04829 8.7863 0 8.00008C4.04827 7.21378 7.2137 4.04829 7.99992 0Z" fill="#99B9FF" />
                        </svg>
                        <p className="awards-text">Awards</p>
                        <svg className="awards-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 0C8.78622 4.04828 11.9517 7.2137 16 7.99992C11.9517 8.78623 8.7863 11.9517 8.00008 16C7.21377 11.9517 4.04829 8.7863 0 8.00008C4.04827 7.21378 7.2137 4.04829 7.99992 0Z" fill="#99B9FF" />
                        </svg>
                    </div>
                    <div className="awards-content">
                        <p className="awards-heading">Designing Innovation,</p>
                        <div className="awards-subheading">
                            <p className="award-shaping">Shaping</p>
                            <p className="award-the-future">the Future</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="awards-showcase">
                <div className="awards-grid">
                    <div className="award-card">
                        <div className="award-image">
                            <img src='https://sbtheme.sbdev.io/wp-content/uploads/2022/07/UX-Design-awards-THUMB.png' alt="Award" />
                        </div>
                        <div className="award-info">
                            <p className="award-title">Product Design of the Year</p>
                            <p className="award-subtitle">Product Excellence Awards</p>
                        </div>
                    </div>

                    <div className="award-card">
                        <div className="award-image">
                            <img src='https://sbtheme.sbdev.io/wp-content/uploads/2022/07/UX-Design-awards-THUMB.png' alt="Award" />
                        </div>
                        <div className="award-info">
                            <p className="award-title">Product Design of the Year</p>
                            <p className="award-subtitle">Product Excellence Awards</p>
                        </div>
                    </div>

                    <div className="award-card">
                        <div className="award-image">
                            <img src='https://sbtheme.sbdev.io/wp-content/uploads/2022/07/UX-Design-awards-THUMB.png' alt="Award" />
                        </div>
                        <div className="award-info">
                            <p className="award-title">Product Design of the Year</p>
                            <p className="award-subtitle">Product Excellence Awards</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Awards;
