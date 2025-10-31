"use client"

import { Award, Bed, Briefcase, Calendar, ChefHat, Dumbbell, MessageSquare, Package, Sparkles, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Hotel"
        />
      </div>

      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and comfort at Grand Hotel, where every detail is crafted to create unforgettable memories for discerning travelers."
          tag="Five Star Excellence"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "rooms" },
            { text: "Explore Amenities", href: "amenities" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about" className="mx-auto px-4 md:px-6">
        <TextSplitAbout
          title="About Grand Hotel"
          description={[
            "Since 1925, Grand Hotel has been the epitome of luxury hospitality, welcoming distinguished guests from around the world.",
            "Our commitment to excellence is reflected in every aspect of your stay, from our impeccably appointed rooms to our world-class amenities and personalized service."
          ]}
          buttons={[
            { text: "Learn More", href: "amenities" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms" className="mx-auto px-4 md:px-6">
        <ProductCardOne
          title="Our Luxury Accommodations"
          description="Each room and suite is thoughtfully designed to provide the ultimate in comfort and sophistication"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "$350/night",
              imageSrc: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe hotel room with king bed"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "$650/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious executive suite living area"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$1,200/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Opulent presidential suite bedroom"
            }
          ]}
          buttons={[
            { text: "View All Rooms", href: "#rooms" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6">
        <PricingCardOne
          title="Choose Your Perfect Stay"
          description="Select from our range of accommodations, each offering unique luxury experiences"
          tag="Room Packages"
          tagIcon={Package}
          plans={[
            {
              id: "business",
              badge: "Business Travel",
              badgeIcon: Briefcase,
              price: "$350/night",
              subtitle: "Perfect for corporate stays",
              features: [
                "High-speed WiFi",
                "Business center access",
                "Express check-in/out",
                "Room service",
                "Concierge service"
              ]
            },
            {
              id: "leisure",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$650/night",
              subtitle: "Ideal for luxury getaways",
              features: [
                "All business amenities",
                "Spa access",
                "Fine dining credits",
                "Complimentary breakfast",
                "Room upgrade (subject to availability)"
              ]
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities" className="mx-auto px-4 md:px-6">
        <MetricCardThree
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to enhance every moment of your stay"
          tag="Five Star Service"
          tagIcon={Award}
          metrics={[
            {
              id: "spa",
              icon: Sparkles,
              title: "Luxury Spa",
              value: "5,000 sqft"
            },
            {
              id: "dining",
              icon: ChefHat,
              title: "Fine Dining",
              value: "3 restaurants"
            },
            {
              id: "events",
              icon: Calendar,
              title: "Event Spaces",
              value: "12 venues"
            },
            {
              id: "wellness",
              icon: Dumbbell,
              title: "Fitness Center",
              value: "24/7 access"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="mx-auto px-4 md:px-6">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Experience the luxury through the words of our valued guests"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "TechCorp International",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Global Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34487906/pexels-photo-34487906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Managing Partner",
              company: "Elite Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6694865/pexels-photo-6694865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            },
            {
              id: "5",
              name: "Victoria Thompson",
              role: "Executive Producer",
              company: "Premium Media",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Victoria Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6">
        <ContactCenterForm
          title="Reserve Your Stay"
          description="Contact our reservations team to book your luxury experience or inquire about our services"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
        />
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "#dining" },
                { label: "Events", href: "#events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "#concierge" },
                { label: "Room Service", href: "#room-service" },
                { label: "Spa & Wellness", href: "#spa" },
                { label: "Business Center", href: "#business" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "#services" },
                { label: "Location", href: "#location" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}