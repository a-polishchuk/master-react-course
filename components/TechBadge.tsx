import { Badge } from "./ui/badge";

export function TechBadge({ name }: { name: string }) {
    return <Badge className="text-sm">{name}</Badge>
}