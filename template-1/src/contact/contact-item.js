export const ContactItem = ({
    name,
    email,
    phone,
    designation,
}) => {

    return <div className="contact-item">
        <p className="name">{name} {designation ? `(${designation})` : null} </p>
        <p><a className="phone" href={`tel:${phone}`}>{phone}</a></p>
        
        <p><a className="email" href={`mailto:${email}`}>{email}</a></p>
    </div>
}