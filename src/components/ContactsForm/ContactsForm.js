import React from 'react';
import "./ContactsForm.scss";
import emailjs from '@emailjs/browser';

function ContactsForm() {

    const sendEmail = (e) => {
        e.preventDefault();
        alert('Запитання відправлено')
        emailjs.sendForm('service_v3bkrmm', 'template_iuib7z8', e.target, 'pgEkmsiXMl-QMTrXt');

    }

    return (

        <form className='contacts-form' onSubmit={sendEmail}>
            <div className='contacts-form-inputs'>
                <input className='contacts-form-input contacts-form-name' type='text' name='name' placeholder="Ваше ім'я"></input>
                <input className='contacts-form-input contacts-form-email' type='email' name='email_from' id='emailFrom' placeholder="Ваш Email" required></input>
            </div>
            <textarea className='contacts-form-input contacts-form-text_area' name='message' id='message' placeholder="Текст запитання"></textarea>
            <button className='contacts-form-button' type='submit'>Відправити</button>
        </form>

    );
}

export default ContactsForm;