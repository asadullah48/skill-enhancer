import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { client, urlFor } from "@/sanity/lib/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import HeroCountries from "./components/hero-countries";


export const revalidate = 30; // revalidate every 30 seconds

interface dataType {
  heading: string,
  image: SanityImageSource ,
  currentSlug: string,
  isRecommended: boolean
}

const getLatestScholarshipCard = async()=>{
 const res = await client.fetch(`*[_type=='scholarship'] | order(_createdAt desc){
  heading,
  image,
  'currentSlug':slug.current,
  isRecommended
}`);
 return res
}
const getRecScholarshipCard = async()=>{
 const res = await client.fetch(`*[_type=='scholarship'  && isRecommended == true] | order(_createdAt desc){
  heading,
  image,
  'currentSlug':slug.current,
  isRecommended
}`);
 return res
}

export default async function Home() {
  
  
  const justLandedData:dataType[] = await getLatestScholarshipCard();

  const recData:dataType[]= await getRecScholarshipCard();

  return (

    // HomePage

    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 min-h-16 mx-6">
        <div className="text-3xl h-64 sm:text-4xl  xl:text-5xl md:h-full bg-light flex items-center px-5 rounded-3xl">
          <h1>
            Your <span className="span-color font-bold">skill-enhanced</span>{" "}
            journey leads to growth and opportunity.
          </h1>
        </div>
        <div className="justify-self-center">
          <Image
            src={"/landing-page-image.png"}
            height={450}
            width={450}
            alt="image"
            priority
          ></Image>
        </div>
      </main>

      {/*  Recommended Scholarships  */}

    <section>
    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Recommended Scholarships</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    {recData.slice(0, 16).map((post, idx) => (
      <Link key={idx} href={`scholarship/${post.currentSlug}`} className="hidden sm:block">
        <Card className="min-h-64 p-2 ease-in duration-300 hover:scale-105">
          <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="w-full"></Image>
          <h3 className="font-bold mt-2 text-center">{post.heading}</h3>
        </Card>
      </Link>
    ))}
    {recData.slice(0, 8).map((post, idx) => (
      <Link key={idx} href={`scholarship/${post.currentSlug}`} className="sm:hidden">
        <Card className="min-h-64 p-2 ease-in duration-300 hover:scale-105">
          <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="w-full"></Image>
          <h3 className="font-bold mt-2 text-center ">{post.heading}</h3>
        </Card>
      </Link>
    ))}
    </div>
    </section>
    
      {/* Popular Countries Image Section */}

      <HeroCountries/>

      {/* Latest Posts Section*/}
      <section>
      <h2 className="underline decoration-orange-300 decoration-4 underline-offset-8 font-bold text-lg sm:text-2xl px-8 py-2 mt-10">Just Landed</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    {justLandedData.slice(0, 30).map((post, idx) => (
      <Link key={idx} href={`scholarship/${post.currentSlug}`} className="hidden sm:block">
        <Card className="min-h-64 p-2 ease-in duration-300 hover:scale-105 ">
          <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="w-full "></Image>
          <h3 className="font-bold mt-2 text-center">{post.heading}</h3>
        </Card>
      </Link>
    ))}
    {justLandedData.slice(0, 20).map((post, idx) => (
      <Link key={idx} href={`scholarship/${post.currentSlug}`} className="sm:hidden">
        <Card className="min-h-64 p-2  ease-in duration-300 hover:scale-105">
          <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="w-full"></Image>
          <h3 className="mt-2 text-center">{post.heading}</h3>
        </Card>
      </Link>
    ))}
    </div>
    </section>
    </div>
  ); 
}