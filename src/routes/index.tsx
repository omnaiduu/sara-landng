import { createFileRoute, Link } from "@tanstack/react-router"
import { motion, type Variants } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, BarChart3, Zap, ArrowRight, Star, CheckCircle, Users, Instagram, Youtube } from "lucide-react"
import ChatWidget from "@/components/chat-widget"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {

  const scrollTosection = (sectionId: string) => {
    const ele = document.getElementById(sectionId);
    if (ele) {
      ele.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  }
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0,
      },
    },
  }

  const benefits = [
    {
      icon: Target,
      title: "Custom Content Creation",
      desc: "Tailored plans with video reels, static posts, and carousels per month, including SEO, free festive stories, and seamless multi-platform posting to boost your engagement.",
    },
    {
      icon: BarChart3,
      title: "Design & Editing Excellence",
      desc: "Logos and graphics with expert revisions; from single posts to banners, brochures, pitch decks, profiles, and content writing for a polished brand identity.",
    },
    {
      icon: Zap,
      title: "Website Solutions",
      desc: "Custom 4-page sites or full e-commerce setups with hosting, domain, SEO, data compilation, and tailored features for seamless online presence.",
    },
  ]

  const services = [
    {
      title: "Design Essentials",
      price: "₹700 and above",
      period: "",
      desc: "Graphics, logos, and print-ready content for your brand.",
      features: [
        "Logos: ₹3,500 onwards (Typography Logo (Wordmark / Lettermark): Clean, elegant, and text-focused logos. Perfect for brands wanting a modern and minimalistic identity. Cost: ₹3,500 – ₹5,000; Symbolic / Iconic Logo: Uses abstract or representative symbols to portray your brand. Simple yet memorable, scalable across mediums. Cost: ₹5,500 – ₹7,500; Combination Logo (Text + Symbol / Icon): The most versatile and widely used style. Balances text with a unique graphic element. Cost: ₹6,000 – ₹8,500; Emblem Logo: A classic design featuring symbols or text inside a badge/seal. Great for premium, heritage, or traditional brands. Cost: ₹8,000 – ₹10,000; Mascot Logo: Fun, character-driven logos to bring your brand to life. Suitable for cafes, entertainment, events, or youth-centric businesses. Cost: ₹7,500 – ₹10,000). Multiple design options and color variations. Final delivery format: PDF, PNG, JPG. Font styles and favicon. Up to 3 free design revisions. Total cost will depend on the type of logo.",
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
        "Content plan: 4 Videos Posts (Reels) per month + SEO & Content creations. Free Static & Festive posts and stories. Content will be posted on all platform desired by client. INCLUDED",
        "Content plan: 4 Static Posts + 2 Carousels per month + SEO & Content creations. Free Festive posts and stories. Content will be posted on all platforms desired by client. INCLUDED",
        "Content Shooting (Videography) Session (OPTIONAL): All content for the month will be planned and shot by Sara Creations on a mutually decided date, once per month. One day will be utilized to shoot the content for whole month – ₹5,000",
        "Ad campaigns: Running ad campaigns on social media will be billed on actuals charged by META.",
        "Editing of long form content such as podcasts, tutorials, discussions etc. will be charged separately.",
      ],
      popular: true,
    },
    {
      title: "Podcast Production",
      price: "₹2,000 and above",
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
      price: "₹25,000 and above",
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
      igLink: "https://www.instagram.com/p/DFKxliAMSvy/?igsh=ODNnbG9zZmUwcHc4",
    },
    {
      title: "Today's Brand Highlight🕸️",
      slides: [
        "/portfolio/post2-slides(5).jpg",
        "/portfolio/post2-slides(4).jpg",
        "/portfolio/post2-slides(3).jpg",
        "/portfolio/post2-slides(3).jpg",
        "/portfolio/post2-slides(1).jpg",
      ],
      desc: "Sara Creations crafted a timeless logo for Spider Net Solutions, combining old-school charm with secure network elements to reflect trust and reliability.",
      slideCount: 5,
      igLink: "https://www.instagram.com/p/DFZWmVbv4J_/?img_index=1",
    },
    {
      title: "Crafting milestones, one design at a time! 🌟",
      slides: [
        "/portfolio/post3-slides(1).jpg",
        "/portfolio/post3-slides(2).jpg",
        "/portfolio/post3-slides(3).jpg",
        "/portfolio/post3-slides(4).jpg",
        "/portfolio/post3-slides(5).jpg",
        "/portfolio/post3-slides(6).jpg",
      ],
      desc: "Sara Creations proudly designed the logo for Sevarat, an inspiring organization dedicated to enriching the lives of senior citizens. This special logo represents their journey toward a remarkable Limca Book of Records achievement! 🎨✨",
      slideCount: 6,
      igLink: "https://www.instagram.com/p/DFrYK7foIjo/?igsh=MTg3Z2F4eHo2OWF6Zg%3D%3D",
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
      igLink: "https://www.instagram.com/p/DF9ZutspSJL/?igsh=eHExcmVqamF4ZWJu&img_index=2",
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-x-hidden">
      {/* Hero Section */}<ChatWidget />
      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-12 sm:py-20 lg:py-28"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <motion.div className="text-center lg:text-left" variants={childVariants}>
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-xs sm:text-sm"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Creative Digital Agency @weatsaracreations
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Brand's Potential
              </span>{" "}
              with Sara Creations
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-prose mx-auto lg:mx-0">
              Expert social media management, custom logos, graphics, brochures, pitch decks, profiles, writing, and
              websites. SEO-optimized for engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button
                onClick={() => window.open('tel:+919823572027', '_self')}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                onClick={() => scrollTosection('portfolio')}
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-slate-300 bg-transparent w-full sm:w-auto"
              >
                View Portfolio
              </Button>
            </div>

            <motion.div
              className="flex flex-col items-center lg:flex-row lg:justify-start gap-3 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-slate-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                <span>Custom Quotes</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="relative order-first lg:order-last" variants={childVariants}>
            <div className="relative">
              <img
                src="/hero-placeholder.png"
                alt="Creative team designing logos and content"
                className="rounded-2xl shadow-2xl border border-slate-200 w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Why Choose Sara Creations
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Comprehensive Creative Services
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We deliver modern, scalable solutions that turn ideas into impactful brands.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="p-6 sm:p-8 h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-emerald-300">
                  <CardContent className="p-0">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                      whileHover={{ rotate: 5 }}
                    >
                      <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-600 after:to-blue-600 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg ">
                      <strong>{benefit.desc.split(".")[0]}.</strong>
                      {benefit.desc.split(".").slice(1).join(".")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-slate-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Choose Your Package
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">Flexible options for growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 xl:grid-cols-4 z-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full z-10"
              >
                <Card
                  className={`z-10 relative flex h-[600px] flex-col rounded-3xl border bg-white/90 px-6 py-8 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all duration-300 ${service.popular
                    ? "border-emerald-500/80 ring-4 ring-emerald-100"
                    : "border-slate-200 hover:border-emerald-300"
                    }`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow-md z-10">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="flex flex-1 flex-col gap-5 p-0 min-h-0">
                    {/* Fixed Header */}
                    <div className="flex-shrink-0 space-y-2 text-center">
                      <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{service.title}</h3>
                      <div className="flex flex-wrap items-baseline justify-center gap-x-2 text-slate-900">
                        <span className="text-3xl font-bold sm:text-4xl xl:text-5xl">{service.price}</span>
                        {service.period && (
                          <span className="text-sm font-medium text-slate-500 sm:text-base">{service.period}</span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 sm:text-base">{service.desc}</p>
                    </div>

                    {/* Scrollable Features */}
                    <div className="flex-1 min-h-0 rounded-2xl border border-emerald-100/60 bg-emerald-50/30 p-4 overflow-hidden">
                      <ul className="h-full flex flex-col gap-2.5 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-300 scrollbar-track-emerald-50 hover:scrollbar-thumb-emerald-400">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-2 text-left">
                            <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                              <CheckCircle className="h-3.5 w-3.5" />
                            </div>
                            <span className="text-xs leading-relaxed text-slate-700 sm:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fixed Button */}
                    <Button
                      className={`flex-shrink-0 w-full rounded-full text-sm sm:text-base py-3 sm:py-4 font-semibold ${service.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"
                        }`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-8 sm:mt-12 text-center" variants={childVariants}>
            <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
              <strong>Note:</strong> GST not included in all quotes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        id="portfolio"
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Portfolio Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">See Our Work</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our creative designs and social media content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Instagram Posts with Carousels */}
            {igPosts.map((post, idx) => (
              <Link to={post.igLink} target="_blank" key={idx}>
                <motion.div
                  key={idx}
                  variants={childVariants}
                  whileHover={{ scale: 1.015, boxShadow: "0 24px 40px -16px rgba(16, 185, 129, 0.25)" }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/90 py-0 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-emerald-300/40">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {post.slides.map((slide, sIdx) => (
                          <CarouselItem key={sIdx}>
                            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gradient-to-br from-emerald-100/80 to-blue-100/80 flex items-center justify-center overflow-hidden">
                              <img
                                src={slide || "/placeholder.svg"}
                                alt={`${post.title} slide ${sIdx + 1}`}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 opacity-85 backdrop-blur-sm hover:opacity-100" />
                      <CarouselNext className="right-4 top-1/2 -translate-y-1/2 opacity-85 backdrop-blur-sm hover:opacity-100" />
                    </Carousel>
                    <CardContent className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-sm font-semibold text-slate-900 sm:text-base line-clamp-1">{post.title}</h4>
                        <Badge variant="secondary" className="flex-shrink-0 text-[0.7rem] sm:text-xs">
                          {post.slideCount} Slides
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">{post.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Podcast & Video Production Section */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-slate-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Video Production
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Podcast & Long-Form Content
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Professional editing and production for Samaroh Goa podcast series.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* YouTube Video 1 */}
            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.015, boxShadow: "0 24px 40px -16px rgba(16, 185, 129, 0.25)" }}
              transition={{ duration: 0.25 }}
            >
              <Card className="flex flex-col overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/90 py-0 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-emerald-300/40">
                <div className="relative w-full aspect-video bg-gradient-to-br from-emerald-100/80 to-blue-100/80">
                  <iframe
                    title="Samaroh Goa Podcast Episode 2"
                    src="https://www.youtube.com/embed/H8Hs-dyTX3Q?si=BPLWt-eWr3O2d86m"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                    Sara Talks | Episode 02 | Podcast Interview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Full podcast editing, compilation, and design for long-form content. SEO-optimized for YouTube platform.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* YouTube Video 2 */}
            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.015, boxShadow: "0 24px 40px -16px rgba(16, 185, 129, 0.25)" }}
              transition={{ duration: 0.25 }}
            >
              <Card className="flex flex-col overflow-hidden rounded-2xl border border-emerald-200/60 bg-white/90 py-0 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-emerald-300/40">
                <div className="relative w-full aspect-video bg-gradient-to-br from-emerald-100/80 to-blue-100/80">
                  <iframe
                    title="Samaroh Goa Podcast Episode 1"
                    src="https://www.youtube.com/embed/VGCFW61npjE?si=DLSByRyyAylMsgXM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                  <h4 className="text-base font-semibold text-slate-900 sm:text-lg">
                    Sara Talks | Episode 01 | Podcast Interview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Professional podcast production showcasing our editing expertise and attention to detail for long-form interviews.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
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
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-slate-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
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
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-emerald-600 to-blue-600"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">Book a free consultation for custom quotes.</p>
            <Button onClick={() => {
              window.open('tel:+919823572027', '_self')
            }} size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-5 text-lg font-semibold">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-emerald-100 mt-4 text-sm">No commitment • Personalized plans.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 bg-slate-900 text-slate-300">
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
              <a
                href="https://youtube.com/@saracreations"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4 md:mb-0">&copy; 2025 Sara Creations. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="tel:+919823572027" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
