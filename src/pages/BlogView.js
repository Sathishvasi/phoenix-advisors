import React from "react";
import tw from "twin.macro";
import Features from "components/features/ThreeColWithSideImage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Header from "components/headers/light.js";
import BlogView from "components/blogs/BlogView.js";


export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    // <AnimationRevealPage>
      <>
        <Header></Header>
      <BlogView
        heading={
          <>
            Virtual Justice in the Time of COVID-19
          </>
        }
        content={<>As the UK enters a period of uncertainty with the coronavirus outbreak, our justice system inevitably will be under considerable strain. Last week, the government announced the planned introduction of emergency laws in response to the COVID-19 pandemic. Part of this plan includes measures that allow some civil proceedings in magistrates’ courts to be carried out by telephone or video and expanding the use of audio and video live links in criminal proceedings. The intention of these contingency measures is to enable our courts to continue operating even during the height of the pandemic.<br></br><br></br>The disruptions caused by COVID-19 bring to the spotlight Richard Susskind’s case for online
          courts in the UK and globally, especially on the ground of promoting access to justice. The more
          pressing question is whether we are ready for the delivery of virtual justice outside a
          brick-and-mortar courtroom? In a forthcoming article in the Journal of Personal Injury Law, I
          examine how Chinese courts have deployed new technologies as part of a wider policy framework
          aimed at enhancing judicial efficiency and transparency. This policy has created highly advanced
          technological infrastructure allowing Chinese courts to conduct more online filings and hearings
          during the crisis.
          <br></br><br></br>
          ‘Smart Courts’ and Judicial Reform in China
          An important goal of China’s judicial reform over the past decade has been to increase the
          professionalism, transparency and accountability of courts and individual judges. The
          implementation of new information and communication technologies (ICT) have been a key
          component of such reform to change the ways in which justice is delivered to the public and the
          judiciary is supervised. The concept of ‘Smart Courts’ was first proposed by China’s top court, the
          Supreme People’s Court (SPC), in 2015. The SPC has since been directing courts at all levels to
          create Smart Courts.
                    <br></br><br></br>
          In recent years, Chinese courts have seen rapid developments in online dispute resolution platforms,
specialized Internet courts, and the wide use of AI tools across case management and adjudication
processes in civil and criminal proceedings. Other novel technologies such as distributed ledgers,
blockchain and smart contracts solutions are currently being developed and rolled out in several
local and specialised courts.
          <br></br><br></br>
An important aspect of these developments is making trial data resources online. As of February
2020, there were over 81.5 million judgments and other judicial documents on the SPC’s China
Judgments Online, representing the world’s largest digital repository of judicial information. This is
made possible by the SPC’s centralised big data management and service platform, which connects
every court in China (which includes around 3,520 courts, 9,277 tribunals and 39 maritime courts).
          </>}
      />
      <Footer />
      </>
    // </AnimationRevealPage>
  );
}
