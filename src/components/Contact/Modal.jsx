import { IoMdClose } from "react-icons/io";
const Modal = ({ setShow }) => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-20">
      <section className="bg-white w-full h-full p-10 flex flex-col gap-5 items-center relative">
        <section className="flex justify-end items-center absolute right-10">
          <button
            className="border p-2 !rounded-full cursor-pointer"
            onClick={() => setShow(false)}
          >
            <IoMdClose />
          </button>
        </section>
        <h2 className="text-2xl text-center mt-20">Get in Touch</h2>
        <form
          className="flex flex-col gap-5 mt-5 w-1/3"
          onSubmit={(e) => console.log(e)}
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2"
            required
          />
          <textarea placeholder="Message" className="border p-2" />
          <button className="border p-2 !rounded-full cursor-pointer bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white">
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default Modal;
