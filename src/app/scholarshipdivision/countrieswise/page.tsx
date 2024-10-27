'use client'
import Link from "next/link"
import Image from "next/image"
interface countriesType {
    name: string,
    imageUrl: string,
    slug : string
}

export default function CountriesWise() {

    const asianCountries: countriesType[] = [
        { name: "China", slug: "china" , imageUrl: "/flagsofcountries/flag-of-China.png" },
        { name: "Japan", slug: "japan", imageUrl: "/flagsofcountries/flag-of-Japan.png" },
        { name: "UAE", slug: "uae", imageUrl: "/flagsofcountries/flag-of-United-Arab-Emirates.png" },
        { name: "Thailand", slug:"thailand", imageUrl: "/flagsofcountries/flag-of-Thailand.png" },
        { name: "Singapore", slug:"singapore", imageUrl: "/flagsofcountries/flag-of-Singapore.png" },
        { name: "Saudi Arabia", slug:"saudi-arabia", imageUrl: "/flagsofcountries/flag-of-Saudi-Arabia.png" },
        // Add more countries as needed
    ];

    return (
        <div>
            <h1 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Countries wise Scholarships</h1>

            {/* ----------------Asia-------------- */}

            <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Asia</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {asianCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}