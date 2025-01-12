import PixelImage from "./PixelImage";
import Image from "next/image";
import balak from "@/assets/images/balak-1.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

const CodeChefHeader = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill out both fields.");
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Email", email);

      const response = await axios.post("/api/sheets", formData);
      if (response.data) {
        toast.success(
          "Thank you for your interest! We will reach out to you soon."
        );
        setName("");
        setEmail("");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-transparent min-h-screen flex justify-center items-center p-4">
      {/* Outer Container */}
      <div className="w-full relative p-4 md:p-8">
        {/* Main Box */}
        <div className="relative border border-black">
          {/* Top Left Corner */}
          <div className="absolute top-0 left-0">
            <div className="relative border-r border-b border-black md:px-4 pxl-4 py-2 inline-block">
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -right-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -right-1"></div>
              <h1 className="font-enigma font-bold text-sm md:text-xl tracking-widest">
                CODECHEF-VIT
              </h1>
            </div>
          </div>

          {/* Responsive CODECHEF Newsletter Button */}
          <div className="absolute top-0 right-0 hidden md:block">
            <div className="relative border-l border-b border-black md:px-4 pxl-4 py-2 inline-block cursor-pointer">
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -top-1 -right-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -left-1"></div>
              <div className="absolute w-1.5 h-1.5 bg-black -bottom-1 -right-1"></div>
              <Dialog>
                <DialogTrigger asChild>
                  <h1 className="font-enigma font-bold text-sm md:text-xl tracking-widest">
                    CODECHEF NewsLetter
                  </h1>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Subscribe to our Newsletter</DialogTitle>
                    <DialogDescription>
                      Stay updated with the latest events and updates from
                      CODECHEF-VIT.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" disabled={loading} onClick={handleSubmit}>Subscribe</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Main Text */}
          <div className="mt-16 mb-20 px-4">
            <h2 className="mt-10 font-enigma text-xl md:text-4xl font-bold leading-tight text-black">
              WE'RE CODECHEF-VIT <br />
              A MULTIDISCIPLINARY TECHNICAL <br />
              CLUB ESTABLISHED IN <br />
              VELLORE INSTITUTE OF <br />
              <span className="text-black">TECHNOLOGY</span>
            </h2>
            <div className="mt-8 flex justify-center md:hidden">
              <Dialog>
                <DialogTrigger className="" asChild>
                  <Button variant="outline" className="font-enigma">
                    CODECHEF NewsLetter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Subscribe to our Newsletter</DialogTitle>
                    <DialogDescription>
                      Stay updated with the latest events and updates from
                      CODECHEF-VIT.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" disabled={loading} onClick={handleSubmit}>Subscribe</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative -mt-12 bg-white border-2 border-black w-11/12 h-64 md:h-80 lg:h-96 mx-auto flex justify-end items-start">
          <div className="absolute w-2 h-2 bg-black -top-2 -left-2"></div>
          <div className="absolute w-2 h-2 bg-black -top-2 -right-2"></div>
          <div className="absolute w-2 h-2 bg-black -bottom-2 -left-2"></div>
          <div className="absolute w-2 h-2 bg-black -bottom-2 -right-2"></div>

          {/* PixelImage only visible on medium and larger screens */}
          <div className="w-full h-full hidden lg:block">
            <PixelImage />
          </div>

          {/* Static Image visible on small screens */}
          <div className="block w-full h-full lg:hidden">
            <Image
              src={balak}
              alt="Fallback Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 ml-4 text-lg font-enigma text-gray-800 leading-relaxed text-center bg-clip-text">
          CodeChef is a dynamic technical chapter dedicated to elevating coding
          skills across campus. We operate at the intersection of technology,
          management, and design, fostering a collaborative environment where
          students learn, share, and excel.
        </div>
      </div>
    </div>
  );
};

export default CodeChefHeader;
