import React from 'react';
import './testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <svg
                    className="testimonials-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                >
                    <path d="M8.77971 0.967285C9.58766 5.03219 12.8403 8.21062 17 9.00006C12.8403 9.78961 9.58774 12.9681 8.77987 17.033C7.97192 12.9681 4.7193 9.78968 0.55957 9.00023C4.71928 8.2107 7.97185 5.0322 8.77971 0.967285Z" fill="#99B9FF" />
                </svg>
                <p className="testimonials-header-text">testimonials</p>
                <svg
                    className="testimonials-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                >
                    <path d="M8.77971 0.967285C9.58766 5.03219 12.8403 8.21062 17 9.00006C12.8403 9.78961 9.58774 12.9681 8.77987 17.033C7.97192 12.9681 4.7193 9.78968 0.55957 9.00023C4.71928 8.2107 7.97185 5.0322 8.77971 0.967285Z" fill="#99B9FF" />
                </svg>
            </div>

            <div className="testimonials-container">
                <div className="testimonials-card">
                    <div className='testimonials-card-text-container'>
                        <p className='testimonials-card-text' >Alex's design prowess is unmatched, and his ability to translate complex ideas into visually appealing products is awe-inspiring.</p>
                    </div>

                    <div className='testimonials-center-container'>
                        <img className='testimonials-image' src='https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo-1200-80.jpg' />

                        <div className='testimonials-person-container'>
                            <p className='testimonials-person-name-text'>emily Roberts
                            </p>
                            <p className='testimonials-person-designation-text' > CEO of NextTech Solutions</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-card">
                    <div className='testimonials-card-text-container'>
                        <p className='testimonials-card-text' >Alex's design prowess is unmatched, and his ability to translate complex ideas into visually appealing products is awe-inspiring.</p>
                    </div>

                    <div className='testimonials-center-container'>
                        <img className='testimonials-image ' src='https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo-1200-80.jpg' />

                        <div className='testimonials-person-container'>
                            <p className='testimonials-person-name-text'>emily Roberts
                            </p>
                            <p className='testimonials-person-designation-text' > CEO of NextTech Solutions</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials-card">
                    <div className='testimonials-card-text-container'>
                        <p className='testimonials-card-text' >Alex's design prowess is unmatched, and his ability to translate complex ideas into visually appealing products is awe-inspiring.</p>
                    </div>

                    <div className='testimonials-center-container'>
                        <img className='testimonials-image ' src='https://cdn.mos.cms.futurecdn.net/THCiUmVZcgxHodGCK3EyYo-1200-80.jpg' />

                        <div className='testimonials-person-container' >
                            <p className='testimonials-person-name-text'>emily Roberts
                            </p>
                            <p className='testimonials-person-designation-text' > CEO of NextTech Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
