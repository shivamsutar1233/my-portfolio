"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from "react";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { CircularProgress } from "@mui/material";
import { iconButtonClass, inputClass, primaryButtonClass } from "@/lib/styles";

type ModalProps = {
  show: boolean;
  onClose: () => void;
};

type Status = "idle" | "success" | "error";

/**
 * Built on the native <dialog> element for free focus-trapping,
 * Escape-to-close, and background inertness, rather than hand-rolling
 * those behaviors. The dialog is always mounted; `show` just drives
 * showModal()/close() so the rest of the app stays in sync via the
 * native "close" event (fired by Escape, backdrop click, or the X button).
 */
const Modal = ({ show, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (show && !dialog.open) {
      dialog.showModal();
      setStatus("idle");
    } else if (!show && dialog.open) {
      dialog.close();
    }
  }, [show]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dialogRef.current?.close();
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: from,
          to_name: "Shivam",
          message: message,
          reply_to: replyTo,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setStatus("success");
          setFrom("");
          setReplyTo("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending message", error);
          setStatus("error");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-modal-heading"
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div
        className="flex h-full w-full items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-8 text-black shadow-2xl dark:border-white/10 dark:bg-black dark:text-white">
          <div className="flex items-center justify-between gap-4">
            <h2 id="contact-modal-heading" className="text-2xl font-semibold tracking-tight">
              Get in Touch
            </h2>
            <button
              type="button"
              className={iconButtonClass}
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          </div>

          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={sendEmail}
            noValidate
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="from_name" className="text-sm">
                Name
              </label>
              <input
                id="from_name"
                type="text"
                className={inputClass}
                name="from_name"
                disabled={isLoading}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="reply_to" className="text-sm">
                Email
              </label>
              <input
                id="reply_to"
                type="email"
                name="reply_to"
                disabled={isLoading}
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                className={inputClass}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                disabled={isLoading}
                className={inputClass}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </div>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-green-700 dark:text-green-400">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-700 dark:text-red-400">
                  Something went wrong sending your message. Please try
                  again.
                </p>
              )}
            </div>

            <button disabled={isLoading} className={`w-full ${primaryButtonClass}`}>
              {!isLoading ? "Send" : <CircularProgress size={20} />}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
