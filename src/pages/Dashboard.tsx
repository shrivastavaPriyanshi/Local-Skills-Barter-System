import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Star, 
  BookOpen, 
  Calendar, 
  Bell, 
  TrendingUp,
  Award,
  MessageSquare,
  Edit,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Skills Offered", value: "5", icon: BookOpen, color: "text-primary" },
    { label: "Skills Learning", value: "3", icon: Star, color: "text-secondary" },
    { label: "Matches Found", value: "12", icon: Users, color: "text-success" },
    { label: "Sessions This Month", value: "8", icon: Calendar, color: "text-accent" },
  ];

  const notifications = [
    {
      id: 1,
      type: "match",
      message: "New skill match found: Sarah wants to learn React!",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "session",
      message: "Upcoming session with Marcus tomorrow at 3pm",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "community",
      message: "Community coding meetup this Saturday",
      time: "1 day ago",
      unread: false,
    },
  ];

  const recentMatches = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/api/placeholder/32/32",
      skill: "Wants to learn React",
      compatibility: 95,
    },
    {
      id: 2,
      name: "Marcus Thompson",
      avatar: "/api/placeholder/32/32", 
      skill: "Offers Cooking Lessons",
      compatibility: 88,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      avatar: "/api/placeholder/32/32",
      skill: "Spanish Language Exchange",
      compatibility: 92,
    },
  ];

  const gamificationData = {
    points: 1250,
    nextBadgePoints: 1500,
    level: "Community Helper",
    badges: ["Top Mentor", "Early Adopter", "5-Star Teacher"],
    progress: (1250 / 1500) * 100,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, Alex! 👋
              </h1>
              <p className="text-muted-foreground">
                Ready to share your skills and learn something new today?
              </p>
            </div>
            <Button asChild variant="hero">
              <Link to="/profile/edit">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Recent Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMatches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{match.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{match.name}</p>
                          <p className="text-sm text-muted-foreground">{match.skill}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="text-sm font-medium text-success">
                            {match.compatibility}% match
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/discover">
                      <Plus className="h-4 w-4 mr-2" />
                      Find More Matches
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-primary" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border rounded-lg transition-colors ${
                      notification.unread ? 'bg-primary/5 border-primary/20' : 'hover:bg-muted/50'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-foreground">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Gamification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {gamificationData.points}
                  </div>
                  <p className="text-sm text-muted-foreground">Skill Points</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">
                      Next Badge Progress
                    </span>
                    <span className="text-sm font-medium">
                      {gamificationData.points}/{gamificationData.nextBadgePoints}
                    </span>
                  </div>
                  <Progress value={gamificationData.progress} className="h-2" />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Your Badges</p>
                  <div className="flex flex-wrap gap-2">
                    {gamificationData.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        🏆 {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="default" className="w-full justify-start">
                  <Link to="/sessions/schedule">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule a Session
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/discover">
                    <Users className="h-4 w-4 mr-2" />
                    Browse Skills
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/profile/edit">
                    <Edit className="h-4 w-4 mr-2" />
                    Update Skills
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;