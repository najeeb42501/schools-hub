import React from "react";

function Footer() {
  return (
    <footer className="bg-nightGreen text-white text-center">
      <div className="px-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center  justify-center">
          <div className="md:text-left">
            <img src="logo.png" alt="Website Logo" className="h-10 w-auto" />
            <p className="text-cariGreen text-5xl">
              <strong>SCHOOLS HUB</strong>
            </p>
          </div>

          <div className="">
            <ul className="space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p>Contact Us:</p>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <div className="flex justify-center md:justify-end space-x-2 mt-4">
              <a href="#">
                <img src="facebook.png" alt="Facebook" className="h-4 w-4" />
              </a>
              <a href="#">
                <img src="twitter.png" alt="Twitter" className="h-4 w-4" />
              </a>
              <a href="#">
                <img src="instagram.png" alt="Instagram" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
        © 2023 Copyright:
        <a
          className="text-secondary-800 dark:text-secondary-400"
          href="https://tw-elements.com/"
        >
          Najeebullah Khan
        </a>
      </div>
    </footer>
  );
}

export default Footer;
