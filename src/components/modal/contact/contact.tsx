import css from './contact.module.css'
import { Button, Modal } from '@/shared/ui'
import { useLocation } from 'react-router-dom'
import { useContact } from '@/entities/contact'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import z from 'zod'
import { toast } from '@/feature/toast'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'

type FormDataType = z.infer<typeof schema>

export const Contact = () => {
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
    navigate('/', { replace: true })
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
    <Modal title={t('header.contact')} opened={opened} onClose={onClose}>
      <p className={css.text}>{t('modal.contact.content')}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='example@gmail.com' className={css.emailInput} {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <Button type='submit' disabled={isPending} className={css.button} variant='gradient'>
          {t('global.confirm')}
        </Button>
      </form>
    </Modal>
  )
}
