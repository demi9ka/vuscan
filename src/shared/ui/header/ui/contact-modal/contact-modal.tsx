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

type FormDataType = z.infer<typeof schema>

export const ContactModal = () => {
  const { mutateAsync } = useContact()
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
      toast('Успешно!', 'success')
      onClose()
    } else {
      toast('Не удалось обработать запрос')
    }
  }

  const opened = urlModal == 'contact'

  return (
    <Modal
      title='Связаться с нами'
      opened={opened}
      style={{
        width: 700
      }}
      onClose={onClose}
    >
      <p className={css.text}>Вы можете оставить свой Email и мы свяжемся с вами в ближайшее время</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='example@gmail.com' className={css.emailInput} {...register('email')} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

        <Button type='submit' className={css.button}>
          Подтвердить
        </Button>
      </form>
    </Modal>
  )
}
