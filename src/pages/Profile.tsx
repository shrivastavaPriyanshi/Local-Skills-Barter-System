import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import SkillBadge from "@/components/ui/skill-badge";
import { 
  Edit, 
  Star, 
  Shield, 
  MapPin, 
  Calendar,
  Award,
  MessageSquare,
  Users,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const userProfile = {
    name: "Alex Johnson",
    avatar: "/api/placeholder/120/120",
    bio: "Full-stack developer with 5 years of experience. Passionate about teaching and learning new technologies. Love sharing knowledge about web development and always excited to learn creative skills like music and art.",
    location: "San Francisco, CA",
    joinedDate: "March 2023",
    isVerified: true,
    trustScore: 4.8,
    totalReviews: 32,
    skillsOffered: [
      "React", "JavaScript", "Node.js", "Python", "UI/UX Design", "Database Design"
    ],
    skillsWanted: [
      "Guitar", "Spanish", "Photography", "Cooking", "Drawing"
    ],
    skillCredits: 1250,
    badges: [
      "Top Mentor",
      "Early Adopter", 
      "5-Star Teacher",
      "Community Helper",
      "Quick Responder"
    ],
    stats: {
      sessionsCompleted: 45,
      studentsHelped: 28,
      skillsLearned: 6,
      pointsEarned: 1250
    }
  };

  const recentReviews = [
    {
      id: 1,
      reviewer: "Sarah Chen",
      rating: 5,
      skill: "React Development",
      comment: "Alex is an amazing teacher! Made complex React concepts super easy to understand. Highly recommend!",
      date: "2 days ago",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 2,
      reviewer: "Marcus Thompson",
      rating: 5,
      skill: "JavaScript Fundamentals", 
      comment: "Patient and knowledgeable. Great at breaking down problems into manageable pieces.",
      date: "1 week ago",
      avatar: "/api/placeholder/32/32"
    },
    {
      id: 3,
      reviewer: "Elena Rodriguez",
      rating: 4,
      skill: "UI Design",
      comment: "Learned so much about design principles. Alex has a great eye for user experience.",
      date: "2 weeks ago",
      avatar: "/api/placeholder/32/32"
    }
  ];

  const achievements = [
    {
      title: "Teaching Streak",
      description: "15 consecutive successful sessions",
      progress: 75,
      target: 20
    },
    {
      title: "Student Satisfaction",
      description: "Maintaining 4.8+ star rating",
      progress: 96,
      target: 100
    },
    {
      title: "Skill Diversity",
      description: "Teaching 6 different skills",
      progress: 60,
      target: 10
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                      <AvatarFallback className="text-2xl">
                        {userProfile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {userProfile.isVerified && (
                      <div className="absolute -bottom-2 -right-2 bg-success rounded-full p-2">
                        <Shield className="h-4 w-4 text-success-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-foreground">{userProfile.name}</h1>
                        <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="font-medium">{userProfile.trustScore}</span>
                            <span>({userProfile.totalReviews} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{userProfile.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="hero">
                        <Link to="/profile/edit">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Link>
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {userProfile.bio}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {userProfile.joinedDate}</span>
                      </div>
                      <Badge className="bg-success/10 text-success hover:bg-success/20">
                        Verified Member
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills I Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skillsOffered.map((skill) => (
                      <SkillBadge key={skill} skill={skill} type="offered" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills I Want to Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.skillsWanted.map((skill) => (
                      <SkillBadge key={skill} skill={skill} type="wanted" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Reviews</span>
                  <Badge variant="secondary">{userProfile.totalReviews} total</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {review.reviewer.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <p className="font-medium text-foreground">{review.reviewer}</p>
                              <p className="text-xs text-muted-foreground">{review.skill}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground italic">
                            "{review.comment}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  View All Reviews
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  My Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {userProfile.stats.sessionsCompleted}
                    </div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {userProfile.stats.studentsHelped}
                    </div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">
                      {userProfile.stats.skillsLearned}
                    </div>
                    <div className="text-xs text-muted-foreground">Learned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      {userProfile.stats.pointsEarned}
                    </div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skill Credits */}
            <Card>
              <CardHeader>
                <CardTitle>Skill Credits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {userProfile.skillCredits}
                  </div>
                  <p className="text-sm text-muted-foreground">Available Credits</p>
                </div>
                <Button variant="outline" className="w-full">
                  View Transaction History
                </Button>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userProfile.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                      🏆 {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium text-foreground">
                        {achievement.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(achievement.progress)}/100
                      </span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button variant="default" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Schedule Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;