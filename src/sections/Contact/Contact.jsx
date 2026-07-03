import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_ab0vvu3",
        "template_4l6afs9",
        form.current,
        "DIkTHrHdP_WW-wKcK"
      )
      .then(() => {
        setStatus("success");
        e.target.reset();

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting me. I'll get back to you as soon as possible.",
          confirmButtonText: "Awesome!",
          confirmButtonColor: "#5b8dee",
          background: "#111827",
          color: "#ffffff",
        });

        setTimeout(() => setStatus(null), 3000);
      })
      .catch((error) => {
        console.error(error);

        setStatus("error");

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            error.text ||
            "Failed to send your message. Please try again later.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#ef4444",
          background: "#111827",
          color: "#ffffff",
        });

        setTimeout(() => setStatus(null), 3000);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <h5 className="section-subtitle">Get In Touch</h5>
      <h2 className="section-title">Contact Me</h2>

      <div className="section-container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start mt-10">

        {/* Contact Cards */}
        <div className="flex flex-col gap-6">

          <article className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(91,141,238,0.15)] group">

            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
              <AiOutlineMail className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
            </div>

            <h4 className="text-[1.1rem] font-bold mb-1 text-white">
              Email
            </h4>

            <h5 className="text-[0.9rem] text-light font-normal mb-4">
              ahmedhanafy289@gmail.com
            </h5>

            <a
              href="mailto:ahmedhanafy289@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[0.85rem] text-primary font-semibold tracking-wide hover:text-accent"
            >
              SEND A MESSAGE
            </a>

          </article>

          <article className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(91,141,238,0.15)] group">

            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
              <RiLinkedinBoxFill className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
            </div>

            <h4 className="text-[1.1rem] font-bold mb-1 text-white">
              LinkedIn
            </h4>

            <h5 className="text-[0.9rem] text-light font-normal mb-4">
              Ahmed_Hanafy
            </h5>

            <a
              href="https://www.linkedin.com/in/ahmed-hanafy41/"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[0.85rem] text-primary font-semibold tracking-wide hover:text-accent"
            >
              SEND A MESSAGE
            </a>

          </article>

          <article className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(91,141,238,0.15)] group">

            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
              <BsWhatsapp className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
            </div>

            <h4 className="text-[1.1rem] font-bold mb-1 text-white">
              WhatsApp
            </h4>

            <h5 className="text-[0.9rem] text-light font-normal mb-4">
              +20 112 264 6249
            </h5>

            <a
              href="https://wa.me/201122646249"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-[0.85rem] text-primary font-semibold tracking-wide hover:text-accent"
            >
              SEND A MESSAGE
            </a>

          </article>

        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-glass"
        >

          <h3 className="text-2xl font-bold text-white">
            Send me a message
          </h3>

          <p className="text-light text-sm">
            Feel free to reach out for collaborations, opportunities, or just a quick hello!
          </p>

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className="w-full p-4 rounded-xl bg-bg/50 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-bg/50 border border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:outline-none"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-xl bg-bg/50 border border-white/10 text-white placeholder:text-white/20 resize-none focus:border-primary focus:outline-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`btn mt-2 font-bold text-lg py-4 rounded-xl transition-all duration-300
            ${
              status === "sending"
                ? "bg-gray-500 cursor-not-allowed text-white/70"
                : "bg-primary hover:bg-accent text-white"
            }`}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;