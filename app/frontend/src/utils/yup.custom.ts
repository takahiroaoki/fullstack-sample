import * as yup from 'yup'
import * as ja from 'yup-locale-ja'

yup.setLocale(ja.suggestive)

export default yup