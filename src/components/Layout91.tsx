//Layout 91
//Bernard Whimp Documentary

import Image from "next/image";
import { VideoIframe } from "@relume_io/relume-ui";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
}

interface Props {
  image: ImageProps;
  video: string;
}

export interface Layout91Props extends React.ComponentPropsWithoutRef<"section">, Partial<Props> {}

export const Layout91 = (props: Layout91Props) => {
  const { image, video } = {
    ...Layout91Defaults,
    ...props,
  };
  return (
    <div className='bg-gray-200'>
      <section id='relume' className='cvi-container'>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button className='relative flex w-full items-center justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt || "Image"}
                  width={image.width}
                  height={image.height}
                  className='size-full object-cover rounded-lg'
                />
                <span className='absolute inset-0 z-10' />
                <FaCirclePlay className='absolute z-20 size-6 sm:size-16 text-black bg-white rounded-full' />
              </button>
            </DialogTrigger>
            <DialogContent>
              <VisuallyHidden>
                <DialogTitle>Video Player</DialogTitle>
              </VisuallyHidden>
              <VideoIframe video={video} />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export const Layout91Defaults: Props = {
  image: {
    src: "https://i.vimeocdn.com/video/1873465161-bd758f62c3d2a71e975bfa9f725467648c9b6a614a042c0af83bdb653b2dfab3-d?mw=3300&mh=1858&q=70&quot",
    alt: "Bernard Whimp Documentary",
    width: 1280,
    height: 720,
  },
  video: "https://player.vimeo.com/video/814469584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};
