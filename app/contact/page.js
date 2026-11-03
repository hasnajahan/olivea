import React from "react";
import Link from "next/link";
import "./contact.css";

export default function Contact() {
    return (
        <main className="contact-page">

            {/* Contact hero */}
            <section className="contact-hero">
                <p className="contact-eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>

                <h1>
                    Let's Start a
                    <br />
                    <span>Conversation.</span>
                </h1>

                <p className="contact-hero-description">
                    Questions, thoughts, or simply a little hello.
                    Whatever is on your mind, we're here for you.
                </p>
            </section>

            {/* Contact content */}
            <section className="contact-content">

                {/* Contact information */}
                <div className="contact-information">
                    <p className="contact-section-label">GET IN TOUCH</p>

                    <h2>
                        We're here to
                        <br />
                        <em>help.</em>
                    </h2>

                    <p className="contact-info-description">
                        Your experience matters to us. Reach out with
                        questions about our collection, your orders,
                        or anything else we can help you with.
                    </p>

                    <div className="contact-detail">
                        <span className="contact-detail-number">01</span>
                        <div>
                            <h3>Customer Care</h3>
                            <p>We're happy to help with your questions.</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-number">02</span>
                        <div>
                            <h3>Orders & Products</h3>
                            <p>Need help with a product or your order?</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span className="contact-detail-number">03</span>
                        <div>
                            <h3>Stay Connected</h3>
                            <p>We look forward to hearing from you.</p>
                        </div>
                    </div>

                    <div className="contact-note">
                        <span>OLIVÉA</span>
                        <p>A softer kind of luxury.</p>
                    </div>
                </div>

                {/* Contact form */}
                <div className="contact-form-container">
                    <div className="contact-form-heading">
                        <p className="contact-section-label">SEND US A NOTE</p>
                        <h2>How can we help?</h2>
                        <p>
                            Fill in the details below and leave us a message.
                        </p>
                    </div>

                    <form className="contact-form">
                        <div className="contact-form-row">
                            <div className="contact-field">
                                <label htmlFor="contact-name">Your Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">Email Address</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-subject">Subject</label>
                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                placeholder="What is your message about?"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">Your Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                required
                            />
                        </div>

                        <button type="button" className="contact-submit-button">
                            SEND YOUR MESSAGE
                            <span>→</span>
                        </button>

                        <p className="contact-form-note">
                            Thank you for choosing OLIVÉA. We appreciate you
                            being here.
                        </p>
                    </form>
                </div>
            </section>

            {/* Closing section */}
            <section className="contact-closing">
                <p className="contact-section-label">A NOTE FROM OLIVÉA</p>

                <h2>
                    Good things begin
                    <br />
                    with a <em>hello.</em>
                </h2>

                <Link href="/products" className="contact-shop-link">
                    EXPLORE OUR COLLECTION
                </Link>
            </section>

        </main>
    );
}