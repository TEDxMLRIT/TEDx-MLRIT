import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [college, setCollege] = useState("");



  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Register Now</h1>
                <p className="text-balance text-muted-foreground">
                  Get your tickets now!
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Sub Section</Label>
                <Input
                  id="subsection"
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">College</Label>
                <Select onValueChange={(value) => setCollege(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select College" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="MLRIT">MLRIT</SelectItem>
                    <SelectItem value="OTHERS">Others</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {college === "MLRIT" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">Year</Label>
                  <Input
                    id="year"
                    type="text"
                    placeholder="1"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Department</Label>
                  <Input
                    id="dept"
                    type="text"
                    placeholder="Computer Science"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Section</Label>
                  <Input
                    id="section"
                    type="text"
                    placeholder="A"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="name">Roll Number</Label>
                  <Input
                    id="roll"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </>}
              {college === "OTHERS" && <>
                <div className="grid gap-2">
                  <Label htmlFor="name">College Name</Label>
                  <Input
                    id="college"
                    type="text"
                    placeholder="JNTU Hyderabad"
                    required
                  />
                </div>
              </>}
              <Link to={"/register"}
                className="bg-[#E50914] text-white px-8 py-3 rounded-2xl text-center  hover:bg-[#E50914]/90 transition-colors text-lg whitespace-nowrap mt-4">
                Register Now
              </Link>

            </div>
          </form>
          <div className="relative hidden md:block">
            <img
              src="https://public.readdy.ai/ai/img_res/845b6a06d103e787ab65037b0342dc95.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By continuing, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
