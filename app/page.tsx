import Image from "next/image";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import UserDetails from "@/components/UserDetails";
import Payment from "@/components/Payment";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Footer from "@/components/Footer";
import FreeCancellation from "@/components/FreeCancellation";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col m-4 md:px-24 md:grid md:grid-cols-3 md:gap-4'>
        <div className="md:col-start-1 md:col-end-3">
          <p className="ml-2 mt-8 font-semibold text-3xl p-2 ">Confirm & pay</p>
        </div>
        <div className=' md:col-start-3 md:col-end-4  md:row-span-3 '>
          <MainBanner />

        </div>
        <div className=' md:col-start-1 md:col-end-3 '>
          <FreeCancellation />

        </div>
        <Separator className="my-2" />

        <div className=' md:col-start-1 md:col-end-3 '>
          <UserDetails />

        </div>
        <div className=' md:col-start-1 md:col-end-3 '>
          <Payment />

        </div>
        <div className=' md:col-start-1 md:col-end-4 '>
          <FrequentlyAskedQuestions />

        </div>
      </div>
      <Footer />
    </>
  );
}
