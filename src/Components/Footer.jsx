




import React from "react";

function Footer() {
  return (

    <div className="">
    <div className="w-full overflow-hidden bg-black text-white pt-12 pl-2 pr-2 sm:pl-8  items-center justify-center flex flex-col">
      
      <div className="flex sm:flex-row flex-col">
        <div className="sm:mr-24">
          <h1 className="text-5xl sm:text-start text-center font-bold">
            Our application is beyond <br />
            the wave
          </h1>
          <p className="text-sm mt-8 mb-8 sm:text-start text-center">
            Designed to make it easy for developers using a complex API <br />
            allows you to build innovative solutions{" "}
          </p>

          <h2 className="text-xl font-bold sm:text-start text-center">BLOG DEV</h2>

          <p className="text-sm mt-6 pb-12 sm:text-start text-center">
            Comply with Zatca's e-invoicing mandate for transparent <br />
            operations. Following government rules and laws <br />
            (compliance) is crucial. It ensures smooth business <br />
            practices, avoiding tax-related troubles. Stay compliant <br />
            with us!
          </p>
        </div>
        {/* <div className="flex sm:flex-row flex-col sm:text-lg tex-xs sm:pt-24"> */}
        <div className="flex justify-center items-center sm:text-lg text-xs sm:pt-24">
  <div className="flex sm:flex-row flex-col sm:items-start items-center">
          <div className="flex flex-col sm:items-start items-center sm:mr-12 mr-1">
            <h2 className="sm:text-sm text-lg font-bold pb-2">Compliance.io</h2>
            <p className="text-xs pb-4">Home</p>
            <p className="text-xs pb-4">Product</p>
            <p className="text-xs pb-4">What's New</p>
            <p className="text-xs pb-4">Pricing</p>
            <p className="text-xs pb-4">Business</p>
            <p className="text-xs pb-4">Enterprise</p>
            <p className="text-xs pb-4">Customer Success</p>
          </div>

          <div className="flex flex-col sm:items-start items-center sm:mr-12 mr-2">
            <h2 className="sm:text-sm text-lg font-bold pb-4">About</h2>
            <p className="text-xs pb-4">Company</p>
            <p className="text-xs pb-4">Customers</p>
            <p className="text-xs pb-4">Careers</p>
            <p className="text-xs pb-4">Press</p>
            <p className="text-xs pb-4">Blog</p>
            <p className="text-xs pb-4">Sitemap</p>
            <p className="text-xs pb-4">Pricing FAQ</p>
          </div>

          <div className="flex flex-col sm:items-start items-center sm:mr-12 mr-2">
            <h2 className="sm:text-sm text-lg font-bold pb-4">Resources</h2>
            <p className="text-xs pb-4">Help Center</p>
            <p className="text-xs pb-4">Forum</p>
            <p className="text-xs pb-4">Support</p>
            <p className="text-xs pb-4">Developers & API</p>
            <p className="text-xs pb-4">Partners</p>
            <p className="text-xs pb-4">Events</p>
          </div>

          <div className="flex flex-col sm:items-start items-center sm:mr-12 mr-2">
            <h2 className="sm:text-sm text-lg font-bold pb-4">Learn</h2>
            <p className="text-xs pb-4">ZATCA E-Invoicing</p>
            <p className="text-xs pb-4">ERP Integration</p>
            <p className="text-xs pb-4">ERP Implementation</p>
            <p className="text-xs pb-4">ERP Customization</p>
            <p className="text-xs pb-4">QR Code Generation</p>
          </div>

          <div className="flex sm:items-start items-center flex-col">
            <h2 className="sm:text-sm text-lg font-bold pb-4">Workflow Solutions</h2>
            <p className="text-xs pb-4">Phase-1</p>
            <p className="text-xs pb-4">Phase-2</p>
            <p className="text-xs pb-4">Booklet</p>
          </div>
        </div>

        </div>
      </div>

      
      <div className="flex flex-col w-full items-center justify-center">
          <svg
            width="1201"
            height="3"
            viewBox="0 0 1201 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-8"
          >
            <path
              d="M1.13525 1.40002H1199.86"
              stroke="white"
              strokeWidth="0.8"
              strokeMiterlimit="10"
            />
          </svg>

          <div className="flex flex-row pt-4 pb-4">
            <p className="text-xs sm:pl-32 pl-0">Privacy policy</p>
            <p className="text-xs pl-8">Terms and conditions</p>
            <p className="text-xs pl-8">Support</p>
            <p className="text-xs sm:pl-96 pl-12">Copyright 2023 @ compylance.io</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Footer;








