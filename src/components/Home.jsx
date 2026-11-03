import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, Globe, Phone, Pause, Play, LucideSearch,Activity, 
  Brain, 
  Heart, 
  Dumbbell, 
  Sparkles, 
  User, Menu, X, Stethoscope, Clock, MapPin, UserSearch, Microscope, ArrowRight, Calendar } from 'lucide-react';

// Carousel Data
const slides = [
  {
    id: 1,
    headline: (
      <>
        KEEP ON <br />
        CHANGING <br />
        LIVES FOR THE <br />
        BETTER
      </>
    ),
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
    alt: "Healthcare professional adjusting surgical mask"
  },
  {
    id: 2,
    headline: (
      <>
        LEADING THE <br />
        FUTURE OF <br />
        PATIENT-CENTERED <br />
        CARE
      </>
    ),
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor discussing diagnosis with team"
  },
  {
    id: 3,
    headline: (
      <>
        INNOVATING <br />
        BREAKTHROUGH <br />
        MEDICAL <br />
        DISCOVERIES
      </>
    ),
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1000&q=80",
    alt: "Medical researcher working in laboratory"
  }
];
const careCards = [
    {
      title: "Primary Care",
      description: "Look for a primary care provider for yourself or your family.",
      linkText: "Find Primary Care",
      icon: <Stethoscope className="w-6 h-6 text-[#0077C8]" />,
      href: "#primary-care"
    },
    {
      title: "Immediate Care",
      description: "Get immediate medical attention if you are ill or injured.",
      linkText: "Find Immediate Care",
      icon: <Clock className="w-6 h-6 text-[#0077C8]" />,
      href: "#immediate-care"
    },
    {
      title: "Locations",
      description: "Search for specialty care, clinics and services across Southern California.",
      linkText: "See Our Locations",
      icon: <MapPin className="w-6 h-6 text-[#0077C8]" />,
      href: "#locations"
    },
    {
      title: "Find a Doctor",
      description: "Search for the UCLA Health doctor who's the perfect fit.",
      linkText: "Find a Doctor",
      icon: <UserSearch className="w-6 h-6 text-[#0077C8]" />,
      href: "#find-doctor"
    },
    {
      title: "Medical Services",
      description: "Access new advanced technology, treatments and research.",
      linkText: "Explore Medical Services",
      icon: <Activity className="w-6 h-6 text-[#0077C8]" />,
      href: "#medical-services"
    },
    {
      title: "Clinical Trials",
      description: "Participate in a clinical trial that could contribute to a medical advancement.",
      linkText: "Learn About Clinical Trials",
      icon: <Microscope className="w-6 h-6 text-[#0077C8]" />,
      href: "#clinical-trials"
    }
  ];


  const features = [
    {
      title: "Cancer Care",
      description: "Our cancer center physicians and scientists provide the best traditional cancer treatments.",
      buttonText: "Learn About Cancer Care",
      href: "#cancer-care",
      // Custom inline SVG for stomach/cancer care icon
      icon: (
        <svg className="w-10 h-10 text-[#003B5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M8 6a6 6 0 0 0 12 0V4H4v2a6 6 0 0 0 6 6h4a2 2 0 0 1 2 2v4a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    {
      title: "Neuroscience",
      description: "We advance the science and practice of neurology and neurosurgery through relentless discovery and clinical innovation.",
      buttonText: "Learn About Neuroscience",
      href: "#neuroscience",
      icon: <Brain className="w-10 h-10 text-[#003B5C]" />
    },
    {
      title: "Transplant",
      description: "We provide some of the most advanced transplant care in the country with exceptional patient outcomes.",
      buttonText: "Learn About Transplant",
      href: "#transplant",
      // Custom twin kidney-style SVG
      icon: (
        <svg className="w-10 h-10 text-[#003B5C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 3C4.2 3 2 5.2 2 8c0 3.5 2.5 6.5 5 9 1.5 1.5 3 2 3 2s-.5-2.5-.5-5C9.5 11 11 8 11 5c0-1.1-.9-2-2-2H7zm10 0c-1.1 0-2 .9-2 2 0 3 1.5 6 1.5 9 0 2.5-.5 5-.5 5s1.5-.5 3-2c2.5-2.5 5-5.5 5-9 0-2.8-2.2-5-5-5h-2z" />
        </svg>
      )
    },
    {
      title: "Orthopedics & Sports Medicine",
      description: "Our orthopedic specialists address the full range of joint, bone and muscle conditions.",
      buttonText: "Learn Orthopedics & Sports Medicine",
      href: "#orthopedics",
      // Volleyball/Sports Icon
      icon: (
        <svg className="w-10 h-10 text-[#003B5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20"/>
          <path d="M2 12h20"/>
        </svg>
      )
    },
    {
      title: "Heart & Vascular Care",
      description: "We provide the most advanced, world-class care, helping patients with new devices and treatments for cardiovascular conditions.",
      buttonText: "Learn About Heart & Vascular Care",
      href: "#heart-care",
      // Heart with pulse wave line
      icon: (
        <div className="relative flex items-center justify-center">
          <Heart className="w-10 h-10 text-[#003B5C] fill-current" />
          <Activity className="w-5 h-5 text-white absolute" />
        </div>
      )
    },
    {
      title: "Head & Neck Surgery",
      description: "We care for patients with a wide range of consultative and therapeutic services for all ages and maintain excellence in our care.",
      buttonText: "Learn About Head & Neck Surgery",
      href: "#head-neck",
      // Head Profile Silhouette Icon
      icon: (
        <svg className="w-10 h-10 text-[#003B5C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.55 1.85 6.67 4.65 8.44l.85-2.54A6.002 6.002 0 0 1 12 6c3.31 0 6 2.69 6 6 0 1.96-.94 3.7-2.4 4.8l1.4 2.2C19.3 17.2 21 14.8 21 12c0-5.52-4.48-10-10-10z" />
          <circle cx="15" cy="11" r="1.5" />
        </svg>
      )
    }
  ];

  const secondaryArticles = [
    {
      title: "Autoimmune disease rheumatoid arthritis causes joint pain",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
      date: "November 2, 2026",
      readTime: "3 min read",
      href: "#rheumatoid-arthritis"
    },
    {
      title: "Basivertebral nerve ablation delivers a minimally invasive long-term solution for chronic lower back pain",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      date: "November 2, 2026",
      readTime: "5 min read",
      href: "#nerve-ablation"
    },
    {
      title: "What is respite care?",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80",
      date: "November 2, 2026",
      readTime: "3 min read",
      href: "#respite-care"
    },
    {
      title: "Why won't the wart on my hand go away?",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      date: "November 2, 2026",
      readTime: "5 min read",
      href: "#wart-removal"
    }
  ];

  const footerSections = [
    {
      title: "CONNECT WITH US",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Share Your Feedback", href: "#feedback" },
        { label: "International Services", href: "#international" },
        { label: "中文", href: "#chinese" },
        { label: "العربية", href: "#arabic" },
        { label: "myUCLAhealth", href: "#myuclahealth" },
        { label: "Get the UCLA Health Apps", href: "#apps" }
      ],
      socialIcons: true
    },
    {
      title: "FIND CARE",
      links: [
        { label: "Find a Doctor", href: "#find-doctor" },
        { label: "Find a Location", href: "#find-location" },
        { label: "Immediate Care", href: "#immediate-care" },
        { label: "Emergency Care", href: "#emergency-care" },
        { label: "Make an Appointment", href: "#appointment" },
        { label: "Medical Services", href: "#medical-services" },
        { label: "Clinical Trials", href: "#clinical-trials" }
      ]
    },
    {
      title: "PATIENT RESOURCES",
      links: [
        { label: "Prepare for Your Visit", href: "#prepare-visit" },
        { label: "Visitor Guidelines", href: "#visitor-guidelines" },
        { label: "Patient Education", href: "#patient-education" },
        { label: "Billing & Insurance", href: "#billing-insurance" },
        { label: "Help Paying Your Bill", href: "#help-paying" },
        { label: "Price Transparency", href: "#price-transparency" },
        { label: "Support & Information", href: "#support-info" },
        { label: "COVID-19 Info", href: "#covid-info" },
        { label: "Wellness & Routine Care", href: "#wellness" }
      ]
    },
    {
      title: "DISCOVER UCLA HEALTH",
      links: [
        { label: "About UCLA Health", href: "#about" },
        { label: "Departments", href: "#departments" },
        { label: "News, Insights and Patient Stories", href: "#news-stories" },
        { label: "For Health Care Professionals", href: "#professionals" },
        { label: "Community, Equity and Inclusive Excellence", href: "#equity" },
        { label: "Contact Media Team", href: "#media-team" },
        { label: "Donate to UCLA Health", href: "#donate" },
        { label: "Work at UCLA Health", href: "#careers" },
        { label: "Volunteer for UCLA Health", href: "#volunteer" }
      ]
    }
  ];
export default function PopularMedicalHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Auto-play timer logic
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (

    <>
    <div className="w-full font-sans text-[#003B5C] bg-[#F9F9F6] min-h-screen relative overflow-x-hidden">
      
      {/* ---------------- FIXED / OVERLAY HEADER CONTAINER (Full Width Background) ---------------- */}
      <div className="absolute top-0 left-0 right-0 z-40 w-full ">
        
        {/* TOP UTILITY NAV BAR (Full width background, content inside max-w-7xl) */}
        <div className="hidden md:flex bg-[#00984a] h-[45px] backdrop-blur-sm text-white text-[13px] font-medium py-2 px-4 sm:px-6 lg:px-8 w-full justify-center">
          <div className="max-w-7xl w-full flex justify-start items-center space-x-6">
            <a href="#explore" className="hover:underline">Admission</a>
            <a href="#refer" className="hover:underline">Amenities</a>
            <a href="#myportal" className="hover:underline">Career</a>
            <a href="#donate" className="hover:underline">News & Events</a>
            <a href="#contact" className="flex items-center gap-1 hover:underline">
              
              <span>09666787800</span>
            </a>
            <a href="#contact" className="flex items-center gap-1 hover:underline">
             
              <span>info@popular-hospital.com</span>
            </a>
           
           
          </div>
        </div>

        {/* MAIN NAVIGATION BAR (Full width background, content inside max-w-7xl) */}
        <div className="bg-white/95 backdrop-blur-md border-b border-gray-100/60 shadow-sm w-full px-4 sm:px-6 lg:px-8 flex justify-center">
          <header className="max-w-7xl h-[100px] w-full py-3.5 flex items-center justify-between">
            {/* Brand Logo */}
            <div className="flex items-center space-x-1.5 cursor-pointer">
              <img src="https://www.popular-hospital.com/public/pmch/img/logo.png" className="h-[75px]"/>
            </div>

            {/* Desktop Navigation Items */}
            <nav className="hidden lg:flex  items-center space-x-6 xl:space-x-8 text-[20px] font-semibold text-[#003B5C] relative">
              {/* Find Care */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 group-hover:text-[#0077C8] transition-colors">
                  <span>About PMCH</span>
                  <ChevronDown className="w-4 h-4 text-[#0077C8] transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-2.5 text-[13.5px] font-medium text-gray-700">
                  <a href="#doctors" className="block hover:text-[#0077C8] transition-colors">At a glane</a>
                  <a href="#specialties" className="block hover:text-[#0077C8] transition-colors">Message From Chairman</a>
                  <a href="#appointments" className="block hover:text-[#0077C8] transition-colors">Message From Managing Director</a>
                   <a href="#appointments" className="block hover:text-[#0077C8] transition-colors">Management Team</a>
                </div>
              </div>

              {/* Patient Resources */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 group-hover:text-[#0077C8] transition-colors">
                  <span>Specialities</span>
                  <ChevronDown className="w-4 h-4 text-[#0077C8] transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-6 w-64 bg-white rounded-md shadow-xl border border-gray-100 py-4 px-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-3 text-[13.5px] font-medium text-gray-700">
                  <a href="#visit" className="block hover:text-[#0077C8] transition-colors">Breast Cancer Specialist</a>
                  <a href="#billing" className="block hover:text-[#0077C8] transition-colors">Chest Medicine</a>
                  <a href="#support" className="block hover:text-[#0077C8] transition-colors">Child/Paediatrics</a>
                  <a href="#portal" className="block hover:text-[#0077C8] transition-colors leading-tight">
                    Critical Care Medicine
                  </a>
                  <a href="#help-paying" className="block hover:text-[#0077C8] transition-colors">Colorectal Surgeon</a>
                  <a href="#international" className="block hover:text-[#0077C8] transition-colors">Dietician</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Endocrine Medicine</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">ENT, Head & Neck Surgery</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Eye/Ophthalmology</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Gastroenterology</a>

                </div>
              </div>

              {/* Locations */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 group-hover:text-[#0077C8] transition-colors">
                  <span>Patients</span>
                  <ChevronDown className="w-4 h-4 text-[#0077C8] transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-2.5 text-[13.5px] font-medium text-gray-700">
                  <a href="#hospitals" className="block hover:text-[#0077C8] transition-colors">Admission & Payment Guide</a>
                  <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Rate Charts</a>
                  <a href="#parking" className="block hover:text-[#0077C8] transition-colors">Corporate Patients</a>
                  <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Hospital Amenities</a>
                   <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Vaccination Centre</a>
                    <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Hospital Location Map</a>
                     <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">In-Patient Facilities</a>
                      <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Indoor Service</a>
                </div>
              </div>

              {/* Discover */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 group-hover:text-[#0077C8] transition-colors">
                  <span>Media</span>
                  <ChevronDown className="w-4 h-4 text-[#0077C8] transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-56 bg-white rounded-md shadow-xl border border-gray-100 py-3 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 space-y-2.5 text-[13.5px] font-medium text-gray-700">
                  <a href="#news" className="block hover:text-[#0077C8] transition-colors">News & Events</a>
                  <a href="#research" className="block hover:text-[#0077C8] transition-colors">Photo Gallery</a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 group-hover:text-[#0077C8] transition-colors">
                  <span>Contact Us</span>
                  
                </button>
               
              </div>
            </nav>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#003B5C] focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </header>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto w-full">
            <div className="max-w-7xl mx-auto space-y-4">
              {/* Find Care Accordion */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('findCare')}
                  className="w-full flex justify-between items-center py-2 font-semibold text-[#003B5C]"
                >
                  <span>About PMCH</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'findCare' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'findCare' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#0077C8]/30">
                    <a href="#doctors" className="block hover:text-[#0077C8] transition-colors">At a glane</a>
                  <a href="#specialties" className="block hover:text-[#0077C8] transition-colors">Message From Chairman</a>
                  <a href="#appointments" className="block hover:text-[#0077C8] transition-colors">Message From Managing Director</a>
                   <a href="#appointments" className="block hover:text-[#0077C8] transition-colors">Management Team</a>
                  </div>
                )}
              </div>

              {/* Patient Resources Accordion */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('patientRes')}
                  className="w-full flex justify-between items-center py-2 font-semibold text-[#003B5C]"
                >
                  <span>Specialities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'patientRes' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'patientRes' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#0077C8]/30">
                    <a href="#visit" className="block hover:text-[#0077C8] transition-colors">Breast Cancer Specialist</a>
                  <a href="#billing" className="block hover:text-[#0077C8] transition-colors">Chest Medicine</a>
                  <a href="#support" className="block hover:text-[#0077C8] transition-colors">Child/Paediatrics</a>
                  <a href="#portal" className="block hover:text-[#0077C8] transition-colors leading-tight">
                    Critical Care Medicine
                  </a>
                  <a href="#help-paying" className="block hover:text-[#0077C8] transition-colors">Colorectal Surgeon</a>
                  <a href="#international" className="block hover:text-[#0077C8] transition-colors">Dietician</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Endocrine Medicine</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">ENT, Head & Neck Surgery</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Eye/Ophthalmology</a>
<a href="#international" className="block hover:text-[#0077C8] transition-colors">Gastroenterology</a>
                  </div>
                )}
              </div>

              {/* Locations Accordion */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('locations')}
                  className="w-full flex justify-between items-center py-2 font-semibold text-[#003B5C]"
                >
                  <span>Patients</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'locations' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'locations' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#0077C8]/30">
                   <a href="#hospitals" className="block hover:text-[#0077C8] transition-colors">Admission & Payment Guide</a>
                  <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Rate Charts</a>
                  <a href="#parking" className="block hover:text-[#0077C8] transition-colors">Corporate Patients</a>
                  <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Hospital Amenities</a>
                   <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Vaccination Centre</a>
                    <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Hospital Location Map</a>
                     <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">In-Patient Facilities</a>
                      <a href="#urgent-care" className="block hover:text-[#0077C8] transition-colors">Indoor Service</a>
                  </div>
                )}
              </div>

              {/* Discover Accordion */}
              <div>
                <button 
                  onClick={() => toggleMobileDropdown('discover')}
                  className="w-full flex justify-between items-center py-2 font-semibold text-[#003B5C]"
                >
                  <span>Media</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === 'discover' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'discover' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-gray-600 border-l-2 border-[#0077C8]/30">
                    <a href="#news" className="block hover:text-[#0077C8] transition-colors">News & Events</a>
                  <a href="#research" className="block hover:text-[#0077C8] transition-colors">Photo Gallery</a>
                  </div>
                )}
              </div>

              <div>
                <button 
                  onClick={() => toggleMobileDropdown('discover')}
                  className="w-full flex justify-between items-center py-2 font-semibold text-[#003B5C]"
                >
                  <span>Contact Us</span>
                
                </button>
               
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3 text-xs text-gray-500">
                <a href="#contact" className="flex items-center gap-2 py-1">
                  <Phone className="w-3.5 h-3.5" /> Contact Us
                </a>
                <a href="#translate" className="flex items-center gap-2 py-1">
                  <Globe className="w-3.5 h-3.5" /> Translate Language
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------------- HERO BANNER CAROUSEL SECTION ---------------- */}
      <section className="relative w-full max-w-screen mx-auto">
      {/* Carousel Wrapper */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* Responsive Image Container */}
        <div className="relative w-full h-[260px] sm:h-[350px] lg:h-[620px]  overflow-hidden shadow-xl bg-gray-100">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
              {/* Optional Subtle Overlay for better contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Floating Carousel Controls Bar */}
        <div className="absolute bottom-4 sm:bottom-6 z-30 flex items-center space-x-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-200/60 dark:border-gray-700/60">
          
          {/* Slide Indicator Dots */}
          <div className="flex space-x-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsPlaying(false); // Pause on manual interaction (optional UX preference)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-6 sm:w-8 bg-[#0077C8]' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-700" />

          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-[#003B5C] dark:text-gray-200 hover:text-[#0077C8] dark:hover:text-[#0077C8] transition-colors p-1 rounded-full focus:outline-none"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>
        </div>

      </div>
    </section>

      {/* ---------------- LOWER SUB-HERO SECTION ---------------- */}
      <section className="bg-[#F9F9F6] text-center px-4 sm:px-6 py-12 border-t border-gray-200/50 relative z-10">
        <div className="max-w-7xl mx-auto space-y-4">
          <h2 className="text-[#003B5C] font-serif text-xl sm:text-3xl md:text-5xl font-normal leading-snug">
            Achieving the exceptional doesn’t just happen
          </h2>
          <p className="text-gray-600 text-xs sm:text-2xl font-normal leading-relaxed max-w-7xl mx-auto">
            Asking difficult questions, doggedly pursuing answers, making groundbreaking discoveries and providing exceptional care requires hard work. Instead of simply waiting for what's next, we shape it and create it. Because lives depend on it.
          </p>
        </div>
      </section>

      {/* ---------------- FLOATING AI / CHAT WIDGET ---------------- */}
      
    </div>

    <section className="relative w-full min-h-screen py-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80" 
          alt="City skyline and horizon background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Soft fading overlay matching the atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F6F9]/90 via-[#EAF2F7]/75 to-[#D6E6F2]/85 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center space-y-12">
        
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-3 max-w-2xl">
          <h2 className="text-[#003B5C] font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Your best care is closer than you think
          </h2>
          <p className="text-[#003B5C]/80 text-sm sm:text-base font-medium">
            From the Central Coast to the South Bay, we have more than 300 locations across Southern California.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {careCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-100 p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
            >
              {/* Top Section */}
              <div className="space-y-4 flex flex-col items-center">
                {/* Optional Icon badge */}
                <div className="p-3 bg-[#EAF2F7] rounded-full group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                <h3 className="text-[#003B5C] font-serif text-2xl font-normal">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-8 w-full">
                <a
                  href={card.href}
                  className="inline-flex items-center justify-center w-full bg-[#00984a] hover:bg-[#003B5C] text-white font-semibold text-sm py-3 px-6 rounded transition-colors duration-200 shadow-sm"
                >
                  <span>{card.linkText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
<section className="w-full bg-[#E8F1FA] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Graphic / Award Card */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-[560px] bg-[#F2EFE9] border border-gray-300 p-6 sm:p-8 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
            
            {/* Yellow Background Accent Shape (Top Left) */}
            <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-60 sm:h-60 bg-[#F2E5A3] rounded-full opacity-70 pointer-events-none z-0" />

            {/* Top Row: Logo & Subtitle */}
            <div className="relative z-10 flex flex-col items-start space-y-1">
              <div className="flex items-center space-x-1.5">
                <div className="bg-[#0077C8] text-white font-bold text-base sm:text-lg px-2 py-0.5 tracking-tight">
                  UCLA
                </div>
                <span className="font-serif text-xl sm:text-2xl font-normal text-[#003B5C] tracking-tight">
                  Health
                </span>
              </div>
              <p className="text-[#0077C8] text-xs font-semibold tracking-wide pl-0.5">
                Keep on rising
              </p>
            </div>

            {/* Middle Content Grid (Headline + Badges) */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-6">
              
              {/* Main Bold Headline Text */}
              <div className="sm:col-span-7">
                <h3 className="text-[#003B5C] font-black text-3xl sm:text-4xl lg:text-[42px] leading-[0.95] tracking-tighter uppercase">
                  RANKED AMONG <br />
                  THE NATION’S & <br />
                  WORLD’S BEST
                </h3>
              </div>

              {/* Badges Column */}
              <div className="sm:col-span-5 flex flex-col items-center sm:items-start space-y-4 pt-4 sm:pt-0 sm:border-l sm:border-gray-300/80 sm:pl-6">
                
                {/* Badge 1: US News & World Report */}
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="bg-[#B88B2A] text-white px-3 py-1.5 rounded text-[11px] font-bold text-center border-2 border-[#8C6418] shadow-sm uppercase tracking-wider">
                    <span className="block text-[9px] leading-none opacity-90">BEST HOSPITALS</span>
                    <span className="block font-black text-xs text-yellow-300">U.S. News</span>
                    <span className="block text-[8px] leading-none tracking-widest mt-0.5">HONOR ROLL 2026-2027</span>
                  </div>
                  <p className="text-[#003B5C] text-[11px] sm:text-xs font-bold leading-tight mt-1">
                    No. 1 in California <br />
                    & Los Angeles*
                  </p>
                </div>

                <div className="w-full border-t border-gray-300/70" />

                {/* Badge 2: Newsweek World's Best */}
                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="bg-red-700 text-white px-3 py-1 rounded text-[10px] font-bold text-center border border-red-800 shadow-sm uppercase">
                    <span className="text-yellow-400 text-[10px] block">★★★★★</span>
                    <span className="block text-[8px] leading-none font-sans">WORLD'S BEST HOSPITALS 2026</span>
                    <span className="block font-serif font-black text-[11px] lowercase tracking-normal">Newsweek</span>
                  </div>
                  <p className="text-[#003B5C] text-[11px] sm:text-xs font-bold leading-tight mt-1">
                    Top 20 Globally
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="relative z-10 text-right">
              <span className="text-gray-500 text-[10px] font-medium">
                *Tied for #1 ranking
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Descriptive Text Content */}
        <div className="w-full space-y-5 text-left lg:pl-4">
          <h2 className="text-[#003B5C] font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.12] tracking-tight">
            UCLA Health top-ranked in annual assessment of hospital patient care
          </h2>

          <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            UCLA Health placed #1 in both California and Los Angeles* in a broad assessment of excellence in hospital-based patient care.
          </p>

          <div className="pt-2">
            <a
              href="#learn-more"
              className="inline-block bg-[#00984a] hover:bg-[#003B5C] text-white font-semibold text-sm px-7 py-3.5 rounded-xs transition-colors duration-200 shadow-sm"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>

    <section className="w-full bg-[#F5F5F2] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 flex justify-center items-center font-sans">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Title, Description & CTA Button (Span 5 cols on lg) */}
        <div className="w-full lg:col-span-5 space-y-4 text-left">
          <h2 className="text-[#003B5C] font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] tracking-tight">
            Orthopedic and sports medicine care from pros
          </h2>

          <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed">
            In a city where everyone — from skate queens to sunset chasers — moves with passion, injuries happen. From innovative therapies to advanced surgeries, UCLA Health keeps LA in action.
          </p>

          <div className="pt-2">
            <a
              href="#find-care"
              className="inline-block bg-[#00984a] hover:bg-[#003B5C] text-white font-semibold text-sm px-6 py-3 rounded-xs transition-colors duration-200 shadow-sm"
            >
              Find Orthopedic Care
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Skateboarder Image with Overlay Typography (Span 7 cols on lg) */}
        <div className="w-full lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[640px] h-[340px] sm:h-[400px] md:h-[440px] rounded-lg overflow-hidden shadow-md bg-gray-200">
            
            {/* Background Skateboard Image */}
            <img 
              src="https://images.unsplash.com/photo-1547447134-cd3c5c916c11?auto=format&fit=crop&w=1200&q=80" 
              alt="Skateboarder performing a trick in the air with palm trees" 
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay Headline Text: "PLAY ON" with LA styled in blue */}
            <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8 pointer-events-none z-10">
              <h3 className="font-black text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white uppercase drop-shadow-sm flex items-center space-x-1 sm:space-x-2">
                <span className="text-transparent [-webkit-text-stroke:2px_#0077C8] sm:[-webkit-text-stroke:3px_#0077C8]">PL</span>
                <span className="text-[#0077C8] drop-shadow-md">A</span>
                <span className="text-transparent [-webkit-text-stroke:2px_#0077C8] sm:[-webkit-text-stroke:3px_#0077C8]">Y</span>
                <span className="w-3 sm:w-6" /> {/* Space between words */}
                <span className="text-transparent [-webkit-text-stroke:2px_#0077C8] sm:[-webkit-text-stroke:3px_#0077C8]">ON</span>
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section className="relative w-full bg-[#003B5C] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 font-sans min-h-screen flex flex-col justify-between">
      
      {/* Content Wrapper */}
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Why choose UCLA Health for medical care?
          </h2>
          <p className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto">
            When you visit UCLA Health, you'll gain access to world-leading physicians, advanced technology and specialty services right in your own neighborhood.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="bg-white text-[#003B5C] rounded-lg p-8 sm:p-9 shadow-lg flex flex-col justify-between items-center text-center transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon & Description Container */}
              <div className="space-y-4 flex flex-col items-center">
                {/* Specialty Icon */}
                <div className="p-2 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl font-normal text-[#003B5C]">
                  {item.title}
                </h3>

                {/* Card Description Text */}
                <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-8 w-full">
                <a
                  href={item.href}
                  className="inline-block w-full border border-[#005587] text-[#005587] hover:bg-[#00984a] hover:text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded transition-colors duration-200 text-center"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FLOATING AI / CHAT WIDGET (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#FFD100] text-[#003B5C] font-semibold text-xs sm:text-sm px-5 py-3 rounded-full shadow-xl flex items-center gap-2 hover:bg-[#f3c600] transition-transform transform hover:scale-105">
          <Search className="w-4 h-4 stroke-[2.5]" />
          <span>Ask Me Anything</span>
        </button>
      </div>

    </section>


    <section className="w-full bg-[#F9F9F6] py-16 px-4 sm:px-6 lg:px-12 font-sans relative">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        
        {/* Section Heading */}
        <div>
          <h2 className="text-[#003B5C] font-serif text-3xl sm:text-4xl font-normal tracking-tight">
            Latest News
          </h2>
        </div>

        {/* ---------------- FEATURED MAIN ARTICLE (Top Row) ---------------- */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Article Image */}
          <div className="lg:col-span-6 w-full h-[280px] sm:h-[340px] rounded overflow-hidden shadow-inner bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80" 
              alt="Medical students wearing white coats during ceremony" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-[#003B5C] font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal leading-snug">
              Different paths, same calling: UCLA welcomes newest medical students
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Nearly 175 incoming medical students donned white coats at the annual White Coat Ceremony this summer to mark the start of their medical education at the David Geffen School of Medicine at UCLA.
            </p>

            <div className="pt-2">
              <a
                href="#full-article"
                className="inline-block bg-[#00984a] hover:bg-[#003B5C] text-white font-semibold text-sm px-6 py-2.5 rounded-xs transition-colors duration-200 shadow-sm"
              >
                Read the Full Article
              </a>
            </div>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-xs text-gray-500 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>September 3, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>3 min read</span>
              </div>
            </div>
          </div>

        </div>

        {/* ---------------- SECONDARY 4-COLUMN GRID ARTICLES (Bottom Row) ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryArticles.map((article, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Image & Content */}
              <div className="space-y-3">
                <div className="w-full h-40 sm:h-44 rounded overflow-hidden bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <h4 className="text-[#003B5C] font-serif text-lg font-normal leading-snug hover:underline cursor-pointer">
                  {article.title}
                </h4>
              </div>

              {/* Card Meta Info */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      
    </section>

    <footer className="w-full font-sans text-white relative">
      
      {/* ---------------- STAY IN TOUCH BANNER (Upper Footer) ---------------- */}
      <div className="bg-[#00984a] py-10 px-4 sm:px-6 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          
          <div className="space-y-1 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Stay in Touch
            </h2>
            <p className="text-gray-200 text-sm sm:text-base font-normal">
              Subscribe to UCLA Health newsletters and publications for the latest developments.
            </p>
          </div>

          <a
            href="#subscribe"
            className="border-2 border-white text-white font-semibold text-sm px-6 py-3 rounded-xs hover:bg-white hover:text-[#005587] transition-colors duration-200 shadow-sm shrink-0"
          >
            Subscribe to Our Newsletter
          </a>

        </div>
      </div>

      {/* ---------------- MAIN FOOTER NAVIGATION (Lower Footer) ---------------- */}
      <div className="bg-[#00984a] py-12 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* UCLA Health Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white text-[#003352] font-extrabold text-xl sm:text-2xl px-3 py-1 tracking-tight">
              UCLA
            </div>
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-white">
              Health
            </span>
          </div>

          {/* 4-Column Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs font-extrabold tracking-wider uppercase text-gray-300">
                  {section.title}
                </h3>
                
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-200 font-normal">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href={link.href} className="hover:underline transition-all">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social Media Icons for Connect With Us column */}
                {section.socialIcons && (
                  <div className="flex items-center space-x-3.5 pt-4 text-gray-200">
                    {/* Facebook Icon */}
                    <a href="#facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z" />
                      </svg>
                    </a>
                    {/* X (Twitter) Icon */}
                    <a href="#twitter" className="hover:text-white transition-colors" aria-label="X">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    {/* Instagram Icon */}
                    <a href="#instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* YouTube Icon */}
                    <a href="#youtube" className="hover:text-white transition-colors" aria-label="YouTube">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    {/* LinkedIn Icon */}
                    <a href="#linkedin" className="hover:text-white transition-colors" aria-label="LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    {/* Weibo Icon */}
                    <a href="#weibo" className="hover:text-white transition-colors" aria-label="Weibo">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.85 18.06c-3.13.3-5.8-1.04-5.96-3-.16-1.95 2.25-3.77 5.38-4.07 3.13-.3 5.8 1.04 5.96 3 .16 1.95-2.25 3.77-5.38 4.07zm1.19-2.26c-.19.38-.68.57-1.09.43-.4-.14-.57-.55-.38-.93.19-.38.68-.57 1.08-.43.41.14.58.55.39.93zm1.12-1.39c-.08.19-.34.28-.56.2-.21-.08-.31-.3-.23-.48.08-.18.33-.28.55-.2.22.08.32.29.24.48zm-1.21-6.19c-.43.14-.9-.08-1.04-.5-.14-.42.08-.89.5-1.03.42-.14.89.09 1.03.5.15.42-.08.89-.49 1.03zm9.05.51c-.41-.39-1.05-.48-1.55-.3-1.04.38-1.89-1.2-1.04-1.98.54-.5 1.4-.41 1.83.17.43.58 1.17.65 1.68.21.51-.44.57-1.19.14-1.77-1.12-1.52-3.36-1.74-4.81-.46-1.45 1.28-1.7 3.52-.52 5.04.79 1.02 2.37.94 3.14-.15.77-1.09.12-1.42-1.02-.96zm-5.71 1.76c-.95.31-1.97-.2-2.28-1.14-.31-.94.2-1.97 1.14-2.28.95-.31 1.97.2 2.28 1.14.31.94-.2 1.97-1.14 2.28z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Legal Notice / Copyright Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
              <a href="#hipaa" className="hover:underline">HIPAA Notice</a>
              <span>|</span>
              <a href="#privacy" className="hover:underline">Privacy Notice</a>
              <span>|</span>
              <a href="#nondiscrimination" className="hover:underline">Nondiscrimination</a>
              <span>|</span>
              <a href="#misconduct" className="hover:underline">Report Misconduct</a>
              <span>|</span>
              <a href="#accessibility" className="hover:underline">Accessibility</a>
              <span>|</span>
              <a href="#we-listen" className="hover:underline">We listen. We care.</a>
              <span>|</span>
              <span>© 2026 UCLA Health</span>
            </div>
          </div>

        </div>
      </div>

      {/* ---------------- FLOATING AI / CHAT WIDGET ---------------- */}
      

    </footer>
    </>
  );
}