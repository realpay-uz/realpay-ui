/* eslint-disable react/no-unescaped-entities */
import { GoogleGeminiEffect } from "@/components/google-gemini-effect";
// import {} from "fumadocs-mdx"
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-12 bg-background">
      <GoogleGeminiEffect
        title="Welcome to RealPay UI"
        description="Make your React apps more beatiful with RealPay UI"
      ></GoogleGeminiEffect>
    </main>
  );
}
