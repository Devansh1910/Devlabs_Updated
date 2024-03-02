import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div className="text-black dark:text-white" style={{ marginBottom: "50px" }}>
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        Platform Terms & Conditions
      </h1>

      <div className="w-[95%] 800px:w-[92%] m-auto py-2 px-3">
        <h2 className={`${styles.title} !text-start pt-2`}>Privacy Policy</h2>

        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              At DevLabs, we are committed to protecting your privacy and
              safeguarding your personal information. This Privacy Policy
              outlines how we collect, use, and protect your data when you visit
              our website or use our services.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Information We Collect</strong>
              <br />
              When you visit DevLabs or register an account, we may collect
              personal information such as your name, email address, and payment
              details. We may also collect non-personal information such as your
              IP address, browser type, and operating system for analytical
              purposes.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>How We Use Your Information</strong>
              <br />
              We use your personal information to provide you with access to our
              courses and services, process payments, communicate with you, and
              improve our platform. We may also use your information for
              marketing purposes, but you can opt out at any time.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Data Security</strong>
              <br />
              We take data security seriously and implement appropriate measures
              to protect your information from unauthorized access, disclosure,
              alteration, or destruction. However, no method of transmission
              over the internet or electronic storage is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Third-Party Links</strong>
              <br />
              Our website may contain links to third-party websites or services
              that are not owned or controlled by DevLabs. We are not
              responsible for the privacy practices or content of these
              websites, so we encourage you to review their privacy policies
              before providing any personal information.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Cookies</strong>
              <br />
              DevLabs uses cookies to enhance your browsing experience and
              analyze website traffic. You can choose to accept or decline
              cookies through your browser settings, but disabling cookies may
              affect your ability to access certain features of our website.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Changes to This Policy</strong>
              <br />
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              on this page. We encourage you to review this Policy periodically
              for updates.
            </p>
          </li>
          <li>
            <p className="py-2 text-[16px] font-Poppins leading-8 whitespace-pre-line">
              <strong>Contact Us</strong>
              <br />
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              <a href="mailto:contact@devlabs.com">contact@devlabs.com</a>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
