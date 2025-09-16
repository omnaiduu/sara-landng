"use client"

import { motion, type Variants } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Bot, ArrowRight, Star, CheckCircle, TrendingUp, Users, Zap } from "lucide-react"

export default function App() {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const benefits = [
    {
      icon: Target,
      title: "Custom Campaigns",
      desc: "Tailored strategies designed specifically for your brand's unique voice and goals.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      desc: "Advanced analytics and real-time reporting to optimize your social media ROI.",
    },
    {
      icon: Bot,
      title: "AI-Powered Growth",
      desc: "Cutting-edge AI tools that automate content creation and audience engagement.",
    },
  ]

  const services = [
    {
      title: "Starter Package",
      price: "$99",
      period: "/month",
      desc: "Perfect for small businesses getting started with social media marketing.",
      features: ["5 posts per week", "Basic analytics", "1 platform focus"],
    },
    {
      title: "Professional",
      price: "$199",
      period: "/month",
      desc: "Comprehensive solution for growing businesses ready to scale.",
      features: ["15 posts per week", "Advanced analytics", "3 platforms", "Ad management"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "$499",
      period: "/month",
      desc: "Full-service solution with dedicated account management.",
      features: ["Unlimited posts", "Custom reporting", "All platforms", "24/7 support"],
    },
  ]

  const testimonials = [
    {
      quote:
        "Sara Creation transformed our social media presence completely. We saw a 300% increase in engagement within the first quarter.",
      client: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
    },
    {
      quote:
        "The AI-powered insights helped us understand our audience better than ever before. Our conversion rate doubled!",
      client: "Michael Chen",
      company: "GrowthCo",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and results-driven. Sara Creation is the best investment we've made for our marketing.",
      client: "Emma Rodriguez",
      company: "Local Boutique",
      rating: 5,
    },
  ]

  const faqs = [
    {
      q: "What social media platforms do you manage?",
      a: "We manage all major platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, and YouTube. We'll recommend the best platforms based on your target audience and business goals.",
    },
    {
      q: "How quickly will I see results?",
      a: "Most clients see initial improvements in engagement within 2-4 weeks. Significant growth in followers and conversions typically occurs within 2-3 months of consistent strategy implementation.",
    },
    {
      q: "Can I customize the AI tools for my brand?",
      a: "Our AI tools are fully customizable. You can set specific tone, style guidelines, industry focus, and brand voice parameters to ensure all content aligns with your brand identity.",
    },
    {
      q: "Do you provide content creation services?",
      a: "Yes, we offer complete content creation including graphics, videos, captions, and hashtag strategies. Our team combines creative expertise with AI-powered optimization.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-center lg:text-left" variants={childVariants}>
            <Badge variant="secondary" className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Social Media Marketing
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Social Media
              </span>{" "}
              Game
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Drive engagement, generate leads, and accelerate growth with our AI-powered social media strategies.
              Starting at just <span className="font-bold text-emerald-600">$99/month</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 bg-transparent">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Results Guaranteed</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="relative" variants={childVariants}>
            <div className="relative">
              <img
                src="/modern-social-media-dashboard-with-analytics-chart.jpg"
                alt="Sara Creation Social Media Dashboard"
                className="rounded-2xl shadow-2xl border border-slate-200"
              />
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                <TrendingUp className="w-5 h-5 inline mr-2" />
                +300% Growth
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-24 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Why Choose Sara Creation
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Smart Choice for <span className="text-emerald-600">Social Growth</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine human creativity with AI precision to deliver results that matter to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={idx} variants={childVariants}>
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-emerald-200">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-24 px-6 md:px-12 bg-slate-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Growth Plan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={childVariants}>
                <Card
                  className={`p-8 h-full relative ${service.popular ? "border-emerald-500 border-2 shadow-lg" : "border-slate-200"}`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 hover:bg-emerald-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-5xl font-bold text-slate-900">{service.price}</span>
                        <span className="text-slate-600 ml-2">{service.period}</span>
                      </div>
                      <p className="text-slate-600">{service.desc}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${service.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"}`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-24 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2">
                  <motion.div variants={childVariants}>
                    <Card className="p-8 h-full border-slate-200">
                      <CardContent className="p-0">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900">{testimonial.client}</div>
                            <div className="text-slate-600">{testimonial.company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-24 px-6 md:px-12 bg-slate-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our services and process.</p>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} variants={childVariants}>
                  <AccordionItem value={`item-${idx}`} className="border border-slate-200 rounded-lg px-6 bg-white">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pt-2">{faq.a}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-24 px-6 md:px-12 bg-gradient-to-r from-emerald-600 to-blue-600"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Social Media Presence?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join hundreds of businesses that have already accelerated their growth with Sara Creation. Book your free
              consultation today and discover what's possible.
            </p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold">
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-emerald-100 mt-4 text-sm">
              No commitment required • 30-minute strategy session • Personalized recommendations
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sara Creation</h3>
            <p className="text-slate-400">Elevating brands through intelligent social media marketing</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 Sara Creation. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
