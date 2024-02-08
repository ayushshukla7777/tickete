import Image from "next/image";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import UserDetails from "@/components/UserDetails";
import Payment from "@/components/Payment";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Footer from "@/components/Footer";
import FreeCancellation from "@/components/FreeCancellation";


export default function Home() {
  return (
    <>
      <Header/>
      <p>Confirm & pay</p>
      <MainBanner/>
      <FreeCancellation/>
      <UserDetails/>
      <Payment/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </>
  );
}
