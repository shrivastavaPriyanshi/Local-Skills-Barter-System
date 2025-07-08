import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import UserCard from "@/components/ui/user-card";
import { Search, Filter, Zap, Users, TrendingUp } from "lucide-react";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const skillCategories = [
    "Programming", "Design", "Languages", "Cooking", "Music", "Arts", "Sports", "Business"
  ];

  const aiRecommendations = [
    {
      id: "ai-1",
      name: "Sarah Chen",
      avatar: "/api/placeholder/48/48",
      bio: "Frontend developer passionate about React and UI/UX design. Always eager to learn new frameworks!",
      skillsOffered: ["React", "JavaScript", "UI Design"],
      skillsWanted: ["Node.js", "Python", "Guitar"],
      rating: 4.9,
      reviewCount: 24,
      isVerified: true,
      badges: ["Top Mentor", "Quick Responder"],
      matchReason: "Perfect complement to your backend skills"
    },
    {
      id: "ai-2", 
      name: "Marcus Thompson",
      avatar: "/api/placeholder/48/48",
      bio: "Professional chef and cooking instructor. Love sharing culinary traditions from around the world.",
      skillsOffered: ["Cooking", "Baking", "Meal Planning"],
      skillsWanted: ["Photography", "Video Editing", "Spanish"],
      rating: 4.8,
      reviewCount: 31,
      isVerified: true,
      badges: ["Community Favorite", "5-Star Teacher"],
      matchReason: "High availability overlap with your schedule"
    },
  ];

  const allUsers = [
    {
      id: "1",
      name: "Elena Rodriguez",
      avatar: "/api/placeholder/48/48",
      bio: "Bilingual teacher specializing in Spanish and English conversation. Love cultural exchange!",
      skillsOffered: ["Spanish", "English", "Cultural Exchange"],
      skillsWanted: ["Guitar", "Photography", "Cooking"],
      rating: 4.7,
      reviewCount: 18,
      isVerified: true,
      badges: ["Language Expert"],
    },
    {
      id: "2",
      name: "David Kim",
      avatar: "/api/placeholder/48/48",
      bio: "Software engineer and part-time photographer. Can teach programming fundamentals and photo editing.",
      skillsOffered: ["Python", "Photography", "Photo Editing"],
      skillsWanted: ["Music Production", "Guitar", "Japanese"],
      rating: 4.6,
      reviewCount: 15,
      isVerified: false,
      badges: ["Tech Mentor"],
    },
    {
      id: "3",
      name: "Lisa Johnson",
      avatar: "/api/placeholder/48/48",
      bio: "Yoga instructor and wellness coach. Passionate about mindfulness and healthy living.",
      skillsOffered: ["Yoga", "Meditation", "Wellness Coaching"],
      skillsWanted: ["Cooking", "Gardening", "Art"],
      rating: 4.9,
      reviewCount: 22,
      isVerified: true,
      badges: ["Wellness Expert", "Top Rated"],
    },
  ];

  const handleUserAction = (userId: string, action: string) => {
    console.log(`${action} user ${userId}`);
  };

  const trendingSkills = [
    { skill: "React", count: 45, trend: "up" },
    { skill: "Cooking", count: 38, trend: "up" },
    { skill: "Guitar", count: 32, trend: "stable" },
    { skill: "Spanish", count: 28, trend: "up" },
    { skill: "Photography", count: 25, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Discover Skills
          </h1>
          <p className="text-muted-foreground">
            Find amazing people to learn from and teach your skills to
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by skill name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    <SelectItem value="offered">Skills Offered</SelectItem>
                    <SelectItem value="wanted">Skills Wanted</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="rarity">Skill Rarity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Popular Categories:</p>
              <div className="flex flex-wrap gap-2">
                {skillCategories.map((category) => (
                  <Badge 
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {aiRecommendations.map((user) => (
                    <div key={user.id} className="space-y-3">
                      <UserCard
                        user={user}
                        onViewProfile={(id) => handleUserAction(id, "view")}
                        onStartChat={(id) => handleUserAction(id, "chat")}
                      />
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                        <div className="flex items-center text-sm text-primary">
                          <Zap className="h-4 w-4 mr-2" />
                          <span className="font-medium">AI Insight:</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {user.matchReason}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    All Members
                  </div>
                  <Badge variant="secondary">{allUsers.length + 12} results</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {allUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onViewProfile={(id) => handleUserAction(id, "view")}
                      onStartChat={(id) => handleUserAction(id, "chat")}
                    />
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Button variant="outline" size="lg">
                    Load More Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Trending Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingSkills.map((item, index) => (
                    <div key={item.skill} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-mono text-muted-foreground w-6">
                          #{index + 1}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {item.skill}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">
                          {item.count}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          item.trend === 'up' ? 'bg-success' : 
                          item.trend === 'down' ? 'bg-destructive' : 'bg-muted-foreground'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  Get AI Recommendations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;