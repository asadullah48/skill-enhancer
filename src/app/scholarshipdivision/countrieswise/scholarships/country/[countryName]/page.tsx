

// Import `useParams` from next/navigation
import { client, urlFor } from "@/sanity/lib/client"
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';


  // Use `useParams` to get the countryName
  const ScholarshipsByCountry = async ({ params }: { params: { countryName: string} }) => {
    const { countryName } = params;
  
  interface scholarshipsType {
    heading : string,
      image : SanityImageSource,
      'currentSlug': string,
      countries : string
  }
  
  // Fetch scholarships for the selected country
  const scholarships:scholarshipsType[] = await client.fetch(
    `*[_type == "scholarship" && countries == $countryName] | order(_createdAt desc){
      heading,
      image,
      'currentSlug': slug.current,
      countries
      }`,
      { countryName }
    );
     
  return (
    <section>
    <h1 className='font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8'>Scholarships of {countryName}</h1>
    

    {scholarships.length > 0 ? (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
        {scholarships.map((post, idx) => (
          <Link key={idx} href={`../../../../scholarship/${post.currentSlug}`}>
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
      <div className='flex justify-center items-center h-screen'>
      <p className='text-2xl'>No scholarships found.</p>
      </div>
    )}
  </section>
  );
};

export default ScholarshipsByCountry;







