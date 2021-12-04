import React, { useRef, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";


function Contact() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const [id, setId] = useState(Date.now);

    const [allContacts, setAllContacts] = useState([]); // Collects all properties of objects

    // useEffect(() => {
    //     setAllContacts(JSON.parse(localStorage.getItem('contactus'))||[])
    //     }, [])

    const handleSubmit = (e) => {
        e.preventDefault(); //this is to stop ...

        let obj = {
            id: id,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };
        setAllContacts([...allContacts, obj]);
        // alert(JSON.stringify(obj));
        firstNameRef.current.value = null;
        lastNameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null;
        setId(Date.now); // resettongs
    };
    useEffect(() => {
        localStorage.setItem("contactus", JSON.stringify(allContacts));
    }, [allContacts])
        return (
            <>
                {/* LOCATION SECTION START*/}
            
                <section className='location'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61789.61000724182!2d121.01441097910158!3d14.550533300000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8f195d61cf5%3A0xea9a4f5aa935d718!2s917Ventures!5e0!3m2!1sen!2sph!4v1638065830125!5m2!1sen!2sph"
                        title="maps"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </section>
            
                {/* LOCATION SECTION END */}

                {/* CONTACT DETAILS START */}
            
                <div class="row">
                    <div class="contactus-col">
                        <div>
                            <i class="bi bi-pin-map-fill"></i>
                            <span>
                                <h5>11th W City Center, 7th Ave, Taguig, 1630</h5>
                                <p>Metro Manila, Philippines.</p>
                            </span>
                        </div>
                    </div>

                    <div class="contactus-col">
                        <div>
                            <i class="bi bi-phone-fill"></i>
                            <span>
                                <h5>+63 918 765 4312</h5>
                                <p>Monday to Friday, 9AM - 6PM </p>
                            </span>
                        </div>
                    </div>

                    <div class="contactus-col">
                        <div>
                            <i class="bi bi-envelope-fill"></i>
                            <span>
                                <h5>Send Us an Email</h5>
                                <p>Fill out the form on this page to send us a message right now. </p>
                            </span>
                        </div>
                    </div>
                </div>

                <Typography>
                    <form id="contactus-col" className="contactus-col" onSubmit={handleSubmit}>
                        <h1>Have some questions?</h1>
                        <label name="firstName">First Name</label>
                        <input
                            ref={firstNameRef}
                            id="fName"
                            type="text"
                            name="firstName"
                            required
                        />
                        <br />
                        <br />

                        <label name="lastName">Last Name</label>
                        <input
                            ref={lastNameRef}
                            id="lName"
                            type="text"
                            name="lastName"
                            required
                        />
                        <br />
                        <br />

                        <label name="email">Email Address:</label>
                        <input ref={emailRef} id="eMail" type="email" name="email" require />
                        <br />
                        <br />

                        <label name="msg">Message: </label>
                        <textarea
                            ref={messageRef}
                            id="msg"
                            name="message"
                            placeholder="Your question..."
                            required
                        />
                        <br />
                        <br />

                        <button type="submit" className='submitBtn'>Send Message</button>
                    </form>
                </Typography>
                {/* CONTACT DETAILS SECTION END */}
            </>
        )
    }
export default Contact
