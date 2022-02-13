import NextHead from 'next/head';

type HeadProps = {
  title?: string;
};

export const Head: React.FC<HeadProps> = ({ title = 'Fun Buttons' }) => (
  <NextHead>
    {/* Uncomment the following lines if using google fonts */}
    <link
      crossOrigin="use-credentials"
      href="https://fonts.gstatic.com"
      rel="preconnect"
    />
    <link href="https://fonts.gstatic.com/" rel="dns-prefetch" />
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    <meta content="Troy Chryssos' Next JS template" name="description" />
  </NextHead>
);
