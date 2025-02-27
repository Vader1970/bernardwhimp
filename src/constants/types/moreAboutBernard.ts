export type MoreAboutBernardProps =
  React.ComponentPropsWithoutRef<"section"> & {
    heading?: string;
    description?: string;
    blockquote?: string;
  };

export const MoreAboutBernardDefaults: MoreAboutBernardProps = {
  heading: "More About Bernard Whimp",
  description: `\"I would have to say that as you get to know him you realise he\'s the most complete individual imaginable, on every level.\"`,
  blockquote: "-Amanda Bowes-Durand -Journalist-",
};
