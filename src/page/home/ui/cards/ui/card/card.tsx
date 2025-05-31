import { Button } from '@/shared/ui'
import css from './card.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export type Props = {
  color: string
  level: string
  logo: string
  title: string
  description: string
  id: number
}

export const Card = ({ description, level, logo, color, title, id }: Props) => {
  const navigate = useNavigate()

  const [state, setState] = useState(0)

  const handleOpenDescriptionModal = () => {
    navigate(`/?modal=card-info&id=${id}`)
  }

  return (
    <div
      className={css.wrapper}
      style={{
        boxShadow: `0px 0px 22px ${color}`
      }}
    >
      <div className={css.level} style={{ color, boxShadow: ` inset 0px 0px 12px ${color}` }}>
        {level}
      </div>
      <div className={css.logoWrapper}>
        <img src={logo} />
      </div>
      <h3 className={css.title}>{title}</h3>
      <p className={css.description}>{description}</p>
      {state == 0 ? (
        <Button
          variant='secondary'
          style={{
            marginTop: 20,
            fontWeight: 400,
            padding: '11px 41px'
          }}
          onClick={handleOpenDescriptionModal}
        >
          ПОДРОБНЕЕ
        </Button>
      ) : (
        ''
      )}
    </div>
  )
}
