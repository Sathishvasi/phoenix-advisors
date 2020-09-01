import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

import avatar1 from "images/DilipMassand.jpg";
import avatar2 from "images/RachelPether.png";
import avatar3 from "images/DipuMehta.jpeg";
import avatar4 from "images/Parag.jpg";
import avatar5 from "images/Parag.jpg";
import avatar6 from "images/Parag.jpg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-full lg:w-1/2 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
      object-fit: cover;
    `}
  ${tw`w-40 h-40 rounded-full bg-cover bg-center`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`uppercase mt-1 text-lg font-medium text-gray-900`}
  
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 focus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;
const CardBio = styled.div`
    padding: 10px 30px 30px 30px; margin-right: 10px; margin-left: 10px;
  ${tw`mt-6 flex`}
  .ul {
    ${tw`mr-8 last:mr-0 text-gray-400 focus:text-primary-500 transition duration-300`}
    .li {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  heading = "Meet These Fine Authors.",
  subheading = "The Team",
  description = "The responsibilities of an Author include writing original stories for novels, plays, television scripts, and movies.",
  cards = [
    {
      imageSrc: avatar1,
      position: "Managing Partner",
      name: "Dilip N Massand",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Mr. Massand is a co-founder and managing director of Phoenix Advisors in the UAE and a founding member of SAS Asset Recovery headquartered in the Cayman Islands",
        },
        {
          li:
            "Mr. Massand has over 20 years of experience in the Middle East working with sovereign funds, banks, and ultra high net worth individuals",
        },
        {
          li:
            "Prior to SAS, Mr. Massand served as co-chair of the emerging markets practice for McLaughlin & Stern, LLP, a New York based law firm. His clients included private equity and hedge funds, civil engineering, aviation, transportation, and infrastructure firms",
        },
        {
          li:
            "From 2000-2009, Mr. Massand served a member of the board of directors for DCD Capital, a global trade finance and shariah compliant real estate investment firm",
        },
        {
          li:
            "From 1991 to 2002, Mr. Massand served as general counsel of the Massand Group. A diversified family enterprise consisting of engineering, construction, and media assets in the United States, the Middle East, and India",
        },
      ],
    },
    {
      imageSrc: avatar2,
      position: "INVESTOR RELATIONS",
      name: "Rachel Pether",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Rachel Pether has over 15 years of experience in the Asset management  industry, having worked for 8 years at Mubadala Investment Company, one  of the largest sovereign wealth funds in the Middle East, and Heirloom  Investment Management in Dubai",
        },
        {
          li:
            "Additionally, Rachel is a managing partner at Sovereign Wealth Ltd, an  investment consultancy headquartered in Abu Dhabi Global Market focused  on curating the best ideas, opportunities and solutions for their institutional  investor clients",
        },
        {
          li:
            "Since 2016, Rachel has been a senior advisor to the Sovereign Wealth Fund  Institute (SWFI), a global data and research business focusing on institutional  investors, where she has a particular focus on advising nascent funds, or  those undergoing structural change",
        },
        {
          li:
            "She is an experienced financial journalist, often appearing on Bloomberg  Business News and the BBC to comment on institutional investor strategies  in the GCC",
        },
        {
          li:
            "She is a CFA Charterholder and Chartered Treasurer",
        },
      ],
    },
    {
      imageSrc: avatar3,
      position: "MANAGING PARTNER",
      name: "Dipu Mehta",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Dipu Mehta is a Dubai based entrepreneur and managing director and co-  founder of Phoenix Advisors",
        },
        {
          li:
            "He is also the managing director of Rosy Blue DMCC. Rosy Blue deals with  the wholesale trading of polished and rough diamonds",
        },
        {
          li:
            "From the end of 2016 to February 2018, he was general partner of Royal  Falcon Master Fund. This fund trades in volatility on the S&P index",
        }
      ],
    },
    {
      imageSrc: avatar4,
      position: "CHIEF OPERATING OFFICER",
      name: "Parag Parekh",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Experienced investment management professional overseeing diverse  portfolio of a mid-size family office across multiple asset classes",
        },
        {
          li:
            "More than 12 years experience managing global MIS, credit-risk of a USD1.5  bn gems & jewellery organization",
        },
        {
          li:
            "Co-founder of an IT/IT-enabled services operation in India catering to global  clients across multiple time zones",
        },
        {
          li:
            "Co-founder of a cloud-based centralized KYC platform adopted by gems & jewellery Industry across multiple countries",
        },
        {
          li:
            "MBA (Finance), Bachelor of Science (Statistics)",
        },
      ],
    },
    {
      imageSrc: avatar5,
      position: "Author",
      name: "Kevin Perkins",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Mr. Massand is a co-founder and managing director of Phoenix Advisors in the UAE and a founding member of SAS Asset Recovery headquartered in the Cayman Islands",
        },
        {
          li:
            "Mr. Massand has over 20 years of experience in the Middle East working with sovereign funds, banks, and ultra high net worth individuals",
        },
        {
          li:
            "Prior to SAS, Mr. Massand served as co-chair of the emerging markets practice for McLaughlin & Stern, LLP, a New York based law firm. His clients included private equity and hedge funds, civil engineering, aviation, transportation, and infrastructure firms",
        },
        {
          li:
            "From 2000-2009, Mr. Massand served a member of the board of directors for DCD Capital, a global trade finance and shariah compliant real estate investment firm",
        },
        {
          li:
            "From 1991 to 2002, Mr. Massand served as general counsel of the Massand Group. A diversified family enterprise consisting of engineering, construction, and media assets in the United States, the Middle East, and India",
        },
      ],
    },
    {
      imageSrc: avatar6,
      position: "Author",
      name: "Jason Vanacour",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
      content: [
        {
          li:
            "Mr. Massand is a co-founder and managing director of Phoenix Advisors in the UAE and a founding member of SAS Asset Recovery headquartered in the Cayman Islands",
        },
        {
          li:
            "Mr. Massand has over 20 years of experience in the Middle East working with sovereign funds, banks, and ultra high net worth individuals",
        },
        {
          li:
            "Prior to SAS, Mr. Massand served as co-chair of the emerging markets practice for McLaughlin & Stern, LLP, a New York based law firm. His clients included private equity and hedge funds, civil engineering, aviation, transportation, and infrastructure firms",
        },
        {
          li:
            "From 2000-2009, Mr. Massand served a member of the board of directors for DCD Capital, a global trade finance and shariah compliant real estate investment firm",
        },
        {
          li:
            "From 1991 to 2002, Mr. Massand served as general counsel of the Massand Group. A diversified family enterprise consisting of engineering, construction, and media assets in the United States, the Middle East, and India",
        },
      ],
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
                <CardBio>
                  <p className="bio-content">
                    <ul>
                      {card.content.map((li, liIndex) => (
                        <li key={li.liIndex}>{li.li}</li>
                      ))}
                    </ul>
                  </p>
                </CardBio>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
