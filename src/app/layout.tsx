import { Inter } from "next/font/google";
import TheMain from "@/components/TheMain";
import "../styles/globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codechefvit.com/"),
  title: "CodeChef-VIT",
  description:
    "CodeChef-VIT is a non-commercial organization with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-VIT, we believe in the words of Matt Mullenweg - “Technology is best when it brings people together”.",
  icons: [{ rel: "icon", url: "/codechef_logo.svg" }],
  openGraph: {
    title: "CodeChef-VIT",
    images: [{ url: "/codechef_logo.png" }],
    url: "https://www.codechefvit.com/",
    type: "website",
    description:
      "CodeChef-VIT is a non-commercial organization with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-VIT, we believe in the words of Matt Mullenweg - “Technology is best when it brings people together”.",
    siteName: "CodeChef-VIT",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeChef-VIT",
    description:
      "CodeChef-VIT is a non-commercial organization with a goal to provide a platform for programmers and developers everywhere to meet, compete & have fun. At CodeChef-VIT, we believe in the words of Matt Mullenweg - “Technology is best when it brings people together”.",
    images: [{ url: "/codechef_logo.svg" }],
  },
  applicationName: "CodeChef-VIT",
  keywords: [
    "CodeChef-VIT official website",
    "VIT CodeChef chapter",
    "CodeChef VIT programming community",
    "VIT student resources",
    "Competitive programming at VIT",
    "VIT CodeChef coding contests",
    "VIT CodeChef practice problems",
    "VIT CodeChef tutorials",
    "VIT CodeChef events",
    "VIT coding competitions",
    "VIT programming challenges",
    "VIT problem-solving resources",
    "CodeChef-VIT student portal",
    "VIT CodeChef rankings",
    "VIT programming club",
    "VIT CodeChef coding events",
    "VIT CodeChef workshops",
    "VIT coding mentorship",
    "VIT CodeChef coding bootcamp",
    "VIT programming resources",
    "VIT competitive coding",
    "VIT tech community",
    "VIT student programming challenges",
    "VIT CodeChef problem sets",
    "VIT hackathons",
    "CodeChef-VIT news and updates",
    "VIT programming exam prep",
    "VIT online coding resources",
    "VIT learning programming",
    "CodeChef-VIT tutorials and guides",
    "VIT CodeChef study materials",
    "VIT contest solutions",
    "VIT competitive coding team",
    "VIT student problem solving",
    "VIT programming clubs and societies",
    "CodeChef-VIT programming resources",
    "VIT CodeChef academic support",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./codechef_logo.png" sizes="any" />
      </head>
      <body>
        <TheMain>{children}</TheMain> 
        {/* because we need TO use metadata */}
      </body>
    </html>
  );
}
