import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Award, Briefcase, GraduationCap, ExternalLink, ChevronRight, Terminal, Server, Lock, Zap, Download } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [containerSize, setContainerSize] = useState(500);

  const roles = React.useMemo(() => [
  "Backend Developer 🚀",
  "Cloud Engineer ☁️",
  "DevOps Engineer 🔧"
], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) setContainerSize(300);
      else if (window.innerWidth < 768) setContainerSize(400);
      else setContainerSize(500);
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
  let index = 0;
  let isDeleting = false;
  let typingTimeout;

  const type = () => {
    const current = roles[roleIndex];

    if (!isDeleting && index <= current.length) {
      setTypedText(current.slice(0, index));
      index++;
      typingTimeout = setTimeout(type, 100);

    } else if (!isDeleting && index > current.length) {
      typingTimeout = setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000);

    } else if (isDeleting && index > 0) {
      setTypedText(current.slice(0, index));
      index--;
      typingTimeout = setTimeout(type, 50);

    } else if (isDeleting && index === 0) {
      isDeleting = false;
      setRoleIndex(prev => (prev + 1) % roles.length);
    }
  };

  type();

  const cursorInterval = setInterval(() => {
    setCursorVisible(prev => !prev);
  }, 500);

  return () => {
    clearTimeout(typingTimeout);
    clearInterval(cursorInterval);
  };
}, [roleIndex, roles]);


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    languages: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'SQL', level: 88 }
    ],
    backend: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'REST API', level: 95 },
      { name: 'GraphQL', level: 80 }
    ],
    databases: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 }
    ],
    cloud: [
      { name: 'Microsoft Azure', level: 88 },
      { name: 'Docker', level: 82 },
      { name: 'CI/CD', level: 85 }
    ]
  };

  const projects = [
    {
      title: 'Imly Studios',
      subtitle: 'E-commerce Backend Platform',
      description: 'Comprehensive e-commerce backend system with 50+ RESTful endpoints, handling product catalog, authentication, and order processing.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Azure', 'JWT'],
      metrics: ['10,000+ daily requests', '45% performance increase', '99.9% uptime']
    },
    {
      title: 'DealVisor',
      subtitle: 'Digital Signature Platform',
      description: 'Enterprise-grade digital signature platform with secure document management, multi-factor authentication, and audit trails.',
      tech: ['Node.js', 'PostgreSQL', 'Azure', 'Encryption'],
      metrics: ['10,000+ documents processed', '100% security compliance', 'Zero breaches']
    }
  ];

  const experience = {
    company: 'B2yinfy Solution Private Limited',
    role: 'Backend Developer',
    duration: 'Mar 2023 - Present (2.8 Years)',
    achievements: [
      'Developed and maintained 15+ RESTful APIs serving 10,000+ daily requests',
      'Reduced API response time by 40% through database query optimization',
      'Implemented secure authentication systems with JWT and role-based access control',
      'Successfully deployed 5+ applications on Microsoft Azure with 99.9% uptime',
      'Collaborated with cross-functional teams using Agile methodologies'
    ]
  };

  const techIcons = [
    { name: 'Node.js', color: '#68A063', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PostgreSQL', color: '#336791', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Express', color: '#000000', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'GitHub', color: '#181717', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'MySQL', color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Jenkins', color: '#D24939', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'MongoDB', color: '#47A248', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Azure', color: '#0089D6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Docker', color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postman', color: '#FF6C37', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Redis', color: '#DC382D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
  ];

  const center = containerSize / 2;
  const outerRadius = containerSize * 0.4;
  const outerLineRadius = outerRadius * 0.9;
  const innerRadius = containerSize * 0.24;
  const innerLineRadius = innerRadius * (100 / 120);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0d1117] to-[#1a1f3a] text-gray-300">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotateCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotateClockwiseReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes rotateCounterClockwiseReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 5s ease-in-out infinite;
        }
        
        .rotate-outer {
          animation: rotateClockwise 60s linear infinite;
        }
        
        .rotate-inner {
          animation: rotateCounterClockwise 40s linear infinite;
        }
        
        .rotate-outer-reverse {
          animation: rotateClockwiseReverse 60s linear infinite;
        }
        
        .rotate-inner-reverse {
          animation: rotateCounterClockwiseReverse 40s linear infinite;
        }
        
        .tech-icon {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-green {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {[...Array(100)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 4 + 4) + 's',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#161b22]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-[#667eea]" />
              <span className="text-xl font-bold text-white">Vinay<span className="text-[#667eea]">.dev</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${activeSection === item.toLowerCase() ? 'text-[#667eea]' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2]"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#161b22] border-t border-gray-800">
            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-sm hover:bg-[#21262d] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#667eea] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#38ef7d] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6">
            <div>
              <span className="text-lg text-gray-400 mb-3 block">Hey there! 👋</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in leading-tight">
                I'm <span className="gradient-text">Gaddam Vinay</span>
              </h1>
            </div>
            
            <div>
              <div className="text-2xl md:text-3xl h-12 flex items-center min-h-[3rem]">
                <span className="gradient-text-green font-semibold">{typedText}</span>
                <span className={`ml-1 text-[#667eea] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed animate-slide-up max-w-xl">
              I love learning new technologies and building solutions that make a difference. 
              With 2.8 years of experience specializing in Node.js, PostgreSQL, and Azure cloud infrastructure.
              <br/><br/>
              Thanks for visiting my portfolio! <span className="text-yellow-400 font-semibold">Happy coding..! 💻</span>
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <a href="#contact" className="flex items-center space-x-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#764ba2] hover:to-[#667eea] text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                <span className="font-semibold">Contact Me</span>
              </a>
              <a href="#resume" className="flex items-center space-x-2 border-2 border-[#667eea] hover:bg-[#667eea] text-[#667eea] hover:text-white px-6 py-3 rounded-lg transition-all font-semibold">
                <Download className="w-4 h-4" />
                <span>My Resume</span>
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#161b22] hover:bg-[#667eea] rounded-full transition-all transform hover:scale-110 border border-gray-800 hover:border-[#667eea]">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#161b22] hover:bg-[#667eea] rounded-full transition-all transform hover:scale-110 border border-gray-800 hover:border-[#667eea]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:gvinaybackend.developer@gmail.com" className="w-12 h-12 flex items-center justify-center bg-[#161b22] hover:bg-[#667eea] rounded-full transition-all transform hover:scale-110 border border-gray-800 hover:border-[#667eea]">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#contact" className="w-12 h-12 flex items-center justify-center bg-[#161b22] hover:bg-[#667eea] rounded-full transition-all transform hover:scale-110 border border-gray-800 hover:border-[#667eea]">
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Rotating Skills Circle */}
          <div className="relative flex items-center justify-center">
            <div className="relative" style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
              {/* Center SKILLS text */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className={`font-bold tracking-wider text-gray-700/30 ${containerSize < 400 ? 'text-3xl sm:text-4xl' : 'text-6xl'}`}>SKILLS</h2>
              </div>

              {/* Dotted circle paths */}
              <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
                {/* Outer dotted circle */}
                <circle
                  cx={center}
                  cy={center}
                  r={outerRadius}
                  fill="none"
                  stroke="#667eea"
                  strokeWidth="2"
                  strokeDasharray="5,10"
                  opacity="0.3"
                />
                {/* Inner dotted circle */}
                <circle
                  cx={center}
                  cy={center}
                  r={innerRadius}
                  fill="none"
                  stroke="#38ef7d"
                  strokeWidth="2"
                  strokeDasharray="5,10"
                  opacity="0.3"
                />
                
                {/* Connection lines from outer circle icons to circle */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                  const rad = angle * (Math.PI / 180);
                  const x1 = center + Math.cos(rad) * outerLineRadius;
                  const y1 = center + Math.sin(rad) * outerLineRadius;
                  const x2 = center + Math.cos(rad) * outerRadius;
                  const y2 = center + Math.sin(rad) * outerRadius;
                  return (
                    <line
                      key={`outer-line-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#667eea"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.4"
                    />
                  );
                })}
                
                {/* Connection lines from inner circle icons to circle */}
                {[0, 60, 120, 180, 240, 300].map((angle, index) => {
                  const rad = angle * (Math.PI / 180);
                  const x1 = center + Math.cos(rad) * innerLineRadius;
                  const y1 = center + Math.sin(rad) * innerLineRadius;
                  const x2 = center + Math.cos(rad) * innerRadius;
                  const y2 = center + Math.sin(rad) * innerRadius;
                  return (
                    <line
                      key={`inner-line-${index}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#38ef7d"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.4"
                    />
                  );
                })}
              </svg>

              {/* Outer rotating circle */}
              <div className="absolute inset-0 rotate-outer">
                {techIcons.slice(0, 6).map((tech, index) => {
                  const angle = (index * 360) / 6;
                  const rad = (angle - 90) * (Math.PI / 180);
                  const x = Math.cos(rad) * outerRadius;
                  const y = Math.sin(rad) * outerRadius;
                  
                  return (
                    <div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="rotate-outer-reverse">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1a1f3a] to-[#161b22] rounded-full flex flex-col items-center justify-center border-2 border-gray-800/50 hover:border-[#667eea] transition-all shadow-2xl hover:shadow-[#667eea]/30 group p-2 ${containerSize < 400 ? 'p-1' : ''}`}>
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className={`w-8 h-8 sm:w-10 sm:h-10 object-contain mb-1 group-hover:scale-110 transition-transform ${containerSize < 400 ? 'w-6 h-6 mb-0.5' : ''}`}
                            style={{ filter: (tech.name === 'Express' || tech.name === 'GitHub') ? 'invert(1)' : 'none' }}
                          />
                          <span className={`text-[8px] sm:text-[9px] text-gray-400 group-hover:text-[#667eea] transition-colors font-medium text-center leading-tight ${containerSize < 400 ? 'text-[7px]' : ''}`}>{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Inner counter-rotating circle */}
              <div className="absolute inset-0 rotate-inner">
                {techIcons.slice(6).map((tech, index) => {
                  const angle = (index * 360) / 6;
                  const rad = (angle - 90) * (Math.PI / 180);
                  const x = Math.cos(rad) * innerRadius;
                  const y = Math.sin(rad) * innerRadius;
                  
                  return (
                    <div
                      key={tech.name}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="rotate-inner-reverse">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1a1f3a] to-[#161b22] rounded-full flex flex-col items-center justify-center border-2 border-gray-800/50 hover:border-[#38ef7d] transition-all shadow-2xl hover:shadow-[#38ef7d]/30 group p-1 sm:p-2 ${containerSize < 400 ? 'w-10 h-10 p-0.5' : ''}`}>
                          <img 
                            src={tech.icon} 
                            alt={tech.name}
                            className={`w-6 h-6 sm:w-8 sm:h-8 object-contain mb-0.5 group-hover:scale-110 transition-transform ${containerSize < 400 ? 'w-5 h-5' : ''}`}
                          />
                          <span className={`text-[7px] sm:text-[8px] text-gray-400 group-hover:text-[#38ef7d] transition-colors font-medium text-center leading-tight ${containerSize < 400 ? 'text-[6px]' : ''}`}>{tech.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#667eea] rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-8 left-12 w-2 h-2 bg-[#38ef7d] rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 right-8 w-2 h-2 bg-[#764ba2] rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#0d1117]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Building scalable backend solutions with passion and precision</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800 hover:border-[#667eea] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#667eea]/20">
              <Zap className="w-12 h-12 text-[#667eea] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-400 leading-relaxed">
                Experienced Backend Developer with 2.8 years of hands-on experience in building scalable web applications and RESTful APIs. Currently working at B2yinfy Solution Private Limited, specializing in Node.js ecosystem and cloud deployment with a proven track record of delivering high-performance solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800 hover:border-[#38ef7d] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#38ef7d]/20">
              <Award className="w-12 h-12 text-[#38ef7d] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#38ef7d] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Successfully delivered 8+ projects with zero production incidents</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#38ef7d] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mentored 3 junior developers in backend development</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#38ef7d] mr-2 flex-shrink-0 mt-0.5" />
                  <span>Active contributor to open-source projects</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">15+</div>
                <div className="text-gray-400 font-medium">APIs Developed</div>
              </div>
              <div className="text-center md:border-l md:border-r border-gray-800">
                <div className="text-5xl font-bold gradient-text-green mb-2">10K+</div>
                <div className="text-gray-400 font-medium">Daily Requests</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-gray-400 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Professional journey and accomplishments</p>
          
          <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800 shadow-2xl">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                <p className="text-[#667eea] text-lg font-medium">{experience.company}</p>
                <p className="text-gray-500 text-sm mt-1">{experience.duration}</p>
              </div>
            </div>

            <div className="space-y-4">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-[#38ef7d] mr-3 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[#38ef7d] to-[#11998e] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-gray-400">Siddhartha Institute of Engineering and Technology, Puttur</p>
                <p className="text-gray-500 text-sm mt-1">Graduated 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-[#0d1117]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Showcasing my best work and technical expertise</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800 hover:border-[#667eea] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#667eea]/20 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {index === 0 ? <Server className="w-7 h-7 text-white" /> : <Lock className="w-7 h-7 text-white" />}
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-[#667eea] transition-colors" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-[#667eea] text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#21262d] text-[#667eea] text-sm rounded-full border border-gray-800 hover:border-[#667eea] transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-[#38ef7d] rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Expertise in modern backend technologies</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] rounded-2xl p-8 border border-gray-800 hover:shadow-2xl hover:shadow-[#667eea]/10 transition-all">
                <div className="flex items-center mb-6">
                  {category === 'languages' && <Code className="w-7 h-7 text-[#667eea] mr-3" />}
                  {category === 'backend' && <Server className="w-7 h-7 text-[#38ef7d] mr-3" />}
                  {category === 'databases' && <Database className="w-7 h-7 text-[#667eea] mr-3" />}
                  {category === 'cloud' && <Cloud className="w-7 h-7 text-[#38ef7d] mr-3" />}
                  <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
                </div>
                
                <div className="space-y-5">
                  {skillList.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-[#667eea] font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#21262d] rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0d1117]/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Available for immediate joining with 15 days notice period. Let's discuss how I can contribute to your team!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:gvinaybackend.developer@gmail.com" className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] p-6 rounded-2xl border border-gray-800 hover:border-[#667eea] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#667eea]/20 group">
              <Mail className="w-10 h-10 text-[#667eea] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold mb-2">Email</p>
              <p className="text-gray-400 text-sm break-all">gvinaybackend.developer@gmail.com</p>
            </a>
            
            <a href="tel:+919121747154" className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] p-6 rounded-2xl border border-gray-800 hover:border-[#38ef7d] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#38ef7d]/20 group">
              <Phone className="w-10 h-10 text-[#38ef7d] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold mb-2">Phone</p>
              <p className="text-gray-400 text-sm">+91 9121747154</p>
            </a>
            
            <div className="bg-gradient-to-br from-[#161b22] to-[#1a1f3a] p-6 rounded-2xl border border-gray-800 hover:border-[#667eea] transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#667eea]/20 group">
              <MapPin className="w-10 h-10 text-[#667eea] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold mb-2">Location</p>
              <p className="text-gray-400 text-sm">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#010409] py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-4">© 2024 Gaddam Vinay. Built with React & Tailwind CSS</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-500 hover:text-[#667eea] transition-colors">GitHub</a>
            <span className="text-gray-700">•</span>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-[#667eea] transition-colors">LinkedIn</a>
            <span className="text-gray-700">•</span>
            <a href="mailto:gvinaybackend.developer@gmail.com" className="text-gray-500 hover:text-[#667eea] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio