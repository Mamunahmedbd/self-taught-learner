import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Headset } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Falcon */}
          <div className="space-y-4 max-w-[250px]">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Falcon Logo"
                width={0}
                height={0}
                sizes="100vw,100vh"
                className="w-52 h-auto object-center"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Experience our new platform & Enjoy exciting deals and offers on your day to day.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0 rounded-full bg-gray-100 fill-gray-900 p-1" />
                <span>House #64, Road 13, ASA Center, Uttara, Dhaka-1402</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0 rounded-full bg-gray-100 fill-gray-900 p-1" />
                <span>01728-1497201</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0 rounded-full bg-gray-100 text-gray-900 p-1" />
                <span>falcon@gmail.com</span>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Cancellation & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  My Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Need Support & Download App */}
          <div className="space-y-6">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2 text-gray-400">Need Support?</h3>
              <div className="flex items-center space-x-2 border-2 border-gray-400 rounded-md p-2.5 text-center max-w-[170px]">
                <Headset className="h-5 w-5 flex-shrink-0 text-[#00B795]" />
                <span className="text-sm font-semibold tracking-widest">10724-7814XX</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-semibold mb-2 text-gray-400">DOWNLOAD APP</h3>
              <div className="flex flex-col space-y-2">
                <Link href="#">
                  <Image
                    src="/google-play.png"
                    alt="Google Play"
                    width={0}
                    height={0}
                    sizes="100vw,100vh"
                    className="w-44 h-auto"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/apple.png"
                    alt="App Store"
                    width={0}
                    height={0}
                    sizes="100vw,100vh"
                    className="w-44 h-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3 pt-2">
            <span className="text-sm">Follow us on:</span>
            <Link href="#" className="text-gray-100 hover:text-white">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-100 hover:text-white">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-100 hover:text-white">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-x-4 space-y-4 md:space-y-0">
            <span className="text-sm font-semibold tracking-widest text-gray-400">
              PAYMENTS ACCEPTED
            </span>
            <Image src="/payment.png" alt="Payment methods" width={250} height={25} />
          </div>
          {/* <p className="text-sm text-gray-500 mt-4 md:mt-0">Falcon @2025. Design by xyz</p> */}
        </div>
        <div className="mt-12 pt-6 border-t border-gray-700 flex justify-center items-center">
          <p className="text-sm text-center text-gray-400 mt-4 md:mt-0">
            Falcon @2025. Design by Mamun Ahmed
          </p>
        </div>
      </div>
    </footer>
  );
}
