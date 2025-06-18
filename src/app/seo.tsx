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

      <meta property='og:title' content='Vuscan —  Website Vulnerability Scanner | Secure Your Site for Free' />
      <meta
        property='og:description'
        content='Detect XSS, SQLi & security flaws in seconds. Get instant reports and protect your website from hackers.'
      />
      <meta property='og:image' content='https://vuscan.net/level1.webp' />
      <meta property='og:url' content='https:/vuscan.net' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='vuscan' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='vuscan — Free Website Security Scanner' />
      <meta
        name='twitter:description'
        content='Find & fix vulnerabilities before hackers do. No registration required!'
      />
      <meta name='twitter:image' content='https://vuscan.net/level1.webp' />
      {/* <meta name='twitter:site' content='@YourTwitterHandle' /> */}

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
