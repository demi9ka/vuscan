import css from './queue-modal.module.css'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import z from 'zod'
import { toast } from '@/feature/toast'
import { useTranslation } from 'react-i18next'
import { useQueue } from '@/entities/scanner'

const price = 12

type FormDataType = z.infer<typeof schema>

export const QueueModal = () => {
  const { t } = useTranslation()
  const { mutateAsync, isPending } = useQueue()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid }
  } = useForm<FormDataType>({
    resolver: zodResolver(schema)
  })

  const onClose = () => {
    navigate('/')
    reset()
  }

  const onSubmit = async (formData: FormDataType) => {
    const { result } = await mutateAsync(formData)
    if (result) {
      toast('Вы успешно оставили заявку', 'success')
      onClose()
    } else {
      toast("Couldn't process the request")
    }
  }

  const buyPriority = () => {
    console.log('купить приоритет')
  }

  const opened = urlModal == 'queue'

  return (
    <Modal title={t('home.queue-modal.title')} opened={opened} className={css.modal} onClose={onClose}>
      {t('home.queue-modal.content')
        .split('\n\n')
        .map((el, i) => (
          <p key={i} className={css.text}>
            {el}
          </p>
        ))}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='example@gmail.com' className={css.emailInput} {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        <Button type='submit' disabled={isPending || !isValid} className={css.button}>
          {t('home.queue-modal.send-email')}
        </Button>
      </form>
      <p className={css.variant}>{t('global.or')}</p>
      <Button onClick={buyPriority} className={css.button}>
        {t('home.queue-modal.buy-btn', { price })}
      </Button>
    </Modal>
  )
}
