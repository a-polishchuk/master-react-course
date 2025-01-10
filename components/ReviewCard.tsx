import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export type ReviewCardProps = {
    text: string;
    author: string;
}

export function ReviewCard({ text, author }: ReviewCardProps) {
    return (
        <Card className="min-w-[300px] md:min-w-[350px] md:w-[25%]">
            <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">{author}</p>
                    <div className="flex">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 mb-2">
                    {text}
                </p>
            </CardContent>
        </Card>
    )
}
