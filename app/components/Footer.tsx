"use client";

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
import { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "502f6be7-fd08-43db-b36e-c374f5726fa6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you soon.",
      });
      event.currentTarget.reset();
      setResult("");
    } else {
      toast.error("Something went wrong", {
        description: data.message,
      });
      setResult(data.message);
    }
  };

  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="background grid"
          className="w-full h-full object-cover opacity-40 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-white/10 dark:from-black/80 dark:to-black pointer-events-none" />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <MagicButton
          title="Let's get in touch"
          icon={<Send />}
          position="right"
        />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
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
            <form className="grid gap-6 py-6" onSubmit={onSubmit}>
              <div className="grid gap-2 px-5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="grid gap-2 px-5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2 px-5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={6}
                  required
                />
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

      {/* Footer bottom */}
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
