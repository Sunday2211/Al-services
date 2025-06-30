import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your message!",
      description: "We will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-yellow-400">
              AL Services Inc.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-white hover:text-yellow-400"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block px-3 py-2 text-white hover:text-yellow-400"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block px-3 py-2 text-white hover:text-yellow-400"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block px-3 py-2 text-white hover:text-yellow-400"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-center text-white bg-gradient-to-br from-black/80 to-black/60 relative"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23333" width="1200" height="800"/><text x="600" y="400" text-anchor="middle" fill="%23FFD700" font-size="48" font-family="Arial">AL SERVICES</text></svg>')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
            Your Trusted Partner in Home Improvement
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium handyman solutions and car detailing services throughout
            South Florida. Quality workmanship, reliability, and unmatched
            customer care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 animate-on-scroll">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="text-6xl text-yellow-400 mb-6 text-center">
                  🏠
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Home & Property Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "General Handyman Services",
                    "Custom Woodwork",
                    "Interior & Exterior Painting",
                    "Ceiling Light Installation",
                    "TV and Shelf Installation",
                    "Window & Pressure Cleaning",
                    "Cement Work",
                    "Custom Closet Systems",
                    "LED Lighting Installations",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="hover:text-yellow-600 transition-colors">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="text-6xl text-yellow-400 mb-6 text-center">
                  🚗
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Auto Detailing Services
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full Car Detail Cleaning",
                    "Exterior Deep Cleaning",
                    "Interior Shampoo Cleaning",
                    "Deep Shampoo Seat Cleaning",
                    "Exterior Waxing",
                    "Professional-Grade Equipment",
                    "High-Performance Results",
                    "Showroom-Quality Finish",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="hover:text-yellow-600 transition-colors">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 animate-on-scroll">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About AL Services Inc.
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Built on Craftsmanship. Powered by Integrity.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AL Services Inc. was established with a simple goal: deliver a
                multi-specialty service platform that combines the best of home
                improvement and car care under one roof.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a family-operated, locally driven business that believes
                in the power of community, detail-oriented service, and reliable
                partnerships. Our founder and technicians bring years of
                experience and a problem-solving mindset to every job site.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We proudly serve Fort Lauderdale, Hollywood, Plantation, Coral
                Springs, and surrounding areas in South Florida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-full h-80 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-bold text-black">
                  AL Services Team
                </span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "🏆",
                title: "Quality Workmanship",
                desc: "Excellence in every project we undertake",
              },
              {
                icon: "⏰",
                title: "Timely Service",
                desc: "Respect for your time and schedule",
              },
              {
                icon: "🤝",
                title: "Honest Communication",
                desc: "Clear, transparent pricing and updates",
              },
              {
                icon: "😊",
                title: "Customer Satisfaction",
                desc: "Your happiness is our success",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-black text-white animate-on-scroll"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Let's Bring Your Vision to Life
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl text-yellow-400 mr-4">📞</div>
                  <div>
                    <strong>Phone:</strong>
                    <br />
                    <a
                      href="tel:9547905115"
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      (954) 790-5115
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-2xl text-yellow-400 mr-4">✉️</div>
                  <div>
                    <strong>Email:</strong>
                    <br />
                    al.services.inc@example.com
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-2xl text-yellow-400 mr-4">🕒</div>
                  <div>
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Saturday: 8:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="text-2xl text-yellow-400 mr-4">📍</div>
                  <div>
                    <strong>Service Areas:</strong>
                    <br />
                    Fort Lauderdale, Hollywood, Plantation, Coral Springs &
                    Surrounding Areas
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://instagram.com/al.services.inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transform hover:scale-110 transition-all duration-300"
                >
                  📷
                </a>
                <a
                  href="https://facebook.com/al.services.inc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transform hover:scale-110 transition-all duration-300"
                >
                  📘
                </a>
                <a
                  href="tel:9547905115"
                  className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-yellow-500 transform hover:scale-110 transition-all duration-300"
                >
                  📞
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-yellow-400 font-medium"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="mt-2 bg-white/10 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-yellow-400 font-medium"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="mt-2 bg-white/10 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-yellow-400 font-medium"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="mt-2 bg-white/10 border-gray-600 text-white placeholder-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="service"
                      className="text-yellow-400 font-medium"
                    >
                      Service Requested
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger className="mt-2 bg-white/10 border-gray-600 text-white">
                        <SelectValue placeholder="Select a Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="handyman">
                          General Handyman
                        </SelectItem>
                        <SelectItem value="woodwork">
                          Custom Woodwork
                        </SelectItem>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="auto-detailing">
                          Auto Detailing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-yellow-400 font-medium"
                    >
                      Project Description
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your project..."
                      className="mt-2 bg-white/10 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3 transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
