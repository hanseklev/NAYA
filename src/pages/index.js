import { graphql, StaticQuery } from "gatsby";
import React from "react";
import RecentPosts from "../components/blogpost/recent-posts";
import MainLayout from "../components/layout";
import Section from "../components/section";
import IntroSection from "../components/section/intro";
import SEO from "../components/seo";
import ProductCarousel from "../components/shop/carousel";

const IndexPage = () => {
  /*   const IG_LINK = "https://www.instagram.com/nayaequalsnew/"
  const IG_FEED_DESCRPT = "Sjekk ut de tre siste innleggene " */
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { topsection, showcase } = data.wpPage;
        return (
          <MainLayout>
            <SEO title="NAYA" />

            <IntroSection
              title={topsection.topsectiontitle}
              description={topsection.topsectiondescription}
              image={topsection.topsectionimage.localFile}
              haslink
            />
            <Section title="Vi er i stadig endring..">
              <p>Oppdatering kommer i september 2021</p>
            </Section>
            <ProductCarousel
              title={showcase.showcasetitle}
              description={showcase.showcasedescription}
              items={[showcase.imageOne, showcase.imageTwo]}
            />
            <RecentPosts dark />
            {/*  <SocialFeed globalLink={IG_LINK} description={IG_FEED_DESCRPT} /> */}
          </MainLayout>
        );
      }}
    />
  );
};

export default IndexPage;

const query = graphql`
  query IndexQuery {
    wpPage(id: { eq: "cG9zdDozMzM5" }) {
      title

      topsection {
        topsectiontitle
        topsectiondescription
        topsectionimage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 920) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      showcase: productPreviewImages {
        imageOne {
          ... on WpMediaItem {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        imageTwo {
          ... on WpMediaItem {
            id
            title
            localFile {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        showcasetitle
        showcasedescription
      }
    }
  }
`;

/*
 <Hero
              hasText={true}
              desktopImage={hero.heroimagedesktop.localFile}
              mobileImage={hero.heroimagemobile.localFile}
              title={hero.herotitle}
              fullHeight
            /> 
   hero {
        herotitle
        heroimagemobile {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        heroimagedesktop {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }*/
