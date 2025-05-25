import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Lightbulb,
    Plus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <Card className="hidden min-lg:flex border-0 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Build Your Own Companion</h3>
          <p className="text-gray-300 text-sm mb-6">
            Create a personalized AI learning companion tailored to your
            specific goals and interests.
          </p>

          <div>
            <Image
              src="images/cta.svg"
              className="object-contain"
              alt="cta"
              width={362}
              height={232}
            />
          </div>
          <Link href="/companions/new">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
              <Plus className="w-4 h-4 mr-2" />
              Build New Companion
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default Cta;
