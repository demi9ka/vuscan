import { getPackageResponse } from '@/shared/api/scanner/types'
import { useTranslation } from 'react-i18next'
import css from './links.module.css'
import { Button, LockIcon } from '@/shared/ui'
import { useMemo } from 'react'
import generateRandomPath from '@/helpers/generate-random-path'

type Props = {
  packageData: getPackageResponse
}

export const Links = ({ packageData }: Props) => {
  const { t } = useTranslation()

  const onOpenLink = (url?: string) => {
    if (!url) return
    window.open(url, '_blank')
  }
  const links = useMemo(
    () =>
      packageData && !packageData.isBuy
        ? packageData.baseLinks?.slice(packageData.links ? 1 : 0).map((baseUrl, i) => (
            <div key={i} className={css.linkWrapper}>
              <p className={css.link}>
                {baseUrl}
                <span className={css.blur}>{generateRandomPath()}</span>
              </p>
              <Button variant='default' className={css.linkButton}>
                <LockIcon className={css.iconWrapper} />
              </Button>
            </div>
          ))
        : '',
    [packageData]
  )
  if (!packageData) {
    return (
      <p
        style={{
          textAlign: 'center'
        }}
      >
        Not found
      </p>
    )
  }

  if (packageData.isBuy) {
    return packageData.links.map((link, i) => (
      <div key={i} className={css.linkWrapper}>
        <p className={css.link}>{link}</p>
        <a href={link} target='_blank'>
          <Button variant='default' className={css.linkButton}>
            {t('modal.open-package.follow')}
          </Button>
        </a>
      </div>
    ))
  }
  return (
    <>
      {packageData.links ? (
        packageData.links.map((link, i) => (
          <div key={i} className={css.linkWrapper}>
            <p className={css.link}>{link}</p>
            <Button onClick={() => onOpenLink(link)} variant='default' className={css.linkButton}>
              {t('modal.open-package.follow')}
            </Button>
          </div>
        ))
      ) : (
        <></>
      )}
      {links}
    </>
  )
}
