import { useLocation, useNavigate } from 'react-router-dom'
import css from './faq.module.css'
import { ArrowDownIcon, Button, Modal, Trans } from '@/shared/ui'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type QuestionType = {
  question: string
  answer: string
}

export const Faq = () => {
  const { t } = useTranslation()
  const [openedQuestion, setOpenedQuestion] = useState(-1)
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const handleToggleQuestion = (id: number) => {
    setOpenedQuestion(openedQuestion == id ? -1 : id)
  }

  const opened = urlModal == 'faq'

  const questionsData = t('modal.faq.questions', { returnObjects: true }) as QuestionType[]
  const questionMapped = questionsData.map((_, i) => (
    <div onClick={() => handleToggleQuestion(i)} key={i} className={css.question}>
      <div className={css.questionHeader}>
        <p className={css.questionTitle}>{t(`modal.faq.questions.${i}.question`)}</p>
        <ArrowDownIcon
          className={css.arrow}
          style={{
            transform: `rotate(${openedQuestion == i ? 180 : 0}deg)`
          }}
        />
      </div>

      {openedQuestion == i ? (
        <Trans
          className={css.transWrapper}
          i18nKey={t(`modal.faq.questions.${i}.answer`)}
          components={{
            p: <p className={css.transContent} />,
            ul: (
              <ul
                style={{
                  listStyleType: ''
                }}
              />
            ),
            li: <li className={css.transContent} />
          }}
        />
      ) : (
        <></>
      )}
    </div>
  ))

  return (
    <Modal opened={opened} title='FAQ' onClose={onClose}>
      <div className={css.scrollArea}>{questionMapped}</div>
      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
