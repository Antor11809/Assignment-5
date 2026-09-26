import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200">

      <div className="container mx-auto px-20 py-12">

        <div className="grid grid-cols-5 gap-12">

          {/* Brand */}
          <div className="col-span-2">

            <img
              src={Logo}
              alt="Dev Stack"
              className="w-36 mb-4"
            />

            <p className="text-gray-400 text-sm leading-6 max-w-md">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-5 text-sm font-medium text-gray-600">
              <span>GitHub</span>
              <span>Twitter</span>
              <span>LinkedIn</span>
            </div>

          </div>


          {/* Product */}
          <div>

            <h3 className="font-semibold text-[#0F172A] mb-4">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <span>Home</span>
              <span>Technologies</span>
              <span>Projects</span>
            </div>

          </div>


          {/* Company */}
          <div>

            <h3 className="font-semibold text-[#0F172A] mb-4">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <span>About</span>
              <span>Contact</span>
              <span>Careers</span>
            </div>

          </div>


          {/* Legal */}
          <div>

            <h3 className="font-semibold text-[#0F172A] mb-4">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-7 flex justify-between text-sm text-gray-400">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;