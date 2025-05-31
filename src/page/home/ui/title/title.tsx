import css from './title.module.css'

export const Title = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Сканер уязвимостей онлайн</h1>
      <h3 className={css.subTitle}>Внешний анализ безопасности сайта для обнаружения уязвимостей</h3>
    </div>
  )
}
