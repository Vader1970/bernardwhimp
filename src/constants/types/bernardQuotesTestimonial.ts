export interface ImageProps {
  src: string;
  alt?: string;
}

export interface Testimonial {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
}

export interface Props {
  testimonials: Testimonial[];
}

const defaultAvatar: ImageProps = {
  src: "/images/bernard-at-desk-crop.jpg",
  alt: "Bernard Whimp sitting at his desk",
};

const defaultName = "Bernard Whimp";
const defaultPosition = "Founder and CEO/CIO";
const defaultCompanyName = "Chance Voight Investment Corporation";

export const BernardQuotesTestimonialDefaults: Props = {
  testimonials: [
    {
      quote:
        '"A proper investor has unhooked their thinking about share prices from what the quoted market price is."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        "\"After several years of intense effort, we're highly confident that we are 'cooking with gas' on a large scale internationally orientated business.\"",
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        '"Chance Voight aims to be the greatest share market wealth creation machine ever assembled in New Zealand."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        '"Once you enter the church of deep value investing, everything you do in the stock market will be about buying assets at cents in the dollar."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        '"Our aim is to make Chance Voight one of New Zealand\'s best businesses, a business that is rewarding for investors, a business that is exciting for shareholders, a business that both investors and shareholders can be truly proud of."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        '"You cannot do what everyone else does and achieve better than average results. To be a good investor, to generate the highest returns, you must go against the consensus thinking."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
    {
      quote:
        '"The best thing you can do for yourself is find a good hedge fund and stick with it."',
      avatar: defaultAvatar,
      name: defaultName,
      position: defaultPosition,
      companyName: defaultCompanyName,
    },
  ],
};
