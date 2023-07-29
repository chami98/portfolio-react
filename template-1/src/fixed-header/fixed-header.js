import { Col, Container, Row } from 'react-bootstrap'
import './fixed-header.css'

export const FixedHeader = () => {

    return <div className="fixed-header-container">
        <div className="fixed-header">
        <a>About</a>
        <a>Projects</a>
        <a>Media</a>
        <a>Experience</a>
        <a>Awards</a>
        <a>Testimonials</a>
       
        </div>
       
    </div>
}