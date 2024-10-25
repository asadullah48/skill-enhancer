

import Link from "next/link"
import { FlagsCard } from "./card"

export default function HeroCountries(){
    return (
        <section className="p-5 rounded-3xl my-5 mt-16">
        <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Popular Countries</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] px-6 py-10 gap-5">
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/usa"><FlagsCard imageUrl="/flagsofcountries/flag-of-United-States-of-America.png" countryName="USA"></FlagsCard></Link>
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/canada"><FlagsCard imageUrl="/flagsofcountries/flag-of-Canada.png" countryName="Canada"></FlagsCard></Link>
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/germany"><FlagsCard imageUrl="/flagsofcountries/flag-of-Germany.png" countryName="Germany"></FlagsCard></Link>
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/uk"><FlagsCard imageUrl="/flagsofcountries/flag-of-United-Kingdom.png" countryName="United Kingdom"></FlagsCard></Link>
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/australia"><FlagsCard imageUrl="/flagsofcountries/flag-of-Australia.png" countryName="Australia"></FlagsCard></Link>
        <Link href="/scholarshipdivision/countrieswise/scholarships/country/china"><FlagsCard imageUrl="/flagsofcountries/flag-of-China.png" countryName="China"></FlagsCard></Link>
       </div>
          </section>
    )
}