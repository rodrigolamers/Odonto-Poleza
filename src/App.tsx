import { 
  Phone, 
  Instagram, 
  Facebook, 
  Clock, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Microscope, 
  Smile, 
  Stethoscope, 
  Activity, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Star,
  ChevronRight,
  Menu,
  X,
  Heart,
  Users,
  CheckCircle2,
  Gem,
  Baby,
  Dna,
  Syringe,
  Scan
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

const ToothIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 12c.5 0 1-1.5 1-3.5s-.5-3.5-1-3.5-1 1.5-1 3.5.5 3.5 1 3.5Z" />
    <path d="M17 12c.5 0 1-1.5 1-3.5s-.5-3.5-1-3.5-1 1.5-1 3.5.5 3.5 1 3.5Z" />
    <path d="M12 12c.5 0 1-1.5 1-3.5s-.5-3.5-1-3.5-1 1.5-1 3.5.5 3.5 1 3.5Z" />
    <path d="M7 12c0 4.5 2 7 5 7s5-2.5 5-7" />
    <path d="M12 19v3" />
    <path d="M10 22h4" />
  </svg>
);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

const WHATSAPP_LINK = "https://wa.me/5547996250248?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20receber%20atendimento.";
const INSTAGRAM_LINK = "https://www.instagram.com/odontopoleza/";
const FACEBOOK_LINK = "https://www.facebook.com/odontopoleza/";
const LOGO_URL = "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0207.png";
const WHATSAPP_ICON_URL = "https://cienciaweb.com.br/wp-content/uploads/2026/04/whatsapp-official-logo-png-download.png";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <ToothIcon size={28} />, title: "Implantes", desc: "Recupere sua função mastigatória e autoestima com implantes de alta qualidade." },
    { icon: <ToothIcon size={28} />, title: "Ortodontia", desc: "Aparelhos invisíveis (Invisalign) e convencionais para um alinhamento perfeito." },
    { icon: <ToothIcon size={28} />, title: "Lentes de Contato", desc: "Transformação estética completa com lâminas ultrafinas de porcelana." },
    { icon: <ToothIcon size={28} />, title: "Clínica Geral", desc: "Prevenção e cuidados essenciais para manter seu sorriso sempre saudável." },
    { icon: <ToothIcon size={28} />, title: "Prótese Dentária", desc: "Reabilitação oral com próteses fixas ou removíveis de alta durabilidade." },
    { icon: <ToothIcon size={28} />, title: "Odontopediatria", desc: "Cuidado especializado e lúdico para a saúde bucal dos pequenos." },
    { icon: <ToothIcon size={28} />, title: "Endodontia", desc: "Tratamento de canal com tecnologia rotatória para maior conforto." },
    { icon: <ToothIcon size={28} />, title: "Harmonização Facial", desc: "Procedimentos estéticos para equilibrar a beleza do seu rosto e sorriso." },
    { icon: <ToothIcon size={28} />, title: "Odontologia Digital", desc: "Escaneamento intraoral 3D para diagnósticos e planejamentos precisos." },
    { icon: <ToothIcon size={28} />, title: "Periodontia", desc: "Tratamento e prevenção de doenças gengivais para dentes fortes." },
    { icon: <ToothIcon size={28} />, title: "Clareamento", desc: "Sorriso mais branco e radiante com técnicas seguras e eficazes." },
    { icon: <ToothIcon size={28} />, title: "Cirurgia Oral", desc: "Extrações e pequenos procedimentos cirúrgicos com máxima segurança." }
  ];

  const clinicPhotos = [
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.34.00.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.34.00-1.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.59.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.59-1.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.58.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.58-2.jpeg",
    "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.58-1.jpeg"
  ];

  const doctors = [
    { name: "Dr. Gustavo Poleza", role: "Auxiliar administrativo", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0220.jpg" },
    { name: "Dr. Guilherme", role: "Cirurgia/implante", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0221-scaled.jpg" },
    { name: "Dr. Fernando Irineu Sandrini", role: "Enxerto", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0222.jpg" },
    { name: "Dra. Luísa Fernanda Berto", role: "Clínico Geral", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0223-scaled.jpg" },
    { name: "Dra. Nicole Dotti Pimentel", role: "Ortodontia", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0225.jpg" },
    { name: "Dra. Pamella Monteiro", role: "Periodontia", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0224.jpg" }
  ];

  const supportTeam = [
    { name: "Suellen", role: "Financeiro", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.33.18.jpeg" },
    { name: "Beatriz", role: "Marketing", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-23-at-13.32.11.jpeg" },
    { name: "Marília", role: "Agendamento", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/WhatsApp-Image-2026-03-19-at-09.06.20.jpeg" },
    { name: "Tuany", role: "Comercial", img: "https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0206-scaled.jpg" }
  ];

  const testimonials = [
    { name: "Karina Borba", text: "Atendimento impecável! A Dra. Nicole é maravilhosa, super atenciosa e explica tudo com muita clareza. A clínica é linda e moderna.", date: "há 2 meses" },
    { name: "Rodrigo Santos", text: "Melhor clínica de Itajaí e região. Fiz implantes com o Dr. Guilherme e o resultado foi surpreendente. Equipe nota 10!", date: "há 5 meses" },
    { name: "Juliana Mendes", text: "Ambiente acolhedor e profissionais extremamente competentes. O atendimento da recepção até o consultório é diferenciado.", date: "há 1 mês" },
    { name: "Ricardo Silva", text: "A tecnologia da clínica é impressionante. Fiz um escaneamento 3D e pude ver todo o planejamento do meu tratamento.", date: "há 3 meses" },
    { name: "Mariana Costa", text: "Lugar maravilhoso, equipe atenciosa e o resultado das minhas lentes de contato ficou perfeito. Muito natural!", date: "há 4 meses" },
    { name: "João Pedro", text: "Excelente atendimento, pontualidade e profissionalismo. Recomendo a todos que buscam qualidade.", date: "há 6 meses" },
    { name: "Ana Beatriz", text: "Minha experiência foi ótima. O Dr. Gustavo é muito calmo e passa muita segurança durante o procedimento.", date: "há 2 semanas" },
    { name: "Felipe Oliveira", text: "Clínica de alto padrão com preços justos. O tratamento de canal foi indolor e muito rápido.", date: "há 1 ano" },
    { name: "Patrícia Lima", text: "Adorei o atendimento humanizado. Me senti muito bem cuidada desde a recepção até a finalização.", date: "há 8 meses" },
    { name: "Lucas Ferreira", text: "Melhor investimento que fiz na minha saúde bucal. O clareamento a laser deu um resultado incrível.", date: "há 7 meses" },
    { name: "Beatriz Santos", text: "A clínica é impecável e o atendimento é de primeiro mundo. Me senti muito segura durante todo o tratamento.", date: "há 1 mês" },
    { name: "Gabriel Souza", text: "Profissionais de altíssimo nível. Fiz a remoção do siso e foi extremamente tranquilo e sem dor.", date: "há 3 meses" }
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex-shrink-0">
            <a href="#home">
              <img src={LOGO_URL} alt="Odonto Poleza" className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-20'}`} referrerPolicy="no-referrer" decoding="async" />
            </a>
          </div>

          {/* Menu Center */}
          <nav className="hidden xl:flex items-center space-x-6 text-[13px] font-bold uppercase tracking-wider">
            <a href="#home" className="hover:text-accent transition-colors">Início</a>
            <a href="#about" className="hover:text-accent transition-colors">Quem Somos</a>
            <a href="#services" className="hover:text-accent transition-colors">Serviços</a>
            <a href="#team" className="hover:text-accent transition-colors">Equipe</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
          </nav>

          {/* Right Side Info */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Phone */}
            <div className={`flex items-center space-x-2 font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}>
              <Phone size={16} className="text-accent" />
              <a href="tel:+5547996250248" className="hover:text-accent transition-colors text-sm md:text-base">(47) 99625-0248</a>
            </div>

            {/* Social */}
            <div className="flex items-center space-x-3">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-accent transition-colors"><Instagram size={18} /></a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-accent transition-colors"><Facebook size={18} /></a>
            </div>

            {/* CTA */}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent/80 hover:bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-accent/10 whitespace-nowrap flex items-center">
              <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-4 h-4 mr-2" referrerPolicy="no-referrer" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Início</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Quem Somos</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Serviços</a>
                <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Equipe</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Contato</a>
                <div className="flex space-x-4 pt-4 items-center">
                  <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer"><Instagram size={24} className="text-accent" /></a>
                  <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer"><Facebook size={24} className="text-accent" /></a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-5 h-5 mr-2" referrerPolicy="no-referrer" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 lg:pt-40 pb-16 lg:pb-32 overflow-hidden bg-white lg:bg-[url('https://cienciaweb.com.br/wp-content/uploads/2026/04/bg_odontopoleza.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
        {/* Abstract Background Shapes - Hidden on desktop as we have a full BG */}
        <div className="absolute top-0 right-0 -z-10 w-[60%] h-full bg-accent/5 rounded-bl-[300px] hidden lg:hidden transform translate-x-20" />
        <div className="absolute top-[20%] right-[10%] -z-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] hidden lg:hidden" />
        <div className="absolute -left-20 top-1/4 -z-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] hidden lg:hidden" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="flex-[1.2] text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-accent font-bold tracking-widest uppercase text-[10px] md:text-xs mb-4 lg:mb-6"
              >
                Odontologia de Elite em Balneário Piçarras
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-[72px] font-bold text-gray-900 leading-[1.1] mb-6 lg:mb-8"
              >
                Odonto <span className="text-accent">Poleza</span>: <br /> Excelência e <br /> Tradição.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-gray-600 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Há 29 anos unindo tecnologia e atendimento humanizado para transformar sorrisos e vidas.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10 lg:mb-12"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-accent/80 hover:bg-accent text-white px-8 py-4 lg:py-5 rounded-2xl text-base lg:text-lg font-bold transition-all shadow-2xl shadow-accent/20 flex items-center group whitespace-nowrap">
                  <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-6 h-6 mr-3" referrerPolicy="no-referrer" />
                  Agende sua Avaliação
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-2 lg:pt-4"
              >
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Clock size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] lg:text-[10px] text-gray-400 uppercase font-bold tracking-widest">Horários</p>
                    <p className="text-xs lg:text-sm font-bold text-gray-800">Seg - Sex: 08h às 18h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Award size={20} className="lg:w-6 lg:h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] lg:text-[10px] text-gray-400 uppercase font-bold tracking-widest">Tradição</p>
                    <p className="text-xs lg:text-sm font-bold text-gray-800">+ 29 Anos de Experiência</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Image (Hidden on desktop as it's part of the full BG) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full mb-4 lg:hidden"
            >
              <div className="relative z-10 rounded-[24px] md:rounded-[60px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-4 md:border-[12px] border-white max-w-[550px] mx-auto">
                <img 
                  src="https://cienciaweb.com.br/wp-content/uploads/2026/04/bg_odontopoleza-mobile2.png" 
                  alt="Clínica Odonto Poleza" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Desktop Spacer - Ensures text stays on the left when BG is active */}
            <div className="hidden lg:block flex-1" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Por que a Odonto Poleza?</h2>
            <p className="text-gray-600">Diferenciais que nos tornam referência em odontologia estética e funcional em Balneário Piçarras.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: <ShieldCheck size={32} />, title: "Segurança Total", desc: "Protocolos rigorosos de biossegurança e esterilização para sua tranquilidade." },
              { icon: <Sparkles size={32} />, title: "Estética Avançada", desc: "Lentes de contato e clareamento com resultados naturais e duradouros." },
              { icon: <Microscope size={32} />, title: "Tecnologia de Ponta", desc: "Equipamentos digitais de última geração para diagnósticos precisos." }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-10 rounded-3xl card-hover border border-gray-100"
              >
                <div className="text-accent mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="text-accent font-bold tracking-wider uppercase text-xs mb-2 block">Nossa História</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Odonto Poleza</h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
                <p>
                  Há 29 anos, a Clínica Odonto Poleza é referência em odontologia em Balneário Piçarras, unindo tradição, tecnologia e atendimento humanizado. Com uma equipe altamente qualificada e estrutura moderna, a clínica se destaca por oferecer tratamentos completos e personalizados, sempre com foco na excelência estética e funcional do sorriso.
                </p>
                <p>
                  Essa trajetória sólida é resultado do compromisso contínuo com a saúde bucal e a satisfação dos pacientes, que confiam na Odonto Poleza como sinônimo de qualidade e credibilidade.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://cienciaweb.com.br/wp-content/uploads/2026/04/IMG_0209.jpg" 
                  alt="Clínica Odonto Poleza" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-accent">+ 29</p>
                <p className="text-sm text-gray-500 font-medium">Anos de Experiência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Carousel Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Nossa Estrutura</h2>
        </div>
        <div className="flex relative">
          <motion.div 
            className="flex space-x-6 whitespace-nowrap"
            style={{ willChange: 'transform' }}
            animate={{ x: [0, -2500] }}
            transition={{ 
              repeat: Infinity, 
              duration: 50, 
              ease: "linear" 
            }}
          >
            {[...clinicPhotos, ...clinicPhotos].map((photo, index) => (
              <div key={index} className="w-[300px] md:w-[450px] h-[250px] md:h-[350px] rounded-3xl overflow-hidden flex-shrink-0 shadow-lg border-4 border-white">
                <img src={photo} alt={`Clínica ${index}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" decoding="async" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Nossos Serviços</h2>
            <p className="text-gray-600">Soluções completas para a sua saúde bucal e estética facial com tecnologia de ponta.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl card-hover border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center px-4"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-accent hover:bg-accent-hover text-white px-5 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold transition-all shadow-xl shadow-accent/25 group whitespace-nowrap">
              <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-6 h-6 mr-3" referrerPolicy="no-referrer" />
              Agende sua Avaliação Agora
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
              <span className="text-xl font-bold text-gray-600">Avaliações</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">O que dizem nossos pacientes</h2>
            <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 font-medium">Excelente 5.0/5.0</p>
            <a 
              href="https://www.google.com/maps/place/Odonto+Poleza/@-26.7604015,-48.6806087,15z/data=!4m8!3m7!1s0x94d8d48713a07c7d:0xeb3b87c588f04324!8m2!3d-26.7604015!4d-48.6806087!9m1!1b1!16s%2Fg%2F1vzv4t7n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline text-sm font-semibold mt-2 inline-block"
            >
              Ver todas as avaliações no Google
            </a>
          </div>
        </div>
        
        <div className="flex relative">
          <motion.div 
            className="flex space-x-6 px-4 md:px-6"
            style={{ willChange: 'transform' }}
            animate={{ x: [0, -4608] }} // 12 items * (360px width + 24px gap) = 4608
            transition={{ 
              repeat: Infinity, 
              duration: 80, 
              ease: "linear" 
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="w-[320px] md:w-[360px] bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm flex-shrink-0"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5 opacity-50" />
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative pb-16 bg-accent/5 overflow-hidden">
        <div className="h-32 bg-white" />
        <div className="container mx-auto px-4 md:px-6 -mt-32 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-accent font-bold tracking-wider uppercase text-xs mb-3 block">Nossos Especialistas</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">Corpo Clínico</h2>
            <p className="text-gray-600">Profissionais altamente qualificados e em constante atualização para oferecer o melhor da odontologia moderna.</p>
          </div>
          
          {/* Doctors Carousel */}
          <div className="mb-12 md:mb-20">
            <h3 className="hidden md:block text-2xl font-bold mb-8 text-center text-gray-800">Doutores</h3>
            <div className="flex relative -mx-4 md:-mx-6">
              <motion.div 
                className="flex space-x-4 md:space-x-8 px-4 md:px-6"
                style={{ willChange: 'transform' }}
                animate={{ x: [0, -1500] }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 35, 
                  ease: "linear" 
                }}
              >
                {[...doctors, ...doctors, ...doctors].map((member, index) => (
                  <div 
                    key={index}
                    className="w-[160px] md:w-[300px] lg:w-[350px] bg-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl flex-shrink-0 border border-gray-100"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        decoding="async"
                      />
                    </div>
                    <div className="p-3 md:p-6 text-center bg-white">
                      <h3 className="text-xs md:text-lg font-bold mb-0.5 md:mb-1">{member.name}</h3>
                      <p className="text-accent font-medium text-[10px] md:text-xs uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Support Team Carousel */}
          <div>
            <h3 className="hidden md:block text-2xl font-bold mb-8 text-center text-gray-800">Equipe Auxiliar</h3>
            <div className="flex relative -mx-4 md:-mx-6">
              <motion.div 
                className="flex space-x-4 md:space-x-8 px-4 md:px-6"
                style={{ willChange: 'transform' }}
                animate={{ x: [-1500, 0] }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 35, 
                  ease: "linear" 
                }}
              >
                {[...supportTeam, ...supportTeam, ...supportTeam].map((member, index) => (
                  <div 
                    key={index}
                    className="w-[160px] md:w-[300px] lg:w-[350px] bg-white rounded-[20px] md:rounded-[32px] overflow-hidden shadow-xl flex-shrink-0 border border-gray-100"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        decoding="async"
                      />
                    </div>
                    <div className="p-3 md:p-6 text-center bg-white">
                      <h3 className="text-xs md:text-lg font-bold mb-0.5 md:mb-1">{member.name}</h3>
                      <p className="text-accent font-medium text-[10px] md:text-xs uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="p-8 md:p-12 lg:p-16 flex-1">
              <h2 className="text-2xl md:text-5xl font-bold mb-4 uppercase tracking-tight">Entre em Contato</h2>
              <div className="space-y-4 md:space-y-5 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Endereço</p>
                    <p className="text-sm md:text-gray-700 font-medium">Av. Getúlio Vargas, 287 - Centro, Balneário Piçarras - SC</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Telefone / WhatsApp</p>
                    <p className="text-sm md:text-gray-700 font-medium">(47) 99625-0248</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">E-mail</p>
                    <p className="text-sm md:text-gray-700 font-medium">odonto_poleza@outlook.com</p>
                  </div>
                </div>
              </div>
              
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-5 md:px-10 py-3 md:py-5 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center transition-all shadow-xl shadow-green-500/20 whitespace-nowrap">
                <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-6 h-6 mr-3" referrerPolicy="no-referrer" />
                Agendar via WhatsApp
              </a>
            </div>
            
            <div className="flex-1 min-h-[400px] bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.442385104443!2d-48.6738944!3d-26.7621111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8d9f1e8e8e8e8%3A0x8e8e8e8e8e8e8e8e!2sAv.%20Get%C3%BAlio%20Vargas%2C%20287%20-%20Centro%2C%20Balne%C3%A1rio%20Pi%C3%A7arras%20-%20SC%2C%2088380-000!5e0!3m2!1spt-BR!2sbr!4v1711380000000!5m2!1spt-BR!2sbr" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20">
        <div className="container mx-auto px-8 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo & Info */}
            <div>
              <div className="mb-6">
                <img src={LOGO_URL} alt="Odonto Poleza" className="h-16" referrerPolicy="no-referrer" decoding="async" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Referência em odontologia de alta performance em Balneário Piçarras. Tecnologia, tradição e cuidado com o seu sorriso.
              </p>
              <div className="flex space-x-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-all"><Instagram size={20} /></a>
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-all"><Facebook size={20} /></a>
              </div>
            </div>

            {/* Institutional */}
            <div>
              <h4 className="font-bold mb-6">Menu Institucional</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#home" className="hover:text-accent transition-colors">Início</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">Quem Somos</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="#team" className="hover:text-accent transition-colors">Equipe</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-bold mb-6">Políticas</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
              </ul>
            </div>

            {/* Address & Help */}
            <div>
              <h4 className="font-bold mb-6">Endereço</h4>
              <p className="text-sm text-gray-500 mb-6">
                Avenida Getulio Vargas, 287 - Centro<br/>
                Balneario de Picarras - SC<br/>
                CEP: 88.380-000
              </p>
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold mb-2">Precisa de Ajuda?</h4>
                <a href={WHATSAPP_LINK} className="text-accent font-bold flex items-center hover:underline">
                  <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-5 h-5 mr-2" referrerPolicy="no-referrer" />
                  (47) 99625-0248
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-accent py-4">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-white text-xs gap-4">
            <p>© {new Date().getFullYear()} Odonto Poleza. Todos os direitos reservados.</p>
            <p>CNPJ: 29.444.093/0001-25</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-4 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-all duration-300 group"
      >
        <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-8 h-8 md:w-10 md:h-10" referrerPolicy="no-referrer" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Fale Conosco
        </span>
      </motion.a>
    </div>
  );
}
