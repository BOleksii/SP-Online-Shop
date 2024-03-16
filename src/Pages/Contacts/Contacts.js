import React, { useState } from 'react';
import "./Contacts.scss";
import BelowHeaderBreadcrumbs from '../../components/BelowHeaderBreadcrumbs/BelowHeaderBreadcrumbs';
import { Link } from "react-router-dom";
import contactsLviv from './img/contactsLviv.png';
import contactsKyiv from './img/contactsKyiv.png';
import ContactForm from '../../components/ContactsForm/ContactsForm';

function Contacts() {
    const [selectedCity, setSelectedCity] = useState('Львів');

    return (
        <div className='container'>
            <BelowHeaderBreadcrumbs
                paths={[
                    { label: "Swoosh Store", url: "/" },
                    { label: "Контакти", url: "/contacts" },
                ]}
            />
            <h1 className='contacts-tittle'>Контакти</h1>

            <div>
                <button className='contacts-city-name' onClick={() => setSelectedCity('Львів')}>Львів</button>
                <button className='contacts-city-name' onClick={() => setSelectedCity('Київ')}>Київ</button>
            </div>

            {selectedCity === 'Львів' && (
                <div>
                    <div className='contacts-city'>
                        <div className='contacts-city-flex'>
                        <div className='contacts-methods'>
                            <div className='contacts-address'>

                                <div className='contacts-svg'>
                                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9.18307C7.20914 9.18307 9 7.35123 9 5.09153C9 2.83184 7.20914 1 5 1C2.79089 1 1 2.83184 1 5.09153C1 7.35123 2.79089 9.18307 5 9.18307ZM5 9.18307L5.00001 18" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='contacts-methods-address'>
                                    <p>Адреса:</p>
                                    <Link to="https://maps.app.goo.gl/KaYCd1kYWccv8HMJA" className='contacts-address-link'>вулиця Джохара Дудаєва, 19а, Львів, Львівська область, 79000</Link>
                                </div>
                            </div>

                        </div>

                        <div className='contacts-methods'>
                            <div className='contacts-address'>

                                <div className='contacts-svg'>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.52941 1H5.58824L7.11765 4.82353L5.20588 5.97059C6.02485 7.63117 7.36883 8.97515 9.02941 9.79412L10.1765 7.88235L14 9.41176V12.4706C14 12.8762 13.8389 13.2652 13.552 13.552C13.2652 13.8389 12.8762 14 12.4706 14C9.48767 13.8187 6.67424 12.552 4.5611 10.4389C2.44797 8.32577 1.18127 5.51233 1 2.52941C1 2.12379 1.16113 1.73477 1.44795 1.44795C1.73477 1.16113 2.12379 1 2.52941 1Z" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='contacts-methods-address'>
                                    <p>Телефон:</p>
                                    <Link to="tel:+380681411409" className='contacts-telephone-link'>+380 68 141 14 09</Link>
                                </div>
                            </div>

                        </div>

                        <div className='contacts-methods'>
                            <div className='contacts-address'>

                                <div className='contacts-svg'>
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 2.71429C1 2.25963 1.17559 1.82359 1.48816 1.5021C1.80072 1.18061 2.22464 1 2.66667 1H14.3333C14.7754 1 15.1993 1.18061 15.5118 1.5021C15.8244 1.82359 16 2.25963 16 2.71429M1 2.71429V11.2857C1 11.7404 1.17559 12.1764 1.48816 12.4979C1.80072 12.8194 2.22464 13 2.66667 13H14.3333C14.7754 13 15.1993 12.8194 15.5118 12.4979C15.8244 12.1764 16 11.7404 16 11.2857V2.71429M1 2.71429L8.5 7.85714L16 2.71429" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>

                                <div className='contacts-methods-address'>
                                    <p>Email:</p>
                                    <Link to="mailto:swooshstore@gmail.com" className='contacts-email-link'>swooshstore@gmail.com</Link>
                                </div>
                            </div>

                        </div>

                        <div className='contacts-socials-section'>
                            <p>Ми у соц.мережах:</p>
                            <div className="contacts-socials">
                                <Link to="/" className="contacts-socials-frame">
                                    <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                d="M16.9267 5.00719C16.8854 4.10471 16.7421 3.4884 16.5325 2.94919C16.3197 2.38346 15.9859 1.87103 15.5546 1.44747C15.1312 1.01616 14.6186 0.682256 14.0529 0.469314C13.5136 0.259866 12.8974 0.116654 11.9949 0.0756442C11.0908 0.0342461 10.8019 0.0244141 8.49938 0.0244141C6.19689 0.0244141 5.90801 0.0342461 5.00386 0.0753854C4.10139 0.116654 3.48521 0.259995 2.94587 0.469573C2.38014 0.682385 1.86772 1.01616 1.44417 1.44747C1.01285 1.8709 0.678955 2.38333 0.466015 2.94906C0.256568 3.4884 0.113358 4.10471 0.0723479 5.00706C0.0309501 5.91135 0.0211182 6.2001 0.0211182 8.50261C0.0211182 10.8053 0.0309501 11.0941 0.0723479 11.9983C0.113487 12.9006 0.256827 13.517 0.466403 14.0563C0.679213 14.6219 1.01298 15.1345 1.4443 15.5579C1.86772 15.9892 2.38027 16.323 2.946 16.5358C3.48521 16.7455 4.10151 16.8887 5.00399 16.93C5.90827 16.9712 6.19702 16.9809 8.49951 16.9809C10.802 16.9809 11.0909 16.9712 11.995 16.93C12.8975 16.8887 13.5137 16.7455 14.053 16.5358C15.1918 16.0954 16.0921 15.1951 16.5325 14.0563C16.7422 13.517 16.8854 12.9006 16.9267 11.9983C16.9678 11.094 16.9776 10.8053 16.9776 8.50274C16.9776 6.2001 16.9678 5.91135 16.9267 5.00719ZM15.4005 11.9288C15.3629 12.7555 15.2247 13.2044 15.1087 13.5031C14.8234 14.2426 14.2391 14.8269 13.4996 15.1122C13.2009 15.2282 12.752 15.3664 11.9253 15.4041C11.0315 15.4449 10.7633 15.4535 8.49938 15.4535C6.23531 15.4535 5.96726 15.4449 5.07333 15.4041C4.2468 15.3664 3.79789 15.2282 3.49905 15.1122C3.13087 14.9762 2.79774 14.7595 2.52426 14.4779C2.24263 14.2044 2.02593 13.8714 1.88997 13.5031C1.77393 13.2044 1.63576 12.7555 1.59811 11.9288C1.55736 11.0349 1.5487 10.7667 1.5487 8.50287C1.5487 6.23891 1.55736 5.97086 1.59811 5.07679C1.63589 4.25012 1.77393 3.80121 1.88997 3.5025C2.02593 3.13419 2.24276 2.80106 2.52426 2.52758C2.79774 2.24594 3.13087 2.02925 3.49918 1.89341C3.79789 1.77723 4.2468 1.6392 5.07346 1.60142C5.96739 1.56067 6.23557 1.552 8.49938 1.552C10.7632 1.552 11.0312 1.56067 11.9253 1.60155C12.752 1.6392 13.2007 1.77736 13.4996 1.89341C13.8678 2.02938 14.2009 2.24607 14.4744 2.52758C14.756 2.80106 14.9727 3.13419 15.1085 3.5025C15.2247 3.80121 15.3629 4.25012 15.4005 5.07679C15.4413 5.97073 15.4499 6.23891 15.4499 8.50274C15.4499 10.7667 15.4414 11.0348 15.4005 11.9288Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M8.49925 4.14896C6.09482 4.14896 4.14563 6.09829 4.14563 8.50274C4.14563 10.9072 6.09482 12.8564 8.49925 12.8564C10.9038 12.8564 12.853 10.9072 12.853 8.50274C12.853 6.09829 10.9038 4.14896 8.49925 4.14896ZM8.49925 11.3288C6.93856 11.3287 5.67321 10.0634 5.67334 8.50261C5.67334 6.9419 6.93856 5.67654 8.49938 5.67654C10.0602 5.67667 11.3254 6.9419 11.3254 8.50261C11.3254 10.0634 10.0601 11.3288 8.49925 11.3288Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M14.0424 3.97703C14.0424 4.53888 13.5869 4.99438 13.0251 4.99438C12.4631 4.99438 12.0076 4.53888 12.0076 3.97703C12.0076 3.41505 12.4631 2.95954 13.0251 2.95954C13.5869 2.95954 14.0424 3.41505 14.0424 3.97703Z"
                                                fill="black"
                                            />
                                        </g>
                                    </svg>
                                </Link>

                                <Link to="/" className="contacts-socials-frame">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                    >
                                        <title>telegram</title>
                                        <path
                                            d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                                            opacity="0.8"
                                            fill="black"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        </div>

                        <div className='contacts-photo-container'>
                            <Link to="https://maps.app.goo.gl/rkFVvAi8EDvrAz9S7">
                                <img src={contactsLviv} alt="address" className='contacts-photo'/>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            )}

            {selectedCity === 'Київ' && (
                <div>
                    <div className='contacts-city'>
                        <div className='contacts-city-flex'>
                        <div className='contacts-methods'>
                             <div className='contacts-address'>

                                 <div className='contacts-svg'>
                                     <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M5 9.18307C7.20914 9.18307 9 7.35123 9 5.09153C9 2.83184 7.20914 1 5 1C2.79089 1 1 2.83184 1 5.09153C1 7.35123 2.79089 9.18307 5 9.18307ZM5 9.18307L5.00001 18" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                     </svg>
                                 </div>

                                 <div className='contacts-methods-address'>
                                     <p>Адреса:</p>
                                     <Link to="вул. Антоновича, 19/21, Київ, 01004" className='contacts-address-link'>вул. Антоновича, 19/21, Київ, 01004</Link>
                                 </div>
                             </div>

                         </div>

                         <div className='contacts-methods'>
                             <div className='contacts-address'>

                                 <div className='contacts-svg'>
                                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M2.52941 1H5.58824L7.11765 4.82353L5.20588 5.97059C6.02485 7.63117 7.36883 8.97515 9.02941 9.79412L10.1765 7.88235L14 9.41176V12.4706C14 12.8762 13.8389 13.2652 13.552 13.552C13.2652 13.8389 12.8762 14 12.4706 14C9.48767 13.8187 6.67424 12.552 4.5611 10.4389C2.44797 8.32577 1.18127 5.51233 1 2.52941C1 2.12379 1.16113 1.73477 1.44795 1.44795C1.73477 1.16113 2.12379 1 2.52941 1Z" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                     </svg>
                                 </div>

                                 <div className='contacts-methods-address'>
                                     <p>Телефон:</p>
                                     <Link to="tel:+380672164646" className='contacts-telephone-link'>+380 67 216 46 46</Link>
                                 </div>
                             </div>

                         </div>

                         <div className='contacts-methods'>
                             <div className='contacts-address'>

                                 <div className='contacts-svg'>
                                     <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M1 2.71429C1 2.25963 1.17559 1.82359 1.48816 1.5021C1.80072 1.18061 2.22464 1 2.66667 1H14.3333C14.7754 1 15.1993 1.18061 15.5118 1.5021C15.8244 1.82359 16 2.25963 16 2.71429M1 2.71429V11.2857C1 11.7404 1.17559 12.1764 1.48816 12.4979C1.80072 12.8194 2.22464 13 2.66667 13H14.3333C14.7754 13 15.1993 12.8194 15.5118 12.4979C15.8244 12.1764 16 11.7404 16 11.2857V2.71429M1 2.71429L8.5 7.85714L16 2.71429" stroke="white" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                     </svg>
                                 </div>

                                 <div className='contacts-methods-address'>
                                     <p>Email:</p>
                                     <Link to="mailto:swooshstore@gmail.com" className='contacts-email-link'>swooshstore@gmail.com</Link>
                                 </div>
                             </div>

                         </div>

                         <div className='contacts-socials-section'>
                             <p>Ми у соц.мережах:</p>
                             <div className="contacts-socials">
                                 <Link to="/" className="contacts-socials-frame">
                                     <svg
                                        width="17"
                                        height="17"
                                        viewBox="0 0 17 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                d="M16.9267 5.00719C16.8854 4.10471 16.7421 3.4884 16.5325 2.94919C16.3197 2.38346 15.9859 1.87103 15.5546 1.44747C15.1312 1.01616 14.6186 0.682256 14.0529 0.469314C13.5136 0.259866 12.8974 0.116654 11.9949 0.0756442C11.0908 0.0342461 10.8019 0.0244141 8.49938 0.0244141C6.19689 0.0244141 5.90801 0.0342461 5.00386 0.0753854C4.10139 0.116654 3.48521 0.259995 2.94587 0.469573C2.38014 0.682385 1.86772 1.01616 1.44417 1.44747C1.01285 1.8709 0.678955 2.38333 0.466015 2.94906C0.256568 3.4884 0.113358 4.10471 0.0723479 5.00706C0.0309501 5.91135 0.0211182 6.2001 0.0211182 8.50261C0.0211182 10.8053 0.0309501 11.0941 0.0723479 11.9983C0.113487 12.9006 0.256827 13.517 0.466403 14.0563C0.679213 14.6219 1.01298 15.1345 1.4443 15.5579C1.86772 15.9892 2.38027 16.323 2.946 16.5358C3.48521 16.7455 4.10151 16.8887 5.00399 16.93C5.90827 16.9712 6.19702 16.9809 8.49951 16.9809C10.802 16.9809 11.0909 16.9712 11.995 16.93C12.8975 16.8887 13.5137 16.7455 14.053 16.5358C15.1918 16.0954 16.0921 15.1951 16.5325 14.0563C16.7422 13.517 16.8854 12.9006 16.9267 11.9983C16.9678 11.094 16.9776 10.8053 16.9776 8.50274C16.9776 6.2001 16.9678 5.91135 16.9267 5.00719ZM15.4005 11.9288C15.3629 12.7555 15.2247 13.2044 15.1087 13.5031C14.8234 14.2426 14.2391 14.8269 13.4996 15.1122C13.2009 15.2282 12.752 15.3664 11.9253 15.4041C11.0315 15.4449 10.7633 15.4535 8.49938 15.4535C6.23531 15.4535 5.96726 15.4449 5.07333 15.4041C4.2468 15.3664 3.79789 15.2282 3.49905 15.1122C3.13087 14.9762 2.79774 14.7595 2.52426 14.4779C2.24263 14.2044 2.02593 13.8714 1.88997 13.5031C1.77393 13.2044 1.63576 12.7555 1.59811 11.9288C1.55736 11.0349 1.5487 10.7667 1.5487 8.50287C1.5487 6.23891 1.55736 5.97086 1.59811 5.07679C1.63589 4.25012 1.77393 3.80121 1.88997 3.5025C2.02593 3.13419 2.24276 2.80106 2.52426 2.52758C2.79774 2.24594 3.13087 2.02925 3.49918 1.89341C3.79789 1.77723 4.2468 1.6392 5.07346 1.60142C5.96739 1.56067 6.23557 1.552 8.49938 1.552C10.7632 1.552 11.0312 1.56067 11.9253 1.60155C12.752 1.6392 13.2007 1.77736 13.4996 1.89341C13.8678 2.02938 14.2009 2.24607 14.4744 2.52758C14.756 2.80106 14.9727 3.13419 15.1085 3.5025C15.2247 3.80121 15.3629 4.25012 15.4005 5.07679C15.4413 5.97073 15.4499 6.23891 15.4499 8.50274C15.4499 10.7667 15.4414 11.0348 15.4005 11.9288Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M8.49925 4.14896C6.09482 4.14896 4.14563 6.09829 4.14563 8.50274C4.14563 10.9072 6.09482 12.8564 8.49925 12.8564C10.9038 12.8564 12.853 10.9072 12.853 8.50274C12.853 6.09829 10.9038 4.14896 8.49925 4.14896ZM8.49925 11.3288C6.93856 11.3287 5.67321 10.0634 5.67334 8.50261C5.67334 6.9419 6.93856 5.67654 8.49938 5.67654C10.0602 5.67667 11.3254 6.9419 11.3254 8.50261C11.3254 10.0634 10.0601 11.3288 8.49925 11.3288Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M14.0424 3.97703C14.0424 4.53888 13.5869 4.99438 13.0251 4.99438C12.4631 4.99438 12.0076 4.53888 12.0076 3.97703C12.0076 3.41505 12.4631 2.95954 13.0251 2.95954C13.5869 2.95954 14.0424 3.41505 14.0424 3.97703Z"
                                                fill="black"
                                            />
                                        </g>
                                    </svg>
                                </Link>

                                <Link to="/" className="contacts-socials-frame">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="black"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 24 24"
                                        id="Layer_1"
                                        data-name="Layer 1"
                                    >
                                        <title>telegram</title>
                                        <path
                                            d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"
                                            opacity="0.8"
                                            fill="black"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        </div>

                        <div className='contacts-photo-container'>    
                            <Link to="https://maps.app.goo.gl/rkFVvAi8EDvrAz9S7">
                                <img src={contactsKyiv} alt="address" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className='contacts-questions'>
                <p className='contacts-questions-1'>У вас є питання? Напишіть нам!</p>
                <p className='contacts-questions-2'>Ми з радістю відповімо на всі питання, які вас цікавлять.</p>
            </div>

            <div className='subscribe-contacts-form'>
                <ContactForm />
            </div>

            <p className='contacts-agree'>Натискаючи кнопку "Відправити", я погоджуюсь із <Link to='#'>політикою конфіденційності</Link></p>

        </div>
    );
}

export default Contacts;
