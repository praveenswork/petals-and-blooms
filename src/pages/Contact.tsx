import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16">
      <Helmet>
        <title>Contact Us | Petals & Blooms</title>
        <meta
          name="description"
          content="Get in touch with Petals & Blooms for custom bouquet orders, wedding inquiries, or any floral questions."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-serif mb-8">Get in Touch</h1>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Whether you have a question about our bouquets, want to discuss a
              custom arrangement, or just want to say hello, we'd love to hear
              from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-olive/10 p-3 rounded-full text-brand-olive">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">
                    Call Us
                  </h4>
                  <p className="text-gray-600">+91 95006 17928</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-olive/10 p-3 rounded-full text-brand-olive">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600">hello@petalsandblooms.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-olive/10 p-3 rounded-full text-brand-olive">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">
                    Visit Us
                  </h4>
                  <p className="text-gray-600">Coimbatore, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-olive outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-olive outline-none transition-all"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-olive outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-brand-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-olive outline-none transition-all resize-none"
                  placeholder="Your Message..."
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-brand-olive text-white py-4 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center hover:bg-opacity-90 transition-all group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      size={18}
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
