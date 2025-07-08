import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Zap, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      skill: "Learned Guitar",
      text: "I traded my web design skills to learn guitar. Made a great friend in the process!",
      rating: 5,
    },
    {
      name: "Marcus Thompson", 
      skill: "Taught Cooking",
      text: "Teaching cooking has been so rewarding. The community here is amazing.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      skill: "Language Exchange",
      text: "Perfect for practicing Spanish while teaching English. Win-win!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with neighbors who share your interests and passions"
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "Verified profiles and community reviews ensure your safety"
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Smart recommendations find your perfect skill exchange partners"
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "List the skills you can teach and what you'd like to learn"
    },
    {
      step: "2", 
      title: "Find Your Match",
      description: "Browse skilled community members or get AI recommendations"
    },
    {
      step: "3",
      title: "Start Learning",
      description: "Schedule sessions and begin your skill exchange journey"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  🌟 Join 10,000+ Skill Sharers
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Local Skills 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Barter System</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Swap your skills. Learn something new. No money needed.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg" className="text-lg px-8">
                  <Link to="/signup">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-success" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-success" />
                  <span>Verified members</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="h-4 w-4 text-success" />
                  <span>Safe & secure</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="Community skill sharing" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Choose SkillSwap?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a thriving community where everyone has something valuable to share
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
                    {step.step}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform -translate-x-8" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              What Our Community Says
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from real skill swappers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.skill}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
              Ready to Start Your Skill Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of learners and teachers in our vibrant community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="text-lg px-8">
                <Link to="/signup">
                  Join Free Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/discover">
                  Explore Skills
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;