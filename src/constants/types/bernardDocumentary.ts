export interface ImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

export interface Props {
  image: ImageProps;
  video: string;
}

export interface BernardDocumentaryProps
  extends React.ComponentPropsWithoutRef<"section">,
    Partial<Props> {}

// Default values for BernardDocumentary component
export const BernardDocumentaryDefaults: Props = {
  image: {
    src: "https://i.vimeocdn.com/video/1873465161-bd758f62c3d2a71e975bfa9f725467648c9b6a614a042c0af83bdb653b2dfab3-d?mw=3300&mh=1858&q=70&quot",
    alt: "Bernard Whimp Documentary",
    width: 1280,
    height: 720,
  },
  video:
    "https://player.vimeo.com/video/814469584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};
