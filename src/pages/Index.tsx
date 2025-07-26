import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Database, 
  Globe, 
  Brain, 
  Lock, 
  Heart, 
  Building, 
  TrendingUp, 
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import dataVisualization from '@/assets/data-visualization.jpg';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import secureRecords from '@/assets/secure-records.jpg';
import medical from '@/assets/Medical .jpeg';
import Doctor from '@/assets/DrTeam.jpeg';
import Person from '@/assets/Person.jpeg';
import emailjs from '@emailjs/browser';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_hk1kj74', // replace with your EmailJS service ID
        'template_cahg9hq', // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        },
        'NxEtvz5sak7nayV8Q' // replace with your EmailJS public key
      );
      setSubmitted(true);
    } catch (error) {
      alert('Failed to send email. Please try again later.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">CONPERCLIDATOOL</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('tool')} className="text-foreground hover:text-primary transition-colors">The Tool</button>
              <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">Features</button>
              <button onClick={() => scrollToSection('stakeholders')} className="text-foreground hover:text-primary transition-colors">Stakeholders</button>
              <button onClick={() => scrollToSection('impact')} className="text-foreground hover:text-primary transition-colors">Impact</button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-3 mt-4">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors">About</button>
                <button onClick={() => scrollToSection('tool')} className="text-left py-2 text-foreground hover:text-primary transition-colors">The Tool</button>
                <button onClick={() => scrollToSection('features')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Features</button>
                <button onClick={() => scrollToSection('stakeholders')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Stakeholders</button>
                <button onClick={() => scrollToSection('impact')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Impact</button>
                <button onClick={() => scrollToSection('faq')} className="text-left py-2 text-foreground hover:text-primary transition-colors">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-foreground hover:text-primary transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-secondary to-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="mb-4">National Digital Health Platform</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary">Empowering Patients.</span><br />
                  <span className="text-accent">Supporting Providers.</span><br />
                  <span className="text-foreground">Transforming Healthcare.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Secure, cloud-based platform enabling patients to store, manage, and share their complete medical history 
                  with healthcare providers globally while maintaining full control and privacy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="medical" 
                  size="xl"
                  onClick={() => scrollToSection('tool')}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Healthcare Technology Platform" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* The Tool Section */}
      <section id="tool" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">How CONPERCLIDATOOL Works</h2>
              <p className="text-xl text-muted-foreground">
                Revolutionary technology that makes healthcare data accessible, secure, and patient-controlled
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Centralized Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Secure cloud-based storage that aggregates medical records from all healthcare providers into a single, comprehensive patient profile.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Patient Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Patients maintain complete control over their data, granting and revoking access permissions to healthcare providers as needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Global Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Authorized healthcare providers can access patient records globally, enabling seamless care during travel or emergencies.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={secureRecords} 
                alt="Secure Digital Health Records" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <h3 className="text-3xl font-bold">Revolutionary Healthcare Technology</h3>
                  <p className="text-lg opacity-90">Built for the future of patient-centered care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* About Us Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">About Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Transforming fragmented healthcare data systems into a unified, patient-controlled ecosystem
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-semibold text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healthcare systems worldwide struggle with fragmented patient data, leading to incomplete medical histories, 
                  delayed treatments, and compromised patient care. Medical records are scattered across different providers, 
                  making it nearly impossible for patients and doctors to access complete health information when it matters most.
                </p>
                
                <h3 className="text-2xl font-semibold text-accent">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CONPERCLIDATOOL creates a secure, unified digital health record system that puts patients in control of their 
                  medical data while enabling seamless, authorized access for healthcare providers globally. We're building the 
                  infrastructure for truly connected, coordinated healthcare delivery.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src={medical} 
                  alt="Healthcare Data Visualization" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">Key Features</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive capabilities designed for modern healthcare delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Real-Time Data Access",
                  description: "Instant access to patient medical history, lab results, and treatment plans from any authorized device."
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Secure Patient Consent",
                  description: "Advanced consent management allowing patients to control exactly what information is shared with whom."
                },
                {
                  icon: <Building className="w-6 h-6" />,
                  title: "Healthcare Integration",
                  description: "Seamless integration with hospitals, labs, pharmacies, and other healthcare providers."
                },
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "AI-Powered Alerts",
                  description: "Intelligent safety alerts for drug interactions, allergies, and potential health risks."
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Cross-Border Compatibility",
                  description: "International standards compliance enabling healthcare access while traveling abroad."
                },
                {
                  icon: <FileText className="w-6 h-6" />,
                  title: "Offline Access",
                  description: "Critical medical information available offline for emergency situations without internet connectivity."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Multi-Provider Coordination",
                  description: "Enable multiple healthcare providers to collaborate on patient care with shared access to relevant data."
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Data Synchronization",
                  description: "Automatic syncing of new medical records, test results, and treatment updates across all platforms."
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "National ID Integration",
                  description: "Secure integration with national identification systems for verified patient identity and access."
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholders Section */}
      <section id="stakeholders" className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">Who Benefits</h2>
              <p className="text-xl text-muted-foreground">
                Creating value for every participant in the healthcare ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Patients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Complete control over medical data</p>
                  <p className="text-sm text-muted-foreground">Faster, more accurate diagnoses</p>
                  <p className="text-sm text-muted-foreground">Seamless care transitions</p>
                  <p className="text-sm text-muted-foreground">Emergency access to records</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Healthcare Providers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Complete patient history access</p>
                  <p className="text-sm text-muted-foreground">Improved care coordination</p>
                  <p className="text-sm text-muted-foreground">Reduced medical errors</p>
                  <p className="text-sm text-muted-foreground">Enhanced clinical decisions</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Healthcare Facilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Streamlined operations</p>
                  <p className="text-sm text-muted-foreground">Reduced administrative costs</p>
                  <p className="text-sm text-muted-foreground">Better patient outcomes</p>
                  <p className="text-sm text-muted-foreground">Improved efficiency</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Business Partners</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Integration opportunities</p>
                  <p className="text-sm text-muted-foreground">Data-driven insights</p>
                  <p className="text-sm text-muted-foreground">Market expansion</p>
                  <p className="text-sm text-muted-foreground">Innovation partnerships</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Socio-Economic Impact Section */}
      <section id="impact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">Socio-Economic Impact</h2>
              <p className="text-xl text-muted-foreground">
                Driving positive change across society through better healthcare technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Improved Public Health</h3>
                      <p className="text-muted-foreground">Enhanced disease prevention, faster outbreak detection, and better population health management through comprehensive data insights.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Job Creation</h3>
                      <p className="text-muted-foreground">New employment opportunities in healthcare technology, data management, and digital health services across the economy.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Reduced Healthcare Costs</h3>
                      <p className="text-muted-foreground">Elimination of duplicate tests, reduced medical errors, and improved efficiency leading to significant cost savings system-wide.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mt-1">
                      <Database className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Data for Policy-Making</h3>
                      <p className="text-muted-foreground">Comprehensive health data enabling evidence-based policy decisions and strategic healthcare planning at national levels.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={Doctor} 
                  alt="Healthcare Team Collaboration" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Transforming Healthcare for Everyone</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                By creating a unified, patient-controlled health data ecosystem, CONPERCLIDATOOL is not just improving individual healthcare experiences—we're building the foundation for a healthier, more connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about CONPERCLIDATOOL
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="security" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  How secure is my medical data on CONPERCLIDATOOL?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  CONPERCLIDATOOL employs bank-level encryption, multi-factor authentication, and complies with international healthcare data protection standards including HIPAA, GDPR, and local regulations. All data is encrypted both in transit and at rest, with regular security audits and penetration testing to ensure the highest level of protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="offline" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  Can I access my records when there's no internet connection?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Yes, CONPERCLIDATOOL includes offline access capabilities for critical medical information. Emergency medical data, allergies, medications, and key health information are securely cached on your device and available even without internet connectivity. Full records sync automatically when connection is restored.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cross-border" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  How does cross-border data access work when traveling?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  CONPERCLIDATOOL is designed with international healthcare standards in mind. When traveling, authorized healthcare providers abroad can access your medical records with your consent, following local data protection laws. The system automatically handles compliance requirements and ensures seamless care delivery regardless of your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="control" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  What level of control do I have over my data?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  You have complete control over your medical data. You can grant or revoke access to specific healthcare providers, choose what information to share, set time-limited access permissions, and monitor who has viewed your records. You can also request data deletion in accordance with applicable laws and export your data at any time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="integration" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  How does CONPERCLIDATOOL integrate with existing hospital systems?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  CONPERCLIDATOOL uses standardized healthcare APIs (HL7 FHIR) and electronic health record (EHR) integration protocols to seamlessly connect with existing hospital management systems, laboratory information systems, and pharmacy networks. This ensures minimal disruption to current workflows while providing enhanced data accessibility.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-card rounded-lg p-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold">
                  What are the costs for patients and healthcare providers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  CONPERCLIDATOOL is designed to be accessible to all. Basic patient access is provided at minimal cost or through healthcare system partnerships. Healthcare providers benefit from reduced administrative costs and improved efficiency that often offset integration expenses. Detailed pricing is available through our consultation process.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Dedicated professionals driving healthcare innovation
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {/* Example team members, update as needed */}
              <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src={Person} alt="Dr. Jane Doe" className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary" />
                <h3 className="text-xl font-semibold text-primary">Ntlogeleng Trevor Majoro</h3>
                <p className="text-muted-foreground">CEO</p>
              </div>
              <div className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src={Person} alt="John Smith" className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-accent" />
                <h3 className="text-xl font-semibold text-accent">Ndumiso Macbeth Ndaba</h3>
                <p className="text-muted-foreground">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-foreground">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Ready to transform healthcare? Let's discuss how CONPERCLIDATOOL can work for you.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>Phone</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">011 123 76545</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>Email</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">info@conperclidatool.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Healthcare Innovation Center</p>
                    <p className="text-muted-foreground">123 Medical District Ave</p>
                    <p className="text-muted-foreground">Health City, HC 12345</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Request a Prototype</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you with information about accessing CONPERCLIDATOOL.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Dr. John Smith"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john.smith@hospital.com"
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                          Organization
                        </label>
                        <Input
                          id="organization"
                          name="organization"
                          type="text"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="Metropolitan General Hospital"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your specific needs and how we can help..."
                          rows={5}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button type="submit" variant="hero" size="lg" className="flex-1">
                          Request Prototype
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button type="button" variant="medical" size="lg" className="flex-1">
                          Schedule Demo
                        </Button>
                      </div>
                      {submitted && (
                        <div className="mt-4 text-green-600 font-semibold text-center">
                          Thank you! Your request has been received. We'll contact you soon.
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;