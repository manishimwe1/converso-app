// "use client";
// import { removeBookmark } from "@/lib/actions/companion.actions";
// import { addBookmark } from "@/lib/actions/companion.actions";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// interface CompanionCardProps {
//   id: string;
//   name: string;
//   topic: string;
//   subject: string;
//   duration: number;
//   color: string;
//   bookmarked: boolean;
// }

// const CompanionCard = ({
//   id,
//   name,
//   topic,
//   subject,
//   duration,
//   color,
//   bookmarked,
// }: CompanionCardProps) => {
//   const pathname = usePathname();
//   const handleBookmark = async () => {
//     if (bookmarked) {
//       await removeBookmark(id, pathname);
//     } else {
//       await addBookmark(id, pathname);
//     }
//   };
//   return (
//     <article className="companion-card" style={{ backgroundColor: color }}>
//       <div className="flex justify-between items-center">
//         <div className="subject-badge">{subject}</div>
//         <button className="companion-bookmark" onClick={handleBookmark}>
//           <Image
//             src={
//               bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
//             }
//             alt="bookmark"
//             width={12.5}
//             height={15}
//           />
//         </button>
//       </div>

//       <h2 className="text-2xl font-bold">{name}</h2>
//       <p className="text-sm">{topic}</p>
//       <div className="flex items-center gap-2">
//         <Image
//           src="/icons/clock.svg"
//           alt="duration"
//           width={13.5}
//           height={13.5}
//         />
//         <p className="text-sm">{duration} minutes</p>
//       </div>

//       <Link href={`/companions/${id}`} className="w-full">
//         <button className="btn-primary w-full justify-center">
//           Launch Lesson
//         </button>
//       </Link>
//     </article>
//   );
// };

// export default CompanionCard;



"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Heart, Play, Users } from "lucide-react";
import { Badge } from "./ui/badge";
import { getLucideIcon, LucideIcon } from "@/lib/utils";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
  
}: CompanionCardProps) => {
  const pathname = usePathname();
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
    } else {
      await addBookmark(id, pathname);
    }
  }
  const Icon = getLucideIcon(subject)
  
  return (
    
    <Card
      key={id}
      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div
            className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-3`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <Badge variant="secondary" className="bg-gray-100 text-gray-600 group-hover:bg-emerald-600 transition-all group-hover:text-white delay-150 duration-100">
            {subject}
          </Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-emerald-600 transition-colors">{topic}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {(1000).toLocaleString()}
          </div>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer">
          <Play className="w-4 h-4 mr-2" />
          Start Session
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CompanionCard;
