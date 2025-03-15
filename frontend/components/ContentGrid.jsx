import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function ContentGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item?.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{item?.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <div className="divide-x divide-gray-200 ">
              {item?.tags.map((tag) => (
                <span key={tag} className="text-sm/6 text-gray-500">
                  {tag}
                </span>
              ))}
              {item?.actions?.map((action) => (
               <Button key={action.label} type={action.type}>

                  {action.label}
               </Button>
              )
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
