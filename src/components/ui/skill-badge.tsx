import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  type: "offered" | "wanted";
  className?: string;
}

const SkillBadge = ({ skill, type, className }: SkillBadgeProps) => {
  return (
    <Badge
      variant={type === "offered" ? "default" : "secondary"}
      className={cn(
        "rounded-full text-xs font-medium",
        type === "offered" 
          ? "bg-primary/10 text-primary hover:bg-primary/20" 
          : "bg-secondary/80 text-secondary-foreground hover:bg-secondary",
        className
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;