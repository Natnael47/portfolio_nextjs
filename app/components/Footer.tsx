import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MagicButton from "@/components/ui/MagicButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Send, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* Background grid visible in light & dark */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="background grid"
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-white/10 dark:from-black/80 dark:to-black pointer-events-none" />
      </div>

      {/* Header content */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Contact Form Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <MagicButton
              title="Let's get in touch"
              icon={<Send />}
              position="right"
            />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:max-w-md md:max-w-2xl overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold">
                Send a Message
              </SheetTitle>
              <SheetDescription>
                I'd love to hear from you! Fill out the form below and I’ll be
                in touch.
              </SheetDescription>
            </SheetHeader>
            <form className="grid gap-6 py-6">
              <div className="grid gap-2 px-5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2 px-5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2 px-5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={6} />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      {/* Bottom copyright & icons */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 px-4">
        <p className="md:text-base text-sm text-white-300">
          © 2024 Adrian Hajdin. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            {
              href: "https://github.com",
              icon: <Github size={20} />,
              label: "GitHub",
            },
            {
              href: "https://twitter.com",
              icon: <Twitter size={20} />,
              label: "Twitter",
            },
            {
              href: "mailto:contact@jsmastery.pro",
              icon: <Mail size={20} />,
              label: "Email",
            },
          ].map(({ href, icon, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 dark:border-white/10 bg-black/10 dark:bg-white/10 backdrop-blur-md transition hover:scale-105"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
