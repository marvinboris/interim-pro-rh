import { Button, Logo } from "@/components";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Whatsapp from "./icons/whatsapp";
import { Call, Location, Message } from "iconsax-react";
import FooterTitle from "./title";
import { Link } from "react-router-dom";
import { Send } from "react-iconly";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 text-white divide-y divide-neutral-200">
      <div className="container mx-auto flex gap-10 pt-9 pb-14">
        <div className="flex-1">
          <Logo white />

          <div className="flex mt-14 gap-1.5">
            <Location className="size-6" />
            <div>
              <div className="font-bold">Douala - Cameroun</div>

              <div className="mt-2">
                Situé au carrefour Douala Bercy
                <br />
                BP : 15170 Akwa Douala
              </div>
            </div>
          </div>
        </div>
        <div>
          <FooterTitle>Important links</FooterTitle>
          <div className="mt-7 *:flex *:items-center *:gap-2 *:before:h-px *:before:w-2 *:before:bg-white *:before:rounded-full">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
          </div>
        </div>
        <div className="flex-1">
          <div>
            <FooterTitle>Contact us</FooterTitle>
            <div className="mt-7">
              <div className="flex items-center gap-2.5">
                <Message className="size-5" />
                <a href="mailto:contact@interimprorh.com">
                  contact@interimprorh.com
                </a>
              </div>
              <div className="flex gap-2.5 mt-3.5">
                <Call className="size-5" />
                <div>
                  <a href="tel:+237657878787">+237 657 87 87 87</a>
                  <br />
                  <a href="tel:+237681618161">+237 681 61 81 61</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <FooterTitle>Subscribe to newsletter</FooterTitle>
            <div className="flex items-center p-2.5 gap-3.5 rounded-xl bg-white/20 mt-4">
              <Message className="size-5 ml-1" />

              <input
                placeholder="Your e-mail"
                className="p-0 bg-transparent border-0 outline-none"
              />

              <Button size="sm">
                <span>Subscribe</span>
                <Send size={24} />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <FooterTitle>Find us on Gmaps</FooterTitle>

          <div className="mt-7">
            <iframe
              className="h-40 w-full bg-white rounded-2xl"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto flex items-center py-4">
          <div className="*:font-medium">
            <span>Copyright 2024 |</span> . All Rights Reserved <span>|</span>{" "}
            Made with love by <span>Briluce Services</span>
          </div>

          <div className="ml-auto flex gap-3.5 *:rounded-full *:size-11 *:bg-primary *:flex *:items-center *:justify-center *:*:size-6">
            <div>
              <Facebook />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <Whatsapp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
