import Image from "next/image"

// Card Heading
interface headType {
    heading:string;
}

// Card
interface CardType {
    imageUrl : string,
    title :string,
    description? : string
}

// Prop of card heading
export const Heading = ({heading}:headType)=>{
    return(
     <><h1 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10">{heading}</h1></>
    )
}

//Prop of cards
const Card = ({imageUrl,title,description}:CardType) => {
  return (
    <>
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center box-border p-10 dark:bg-slate-400">
     <div>
     <Image src={imageUrl} height={200} width={200} alt="course image 1"></Image>
     </div>
     <h3 className="text-xl font-bold my-2">{title}</h3>
     <p>{description}</p>
     </div>
    </>
  )
}


export default Card;


// Flags Cards
interface Flag {
    imageUrl:string;
    countryName:string;
  }

export const FlagsCard = ({imageUrl,countryName}:Flag) =>{
    return(
     <>
     <div className="bg-white flex flex-col justify-center items-center gap-2 pb-4 shadow-lg rounded-lg overflow-hidden box-border">
     <Image src={imageUrl} height={200} width={200} alt="course image 1" className="w-full"></Image>
     <h1 className="">{countryName}</h1>
     </div>
     </>
    )
}