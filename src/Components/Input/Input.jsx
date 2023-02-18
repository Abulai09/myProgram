import s from './input.module.css'


const Input = ({input,meta,...props}) => {
  let hasError = meta.touched && meta.error

  return(
    <div className={s.formControl + " " + (hasError && s.error )}>
      <input className={s.input} {...input} {...props}></input>
      {hasError && <span className={s.error}>{meta.error}</span>}
    </div>
  )
}

export default Input