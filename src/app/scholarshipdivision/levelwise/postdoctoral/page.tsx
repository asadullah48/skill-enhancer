import { client, urlFor } from "@/sanity/lib/client"
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { Card } from "@/components/ui/card";


interface dataType {
  heading: string,
  image: SanityImageSource,
  currentSlug: string,
  levelOfStudies: string[]
}

const getScholarshipCard = async () => {
  try {
    const res = await client.fetch(` *[_type == "scholarship" && "postdoctoral" in levelOfStudies[]] | order(_createdAt desc){
      heading,
      image,
      'currentSlug': slug.current,
      levelOfStudies
    }`);
    return res;
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return [];
  }
}




export default async function PostdoctoralScholarship() {
  const data: dataType[] = await getScholarshipCard();

  return (
    <section>
      <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Postdoctoral Scholarships</h2>
      
      {/* Check if data is available */}
      {data.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
          {data.map((post, idx) => (
            <Link key={idx} href={`../../scholarship/${post.currentSlug}`}>
              <Card className="min-h-64 p-2 hover:transition-transform">
                <Image 
                  src={post.image ? urlFor(post.image).url() : '/fallback-image.jpg'} 
                  alt="Scholarship image" 
                  width={300} 
                  height={300} 
                  className="w-full" 
                />
                <h3 className="font-bold mt-2 text-center">{post.heading}</h3>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p>No scholarships found.</p>
      )}
    </section>
  )
}