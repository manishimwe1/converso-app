import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import {
  getAllCompanionInDb,
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor, timeAgo } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Code,
  Mic,
  Play,
  Plus,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export default async function HomePage() {
  const companions = await getAllCompanions({ limit: 3 });
  const Allcompanions = await getAllCompanionInDb();
  const recentSessionsCompanions: Companion[] = await getRecentSessions(10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-6 py-5 md:py-10">
          {/* for mobile only */}

        <div className="w-full h-fit flex items-end justify-end min-lg:hidden mb-5">
          <Link href="/companions/new">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              Build New Companion
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
                  <p className="text-emerald-100 text-lg mb-6">
                    Ready to continue your learning therapy? Your AI companions
                    are waiting.
                  </p>
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold">
                    <Play className="w-4 h-4 mr-2" />
                    Continue therapy
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center">
                    <Mic className="w-16 h-16 text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Total Sessions
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {Allcompanions?.length}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        Learning Streak
                      </p>
                      <p className="text-2xl font-bold text-gray-900">7 days</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Achievements</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Popular Companions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Popular Companions
                </h2>
                <Button
                  variant="ghost"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {companions.map((companion) => (
                  <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                  />
                ))}
              </div>
            </div>

            {/* Recent Sessions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Recently Completed Sessions
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {recentSessionsCompanions.map(
                      (session: Companion, index) => (
                        <div
                          key={session.id + index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer gap-4 md:gap-8"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 !shrink-0 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div className="">
                              <h3 className="font-semibold text-gray-900 line-clamp-1">
                                {session.topic}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {session.subject} • {session.duration}
                              </p>
                            </div>
                          </div>
                          <div className="text-right w-fit">
                            <div className="flex items-center text-sm text-gray-500 mb-1 text-nowrap">
                              <Calendar className="w-4 h-4 mr-1" />
                              {timeAgo(session.created_at)}
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-700">
                              Completed
                            </Badge>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Create Companion Card */}
            <CTA />

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  <BookOpen className="w-4 h-4 mr-3" />
                  Browse All Companions
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  <TrendingUp className="w-4 h-4 mr-3" />
                  View Progress
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  <Award className="w-4 h-4 mr-3" />
                  My Achievements
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  <Users className="w-4 h-4 mr-3" />
                  Community
                </Button>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                  Learning Streak
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    7
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Days in a row!</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// const Page = async () => {
//     const companions = await getAllCompanions({ limit: 3 });
//     const recentSessionsCompanions = await getRecentSessions(10);
//   if(!companions) return(
//     <p>no companions yet</p>
//   )
//   return (
//     <main>
//       <h1>Popular Companions</h1>

//         <section className="home-section">
//             {companions.map((companion) => (
//                 <CompanionCard
//                     key={companion.id}
//                     {...companion}
//                     color={getSubjectColor(companion.subject)}
//                 />
//             ))}

//         </section>

//         <section className="home-section">
//             <CompanionsList
//                 title="Recently completed sessions"
//                 companions={recentSessionsCompanions}
//                 classNames="w-2/3 max-lg:w-full"
//             />
//             <CTA />
//         </section>
//     </main>
//   )
// }

// export default Page
