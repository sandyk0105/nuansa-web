'use client'

import Image from "next/image";
import Link from "next/link";
import Timer from "./components/timer";

import { FadeInDiv } from "./components/animations";
import { ScrollableBackground } from "./components/background";
import SponsorGrid from "./components/sponsor-grid";


export default function Home() {
  const sponsorImages: string[] = [
"https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
"https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
"https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
"https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",
"https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
"https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
"https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
"https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",
"https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
"https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
"https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
"https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",

];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 text-white">
      <ScrollableBackground src={'/images/home/background.png'} height={1920} width={1080} />
      <FadeInDiv className="flex flex-col items-center justify-center h-screen w-full">
        <Image src={'/images/home/the-crying-stone.png'} alt={'The Crying Stone'} width={0} height={0} sizes="100vw" style={{ width: '32rem', height: 'auto', marginTop: '-160px' }}/>
        <Timer launchDate="09-07-2025" />
      </FadeInDiv>
      <FadeInDiv className="flex flex-col items-center justify-center w-full py-6 px-8 sm:py-12 sm:px-16 md:py-20 md:px-32 bg-transparent">
        <h2 className="text-3xl md:text-4xl pb-4 sm:pb-6 md:pb-10 font-bold text-center text-orange-a">
          Synopsis
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl">
          The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
          As punishment for her mistreatment of her mother, a prayer by the widow causes the daughter to be struck by lightning and turned into a crying stone statue. 
          The story teaches the importance of honoring one&apos;s parents.
        </p>
      </FadeInDiv>
      <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-a">
          Characters
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
            <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
            <p className="text-center text-xs md:text-base p-1 md:p-4">
              The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
            </p>
          </div>
          <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
            <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
            <p className="text-center text-xs md:text-base p-1 md:p-4">
              The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
            </p>
          </div>
          <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
            <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
            <p className="text-center text-xs md:text-base p-1 md:p-4">
              The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
            </p>
          </div>
        </div>
      </FadeInDiv>
      <SponsorGrid images={sponsorImages} />
      <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
        <h3 className="text-center text-xl md:text-2xl p-4 md:p-6">
          Have a question or need assistance? Interested in partnering with NUANSA?
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <Link href="/contact-us#general-form">
            <button className="block w-64 rounded-md bg-green-b px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-b/75">
              General Inquiry
            </button>
          </Link>
          <Link href="/contact-us#business-form">
            <button className="block w-64 rounded-md bg-green-b px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-b/75">
              Business Inquiry
            </button>
          </Link>
        </div>
      </FadeInDiv>
      <footer className="w-full py-4 text-center text-white">
        <p>© 2025 NUANSA. All rights reserved.</p>
      </footer>
    </main>
  );
}