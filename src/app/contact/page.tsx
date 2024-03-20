import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact page description",
};
const ContactPage = () => {
  return (
    <div className="grid grid-cols-2 gap-16 justify-between items-center">
      <div>
        <Image
          src="/contact.png"
          alt="contact"
          width={500}
          height={500}
        />
      </div>
      <div>
        <form action="">
          <input
            type="text"
            placeholder="Name and Surname"
          />
          <input
            type="text"
            placeholder="Email Address"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="w-full bg-btn text-text rounded py-3">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
