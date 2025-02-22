//Component Library Content7
//Described by some as the god of stocks

interface Props {
  heading: string;
  children: React.ReactNode;
}

export type Content7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Content7 = (props: Content7Props) => {
  const { heading, children } = {
    ...Content7Defaults,
    ...props,
  };
  return (
    <section id='content7' className='cvi-container'>
      <div>
        <div className='mx-auto w-full'>
          <h2 className='mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl'>{heading}</h2>
          <div className='w-[100px] h-[2px] bg-black mb-8'></div>
          <div className='prose max-w-none'>{children}</div>
        </div>
      </div>
    </section>
  );
};

export const Content7Defaults: Props = {
  heading: "Described by some as the god of stocks",
  children: (
    <div>
      <p className='pt-4 text-lg text-black'>
        Bernard Whimp is a visionary and an entrepreneur, some would refer to him as &quot;the god of stocks&quot;. As
        an experienced professional stock picker, he is passionate, relentless, and strategic when it comes to the
        Australian stock market.
      </p>
      <p>
        He has an aptitude for the area of the market known as deep value, the natural home of independent thinkers.
        Combing the market for companies which look like they have had a problem, assessing the dynamics at play across
        the whole economy. He understands the public consciousness and looks for situations where pessimism has driven
        the share price to ridiculously low levels and where it is likely to bounce back, these are referred to as high
        probability situations.
      </p>
    </div>
  ),
};
