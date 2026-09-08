import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { TypedObject } from '@portabletext/types';



export const revalidate = 30; // revalidate every 30 seconds

interface scholarshipDetails {
    currentSlug: string,
    heading: string,
    description: TypedObject,
    image: SanityImageSource
}

async function getData(slug: string){
    const query = `*[_type == "scholarship" && slug.current == $slug]{
  "currentSlug":slug.current,
    heading,
    description,
    image
}[0]`;

const data1:scholarshipDetails = await client.fetch(query, { slug });
return data1;

}

export default async function ScholarshipArticle({params}: {params: Promise<{slug:string}>} ){
    const { slug } = await params;
    const data1 = await getData(slug);
    return (
        <div id="top">
            <div className="flex justify-center my-8">
            <Image src={urlFor(data1.image).url()} alt="image" width={600} height={600} priority className="rounded-xl"></Image>
            </div>
            <h1 className="text-center text-xl font-bold mt-12 sm:text-2xl lg:text-3xl">
            {data1.heading}
            </h1>

            <div className="description-sanity mt-16 mx-auto prose prose-blue prose-lg prose-headings:text-2xl prose-a:text-sky-600 sm:prose-xl lg:prose-headings:text-3xl">
                <PortableText value={data1.description}/>
            </div>
        </div>
    )
} 