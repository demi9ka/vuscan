import { Helmet } from 'react-helmet'

export const Seo = () => {
  return (
    <Helmet>
      <title>Test Your Site Security Now (No Registration)</title>
      <meta
        name='description'
        content={
          'Free Online Website Vulnerability Scanner — Test Your Site for Security Holes in Seconds. Get Instant Alerts & Recommendations. Stay Safe from Cyber Attacks!'
        }
      />
      <meta
        name='keywords'
        content={
          'website vulnerability scanner, free security scan, SQLi detector, XSS checker, web security test, online hack scanner, site vulnerability check, cybersecurity tools'
        }
      />

      <meta property='og:title' content='VulnScan —  Website Vulnerability Scanner | Secure Your Site for Free' />
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

      <link rel='canonical' href='https://vuscan.net' />
      <link rel='alternate' hrefLang='en' href='https://vuscan.net' />
      <link rel='alternate' hrefLang='ru' href='https://vuscan.net' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='theme-color' content='#242930' />

      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' href='/icon.svg' type='image/svg+xml' />

      <link
        rel='preload'
        href='/fonts/gteestiprodisplay_bold.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link rel='preload' href='/fonts/Manrope-Regular.woff2' as='font' type='font/woff2' crossOrigin='anonymous' />
    </Helmet>
  )
}
