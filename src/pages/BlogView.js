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
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <Footer />
      </>
    // </AnimationRevealPage>
  );
}
