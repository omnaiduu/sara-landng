"use client"

import { motion, type Variants } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Zap, ArrowRight, Star, CheckCircle, Users, Instagram, Youtube } from "lucide-react"

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
      title: "Custom Content Creation",
      desc: "Tailored plans with 4 video reels or 4 static posts + 2 carousels per month, including SEO, free festive posts/stories, and multi-platform posting.",
    },
    {
      icon: BarChart3,
      title: "Design & Editing Excellence",
      desc: "Logos from ₹3,500 onwards with up to 3 revisions; graphics like single posts, banners, brochures, pitch decks, company profiles, and content writing.",
    },
    {
      icon: Zap,
      title: "Website Solutions",
      desc: "Basic 4-page sites at ₹25,000 or e-commerce at ₹35,000, including 1st-year host and domain, SEO, data compilation, and custom features.",
    },
  ]

  const services = [
    {
      title: "Design Essentials",
      price: "₹700+",
      period: "/design",
      desc: "Graphics, logos, and print-ready content for your brand.",
      features: [
        "Logos: ₹3,500 onwards (typography ₹3,500–₹5,000, symbolic ₹5,500–₹7,500, combination ₹6,000–₹8,500, emblem ₹8,000–₹10,000, mascot ₹7,500–₹10,000)",
        "Single post: ₹1,500 onwards for carousels; ₹700 for static. Ideation, graphic designing and content creation",
        "Banner/poster designs: ₹2,000 per design. Ideation, graphic designing, content creation and printing",
        "Brochure: ₹1,500 onwards. Editing, compilation, and designing",
        "Pitchdecks: ₹5,000 onwards. Editing, compilation, and designing",
        "Company profile: ₹2,000 onwards. Editing, compilation, and designing",
        "Content writing: ₹2,000 onwards. Editing, compilation, and designing",
      ],
    },
    {
      title: "SMM Growth Package",
      price: "₹18,000",
      period: "/month",
      desc: "Full social media management with content creation and posting.",
      features: [
        "Content plan: 4 Videos Posts (Reels) per month + SEO & Content creations. Free Static & Festive posts and stories",
        "Content plan: 4 Static Posts + 2 Carousels per month + SEO & Content creations. Free Festive posts and stories",
        "Content will be posted on all platforms desired by client - INCLUDED",
        "Content Shooting (Videography) Session (OPTIONAL): ₹5,000",
        "Ad campaigns: Running ad campaigns on social media will be billed on actuals charged by META",
        "Editing of long form content such as podcasts, tutorials, discussions etc. will be charged separately",
      ],
      popular: true,
    },
    {
      title: "Podcast Production",
      price: "₹2,000+",
      period: "/episode",
      desc: "Professional editing and production for podcasts, tutorials, and discussions. Editing of long form content such as podcasts, tutorials, discussions etc.—charged separately from SMM.",
      features: [
        "Full editing, compilation, and design for long-form content",
        "SEO-optimized for platforms like YouTube/Spotify",
        "Promotion integration with SMM (e.g., reels from episodes)",
        "Custom quotes based on length and complexity",
      ],
    },
    {
      title: "Website Pro",
      price: "₹25,000+",
      period: "/project",
      desc: "Custom websites with hosting and domain included for first year.",
      features: [
        "Basic Website: ₹25,000 – 4 page plan: Home, Store, About, Contact. Content to be provided by the client",
        "E-commerce Website: ₹35,000 onwards – 4 page plan + Store pages: Cart, checkout, my account; 20 free product uploads. Content to be provided by the client",
        "Features: search bar, product filters, product categories, blogs (charged separately), online payments",
        "Website Host (Charges per Year): (included) ₹4,000",
        "Domain [.in, .com, .org.in, .store, .shop, .org, .online, .net, .space, .site]: (included) ₹2,000",
        "Design, Data compilation, Content Creation, SEO",
      ],
    },
  ]

  const igPosts = [
    {
      title: "Glitz Beauty Salon",
      slides: [
        "/portfolio/post1-slides(7).webp",
        "/portfolio/post1-slides(1).webp",
        "/portfolio/post1-slides(2).webp",
        "/portfolio/post1-slides(3).webp",
        "/portfolio/post1-slides(4).webp",
        "/portfolio/post1-slides(5).webp",
        "/portfolio/post1-slides(6).webp",
      ],
      desc: "Sara Creations designed a stunning catalogue that's as fabulous as their services! Swipe to see the results.",
      slideCount: 7,
    },
    {
      title: "Today’s Brand Highlight🕸️",
      slides: [
        "/portfolio/post2-slides(5).jpg",
        "/portfolio/post2-slides(4).jpg",
        "/portfolio/post2-slides(3).jpg",
        "/portfolio/post2-slides(3).jpg",
        "/portfolio/post2-slides(1).jpg",
      ],
      desc: "Sara Creations crafted a timeless logo for Spider Net Solutions, combining old-school charm with secure network elements to reflect trust and reliability. ",
      slideCount: 5,
    },
    {
      title: "Crafting milestones, one design at a time! 🌟 ",
      slides: [
        "/portfolio/post3-slides(1).jpg",
        "/portfolio/post3-slides(2).jpg",
        "/portfolio/post3-slides(3).jpg",
        "/portfolio/post3-slides(4).jpg",
        "/portfolio/post3-slides(5).jpg",
        "/portfolio/post3-slides(6).jpg",
      ],
      desc: "Sara Creations proudly designed the logo for Sevarat, an inspiring organization dedicated to enriching the lives of senior citizens. This special logo represents their journey toward a remarkable Limca Book of Records achievement! 🎨✨ ",
      slideCount: 6,
    },
    {
      title: "Brand Spotlight: Amber Teak",
      slides: [
        "/portfolio/post4-slide(1).jpg",
        "/portfolio/post4-slide(2).jpg",
        "/portfolio/post4-slide(3).jpg",
        "/portfolio/post4-slide(4).jpg",
        "/portfolio/post4-slide(5).jpg",
        "/portfolio/post4-slide(6).jpg",
      ],
      desc: "When it comes to budget-friendly décor that elevates your interiors, Amber Teak is the name to trust! With years of experience and a loyal clientele across Goa, they blend quality, style, and affordability to craft spaces that feel like home. 🏡💫 Sara Creations had the pleasure of designing their catalogue, bringing their stunning range of décor to life with a touch of creativity! ✨",
      slideCount: 6,
    },
  ]

  const testimonials = [
    {
      quote:
        "Sara Creation transformed our social media presence completely. The custom content and SEO optimization helped us reach our target audience effectively.",
      client: "Priya Sharma",
      company: "Local Restaurant Chain",
      rating: 5,
    },
    {
      quote:
        "The logo design and branding package exceeded our expectations. Professional work with great attention to detail and timely delivery.",
      client: "Rajesh Kumar",
      company: "Tech Startup",
      rating: 5,
    },
    {
      quote:
        "Our e-commerce website built by Sara Creation has been performing excellently. The design is modern and user-friendly with all the features we needed.",
      client: "Anita Patel",
      company: "Fashion Boutique",
      rating: 5,
    },
    {
      quote:
        "The podcast editing service is top-notch. They transformed our raw recordings into professional episodes that sound amazing on all platforms.",
      client: "Vikram Singh",
      company: "Business Podcast",
      rating: 5,
    },
  ]

  const faqs = [
    {
      q: "What does the SMM Package include?",
      a: "The SMM Growth Package (₹18,000/month) includes 4 video posts (reels) or 4 static posts + 2 carousels per month with SEO & content creation. Free festive posts and stories are included. Content will be posted on all platforms desired by client. Optional content shooting session available for ₹5,000. Ad campaigns billed separately on actuals charged by META.",
    },
    {
      q: "How much for logo design?",
      a: "Logo design starts from ₹3,500 onwards depending on type: Typography (₹3,500–₹5,000), Symbolic (₹5,500–₹7,500), Combination Logo (₹6,000–₹8,500), Emblem Logo (₹8,000–₹10,000), Mascot (₹7,500–₹10,000). Includes multiple options, color variations, PDF/PNG/JPG delivery, font styles/favicon, and up to 3 free revisions.",
    },
    {
      q: "What about graphics and print services?",
      a: "Single posts: ₹700 for static, ₹1,500 onwards for carousels (includes ideation, graphic designing and content creation). Banner/poster designs: ₹2,000 per design (includes printing). Brochures: ₹1,500 onwards. Pitch decks: ₹5,000 onwards. Company profiles: ₹2,000 onwards. Content writing: ₹2,000 onwards. All include editing, compilation, and designing.",
    },
    {
      q: "Website options and notes?",
      a: "Basic Website: ₹25,000 (4 pages: Home, Store, About, Contact). E-commerce: ₹35,000 onwards (includes cart, checkout, my account, 20 free product uploads, search bar, product filters). First year hosting (₹4,000) and domain (₹2,000) included. Content to be provided by client. Additional pages/features like blogs and online payments charged separately. GST not included. Host/domain prices may vary after first year.",
    },
    {
      q: "Do you offer podcast production services?",
      a: "Yes! Our podcast production service starts at ₹2,000+ per episode. We provide full editing, compilation, and design for long-form content, SEO optimization for platforms like YouTube/Spotify, and can integrate promotion with our SMM services. Custom quotes are provided based on length and complexity of the content.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-32 overflow-hidden"
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
              Creative Digital Agency @weatsaracreations
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Brand's Potential
              </span>{" "}
              with Sara Creations
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-prose">
              Expert social media management, custom logos, graphics, brochures, pitch decks, profiles, writing, and
              websites from ₹18,000/month for SMM. SEO-optimized for engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 md:px-8 py-4 text-lg">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 md:px-8 py-4 text-lg border-slate-300 bg-transparent">
                View Portfolio
              </Button>
            </div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
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
                <span>GST Not Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Custom Quotes Available</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={childVariants}>
            <div className="relative">
              <img
                src="/hero-placeholder.png"
                alt="Creative team designing logos and content"
                className="rounded-2xl shadow-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-32 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Why Choose Sara Creations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Creative Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver modern, scalable solutions for brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-emerald-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-32 px-6 md:px-12 bg-slate-50"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Choose Your Package</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Flexible options for growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
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

                    <div className="max-h-64 overflow-y-auto mb-8">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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

          <motion.div className="mt-12 text-center" variants={childVariants}>
            <p className="text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Note:</strong> GST not included. Host/domain prices for 1st year only (may vary after). Additional
              pages/features (e.g., blogs, online payments) charged separately. Content provided by client where noted.
              Total cost for logos depends on type.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="py-32 px-6 md:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Portfolio Highlights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">See Our Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our Instagram reels and YouTube videos for Samaroh Goa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram Posts with Carousels */}
            {igPosts.map((post, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group overflow-hidden hover:shadow-emerald-300/20 hover:shadow-lg transition-all duration-300 rounded-xl">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {post.slides.map((slide, sIdx) => (
                        <CarouselItem key={sIdx}>
                          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center">
                            <img
                              src={slide || "/placeholder.svg"}
                              alt={`${post.title} slide ${sIdx + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900">{post.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {post.slideCount} Slides
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600">{post.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* YouTube Video Embed */}
            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-emerald-300/20 hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/H8Hs-dyTX3Q?si=BPLWt-eWr3O2d86m"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-t-xl"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Samaroh Goa Podcast</h4>
                  <p className="text-sm text-slate-600">
                    Edited long-form content example showcasing our podcast production capabilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-emerald-300/20 hover:shadow-lg transition-all duration-300 rounded-xl">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100">
                  <iframe
                    width="100%"
                    height="100%"
                   src="https://www.youtube.com/embed/VGCFW61npjE?si=DLSByRyyAylMsgXM" 
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-t-xl"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Samaroh Goa Podcast</h4>
                  <p className="text-sm text-slate-600">
                    Edited long-form content example showcasing our podcast production capabilities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-32 px-6 md:px-12"
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

          <Carousel
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2">
                  <motion.div variants={childVariants}>
                    <Card className="p-8 h-full border-slate-200 hover:scale-102 transition-transform duration-200">
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
        className="py-32 px-6 md:px-12 bg-slate-50"
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
            <p className="text-xl text-slate-600">Key details on our services.</p>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
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
        className="py-32 px-6 md:px-12 bg-gradient-to-r from-emerald-600 to-blue-600"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={childVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">Book a free consultation for custom quotes.</p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-5 text-lg font-semibold">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-emerald-100 mt-4 text-sm">No commitment • Personalized plans.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Sara Creations</h3>
            <p className="text-slate-400">Creative Content & Digital Solutions</p>
            <p className="text-slate-400">@weatsaracreations</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://instagram.com/weatsaracreations"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 Sara Creations. All rights reserved.</p>
            <p className="text-slate-400 mb-4 md:mb-0 text-sm">GST not included in all quotes</p>
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
