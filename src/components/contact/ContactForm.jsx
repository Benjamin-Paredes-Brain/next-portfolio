"use client"

import { useRef, Suspense, lazy, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import * as Yup from "yup";
const Meteors = lazy(() => import("./Meteors"));

export function ContactForm() {
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [recaptchaKey, setRecaptchaKey] = useState(1);
  const form = useRef();
  const apiCaptchaKey = process.env.NEXT_PUBLIC_CAPTCHA;

  const sendEmail = async (values, { resetForm }) => {
    if (!recaptchaValue) {
      console.error("Please complete the CAPTCHA");
      const Swal = (await import("sweetalert2")).default;
      Swal.fire({
        title: "Error: Complete the captcha",
        icon: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false
      });
      return;
    }

    try {
      const emailjs = await import("@emailjs/browser");
      const apiEmailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
      const apiEmailTemplate = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;
      const apiEmailKey = process.env.NEXT_PUBLIC_EMAIL_KEY;

      await emailjs.sendForm(
        apiEmailService,
        apiEmailTemplate,
        form.current,
        apiEmailKey
      );

      const Swal = (await import("sweetalert2")).default;
      Swal.fire({
        title: "Success",
        icon: "success",
        confirmButtonText: "OK",
        allowOutsideClick: false
      });
      resetForm();
      setRecaptchaValue("");
      setRecaptchaKey(prevKey => prevKey + 1);
    } catch (error) {
      console.error("Failed to send email", error);

      const Swal = (await import("sweetalert2")).default;
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false
      });
    }
  };

  return (
    <div className="relative w-full mx-auto z-10">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-customColor2 to-customColor6 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-customColor1 border border-customColor3 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
            recaptcha: ""
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
          })}
          onSubmit={sendEmail}
        >
          {({ errors, touched }) => (
            <Form ref={form} className="flex flex-col gap-4 text-customColor4 w-full">
              <label htmlFor="name">Name:</label>
              <Field
                className="bg-transparent rounded-md border border-slate-800 p-4"
                type="text"
                id="name"
                name="name"
                placeholder="Jhon Doe"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />

              <label htmlFor="email">Email:</label>
              <Field
                className="bg-transparent rounded-md border border-slate-800 p-4"
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <label htmlFor="message">Message:</label>
              <Field
                as="textarea"
                className="bg-transparent rounded-md border border-slate-800 p-4"
                id="message"
                name="message"
                cols="30"
                rows="4"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />

              <div className="mb-4">
                <ReCAPTCHA
                  key={recaptchaKey}
                  sitekey={apiCaptchaKey}
                  onChange={(value) => setRecaptchaValue(value)}
                />
                {errors.recaptcha && <div className="text-red-500">{errors.recaptcha}</div>}
              </div>

              <button
                type="submit"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-transparent bg-[length:200%_100%] px-6 font-medium text-customColor4 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
        <Suspense fallback={null}>
          <Meteors />
        </Suspense>
      </div>
    </div>
  );
}

export default ContactForm;