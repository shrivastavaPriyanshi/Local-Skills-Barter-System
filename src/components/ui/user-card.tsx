import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SkillBadge from "./skill-badge";
import { Star, Shield, User } from "lucide-react";

interface UserCardProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    bio: string;
    skillsOffered: string[];
    skillsWanted: string[];
    rating: number;
    reviewCount: number;
    isVerified: boolean;
    badges: string[];
  };
  onViewProfile: (userId: string) => void;
  onStartChat: (userId: string) => void;
}

const UserCard = ({ user, onViewProfile, onStartChat }: UserCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            {user.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                <Shield className="h-3 w-3 text-success-foreground" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-foreground truncate">{user.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm text-muted-foreground">
                  {user.rating} ({user.reviewCount})
                </span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{user.bio}</p>
            
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Offers:</p>
                <div className="flex flex-wrap gap-1">
                  {user.skillsOffered.slice(0, 3).map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="offered" />
                  ))}
                  {user.skillsOffered.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{user.skillsOffered.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
              
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Wants:</p>
                <div className="flex flex-wrap gap-1">
                  {user.skillsWanted.slice(0, 3).map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="wanted" />
                  ))}
                  {user.skillsWanted.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{user.skillsWanted.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {user.badges.length > 0 && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-1">
                  {user.badges.slice(0, 2).map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex space-x-2 mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onViewProfile(user.id)}
                className="flex-1"
              >
                View Profile
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => onStartChat(user.id)}
                className="flex-1"
              >
                Start Chat
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;