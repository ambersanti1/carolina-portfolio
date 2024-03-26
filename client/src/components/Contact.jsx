import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from "../utils/helpers";
import Links from "./Links";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://carolina-portfolio-3706c48e8bfe.herokuapp.com/api/contact",
        {
          name,
          email,
          message,
        }
      )
      .then((response) => {
        if (response.data.status) {
          toast.success("Message successfully sent", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
        } else {
          toast.error("Couldn't sent message", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        toast.error("Email is invalid", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: false,
          theme: "colored",
        });
      }
    } else {
      if (!e.target.value.length) {
        toast.error(`A ${e.target.name} is required.`, {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeButton: false,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <div id="contact-sec" class="contact-section">
          <form
            class="form"
            action=""
            onSubmit={handleSubmit}
            onBlur={handleChange}
            >
            <h2>Contact me</h2>
            <input
              class="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              class="correo"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
            <textarea
              class="mensaje"
              name="message"
              id=""
              placeholder="Message"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>
        <Links />
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
