"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-8 space-y-18">
        <Image src="/contact.jpg" alt="contact" width={700} height={200}/>
      </div>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <Card className="shadow-none border-none">
          <CardContent className="p-6 space-y-4">
            <div className="flex gap-2 ">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-center">8T SERVICES LTD</h2>
                <p>
                  Feel free to contact us with any questions or concerns. You can use the form on our website
                  or email us directly. We appreciate your interest and look forward to hearing from you.
                </p>
                <div className="flex flex-col space-y-3 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>11 mountfield road,London,United Kingdom,E66BH</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>07404146448</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>8TSERVICESLTD@GMAIL.COM</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="">
          <CardContent className="p-4 space-y-6">
            <h2 className="text-2xl font-semibold text-center">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" className="">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="w-full h-84 rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.172417309267!2d0.0574614757654353!3d51.528397371818045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a63af34c7683%3A0x8a3372193395241e!2s11%20Mountfield%20Rd%2C%20London%20E6%206BH%2C%20UK!5e0!3m2!1sen!2sin!4v1742575950456!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
