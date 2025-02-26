import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
const Modal = ({ setShow }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("Shivam");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: from,
          to_name: to,
          message: message,
          reply_to: replyTo,
        },
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message sent!");
          setFrom("");
          setReplyTo("");
          setMessage("");
          console.log("Message sent!");
        },
        (error) => {
          console.log(error);
          console.log("Error sending message, try again!");
        }
      )
      .finally(() => {
        setIsLoading(false);
        setShow(false);
      });
  };

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-20">
      <section className="bg-white dark:bg-black w-full h-full p-10 flex flex-col gap-5 items-center relative ">
        <section className="flex justify-end items-center absolute right-10">
          <button
            className="border p-2 !rounded-full cursor-pointer"
            onClick={() => setShow(false)}
          >
            <IoMdClose />
          </button>
        </section>
        <h2 className="text-2xl text-center mt-20">Get in Touch</h2>
        <form className="flex flex-col gap-5 mt-5 w-1/3" onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            className="border p-2"
            name="from_name"
            disabled={isLoading}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <input
            type="email"
            name="reply_to"
            disabled={isLoading}
            placeholder="Email"
            value={replyTo}
            onChange={(e) => setReplyTo(e.target.value)}
            className="border p-2"
            required
          />
          <textarea
            name="message"
            disabled={isLoading}
            placeholder="Message"
            className="border p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            disabled={isLoading}
            className="border p-2 !rounded-full cursor-pointer bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
          >
            {!isLoading ? "Send" : <CircularProgress />}
          </button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
