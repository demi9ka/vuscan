import { Helmet } from 'react-helmet'

type Props = {
  title: string
  description: string
  keywords: string
}

export const Seo = ({ title, description, keywords }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='https://vuscan.net/level1.webp' />
      <meta property='og:url' content='https:/vuscan.net' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='vuscan' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='https://vuscan.net/level1.webp' />

      <link rel='canonical' href='https://vuscan.net/ru' />
      <link rel='alternate' hrefLang='en' href='https://vuscan.net/en' />
      <link rel='alternate' hrefLang='ru' href='https://vuscan.net/ru' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#242930' />

      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/icon.svg' type='image/svg+xml' />
    </Helmet>
  )
}
