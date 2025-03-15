import ContentArchive from "@/components/ContentArchive";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="content-container py-5 lg:py-10">
        <ContentArchive />
      </div>
    </>
  );
}
