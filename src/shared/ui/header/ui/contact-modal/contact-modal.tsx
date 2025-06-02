import css from './contact-modal.module.css'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import { useNavigate, useLocation } from 'react-router-dom'
import { useContact } from '@/entities/contact'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import z from 'zod'
import { toast } from '@/feature/toast'
import { useTranslation } from 'react-i18next'

type FormDataType = z.infer<typeof schema>

export const ContactModal = () => {
  const { t } = useTranslation()
  const { mutateAsync, isPending } = useContact()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
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
      toast('Success!', 'success')
      onClose()
    } else {
      toast("Couldn't process the request")
    }
  }

  const opened = urlModal == 'contact'

  return (
    <Modal title={t('header.contact')} opened={opened} className={css.modal} onClose={onClose}>
      <p className={css.text}>{t('header.contact-modal.content')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='example@gmail.com' className={css.emailInput} {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <Button type='submit' disabled={isPending} className={css.button}>
          {t('global.confirm')}
        </Button>
      </form>
    </Modal>
  )
}
