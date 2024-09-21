import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className=" bg-gray-100 pt-8 ">
      <div className="flex flex-col md:flex-row p-8 gap-4">
        <ContactInfo />

        <ContactForm />
      </div>

      <section className="map mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4769760355025!2d-0.11411752617866419!3d5.643908932761857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8552fe84a7dd%3A0xffebda784550ffa1!2sSpintex%20Plaza!5e0!3m2!1sen!2sgh!4v1713218330836!5m2!1sen!2sgh"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-80"
        ></iframe>
      </section>
    </section>
  );
};

export default ContactSection;
