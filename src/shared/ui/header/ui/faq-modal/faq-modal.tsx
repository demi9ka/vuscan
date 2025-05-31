import { useLocation, useNavigate } from 'react-router-dom'
import css from './faq-modal.module.css'
import { ArrowDownIcon, Button, Modal } from '@/shared/ui'
import { modalData } from './constants'
import { useState } from 'react'

export const FaqModal = () => {
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

  return (
    <Modal
      opened={opened}
      style={{
        width: 700
      }}
      onClose={onClose}
    >
      <h1 className={css.title}>FAQ</h1>
      <div className={css.scrollArea}>
        {modalData.map((el, i) => (
          <div onClick={() => handleToggleQuestion(i)} key={i} className={css.question}>
            <div className={css.questionHeader}>
              <h2 className={css.questionTitle}>{el.question}</h2>
              <ArrowDownIcon
                style={{
                  transform: `rotate(${openedQuestion == i ? 180 : 0}deg)`,
                  width: 24
                }}
              />
            </div>
            {openedQuestion == i ? <p className={css.answer}>{el.answer}</p> : <></>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }} className={css.center}>
        <Button variant='secondary' className={css.button} onClick={onClose}>
          ЗАКРЫТЬ
        </Button>
      </div>
    </Modal>
  )
}
