import React, { useState } from 'react';
import { 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  Globe2, 
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  Sparkles,
  Menu
} from 'lucide-react';

const SynzyHome = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Prof. Anita Sharma",
      title: "Dean of Admissions | IIT Delhi",
      quote: "The platform's analytics and insights have been invaluable. We can now target our outreach more effectively and have significantly improved our admission process efficiency.",
      bgColor: "bg-white"
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Principal | Delhi Public School, Mumbai",
      quote: "Synzy has revolutionized how we connect with prospective students. The AI matching is incredibly accurate, and we've seen a 40% increase in quality applications.",
      bgColor: "bg-white"
    },
    {
      name: "Mr. Vikram Patel",
      title: "Director | National Public School, Bangalore",
      quote: "As a school administrator, Synzy has made our admission process seamless. The quality of student profiles and the ease of management is outstanding.",
      bgColor: "bg-white"
    },
    {
      name: "Dr. Meera Iyer",
      title: "Vice Chancellor | Anna University, Chennai",
      quote: "The AI-powered recommendations have helped us discover talented students from across India. It's like having a smart recruitment team working 24/7.",
      bgColor: "bg-white"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const cards = [
    { icon: <Sparkles className="w-8 h-8" />, title: "AI-Powered Matching", desc: "Our advanced AI algorithms analyze preferences, performance, and requirements to create perfect matches between students and institutions." },
    { icon: <Zap className="w-8 h-8" />, title: "Smart Discovery", desc: "Intelligent search and filtering system that helps students discover schools and colleges based on their unique needs and aspirations." },
    { icon: <Target className="w-8 h-8" />, title: "Precision Targeting", desc: "Help your institution reach the right students with data-driven insights and targeted outreach capabilities." },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Analytics Dashboard", desc: "Comprehensive analytics and insights to track engagement, applications, and optimize your institution's profile." },
    { icon: <Globe2 className="w-8 h-8" />, title: "Pan-India Reach", desc: "Connect with students and institutions across India on a single unified platform, expanding your reach exponentially." },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: "Verified Profiles", desc: "All institutions undergo thorough verification ensuring authentic and trustworthy connections for students and parents." }
  ];

  const steps = [
    {
      icon: <Building2 className="w-12 h-12 text-gray-700" />,
      step: "STEP 1",
      title: "Register Your Institution",
      desc: "Create your school or college profile with detailed information about programs, facilities, achievements, and admission criteria."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-gray-700" />,
      step: "STEP 2",
      title: "AI Does the Magic",
      desc: "Our AI analyzes your profile and matches it with students based on their preferences, academic records, and career goals."
    },
    {
      icon: <ArrowRight className="w-12 h-12 text-gray-700" />,
      step: "STEP 3",
      title: "Connect & Grow",
      desc: "Receive qualified leads, manage applications, and grow your institution with the right students who are the perfect fit."
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-gray-800" />
          <span className="text-xl font-bold text-gray-800">Synzy</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600">
          <a href="#" className="hover:text-gray-900">Features</a>
          <a href="#" className="hover:text-gray-900">How It Works</a>
          <a href="#" className="hover:text-gray-900">Testimonials</a>
          <a
  href="https://synzy-school.vercel.app/"
  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition inline-block"
>
  School Login
</a>

<a
  href="https://synzy-college.vercel.app/"
  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition inline-block ml-4"
>
  College Login
</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content with Header Spacing */}
      <main className="pt-20">
        {/* AI Pill */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            India's First AI-Powered Platform
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 py-12 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">Discover Your Perfect</span><br />
            <span className="text-gray-500">School & College</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Transform education discovery with AI-powered insights. Connect students with the right institutions and help schools & colleges reach their ideal candidates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2">
              Register as School
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium flex items-center justify-center gap-2">
              Register as College
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Registered Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">300+</div>
              <div className="text-gray-600">Registered Colleges</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Student Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </section>

        {/* AI Technology Section */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Powered by Advanced AI Technology</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Leverage cutting-edge artificial intelligence to make smarter education decisions
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="text-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section - Light Grey */}
        <section className="bg-gray-50 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">How Synzy Works</h2>
            <p className="text-gray-500 text-center mb-12">Simple, smart, and effective in three steps</p>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white rounded-full shadow-sm">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Trusted by Educators Nationwide</h2>
          <p className="text-gray-500 text-center mb-12">See what schools and colleges are saying about Synzy</p>

          {/* Testimonial Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg relative">
            <div className="min-h-[200px] flex items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-lg italic mb-6">"{testimonials[currentTestimonial].quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].title}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* CTA Section - Dark */}
        <section className="bg-gray-900 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Transform Education Discovery?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of institutions already using Synzy to connect with the right students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-medium">
              Register Your School
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition font-medium">
              Register Your College
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white px-6 py-12 border-t border-gray-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Logo and description */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-8 h-8 text-gray-800" />
                <span className="text-xl font-bold text-gray-800">Synzy</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                India's first AI-powered platform for school and college exploration. Making education discovery smarter, faster, and more effective.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Quick Links</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-gray-900">Features</a></li>
                    <li><a href="#" className="hover:text-gray-900">How It Works</a></li>
                    <li><a href="#" className="hover:text-gray-900">Testimonials</a></li>
                    <li><a href="#" className="hover:text-gray-900">Get Started</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Registration</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-gray-900">School Registration</a></li>
                    <li><a href="#" className="hover:text-gray-900">College Registration</a></li>
                  </ul>
                </div>
                <div className="col-span-2 md:col-span-1 text-sm text-gray-500 text-right md:text-left">
                  © 2025 Synzy. All rights reserved.<br />
                  Empowering education through AI.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SynzyHome;