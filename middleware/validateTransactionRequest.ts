import { Context } from '@nuxt/types/app'

const Joi = require('joi')

const addressRegex = /^[a-zA-Z0-9]{35}$/
const tagRegex = /^@[a-zA-Z0-9]+$/

const schema = Joi.object({
  id: Joi.string().uuid().required(),

  address: Joi.string().length(35).regex(addressRegex),

  tag: Joi.string().min(4).max(20).regex(tagRegex).required(),

  amount: Joi.number()
    .precision(8)
    .positive()
    .min(0.01)
    .max(80000000)
    .required(),

  label: Joi.string().min(1).max(30).optional(),
})

export default ({ route, redirect }: Context) => {
  const { value, error } = schema.validate(route.query)

  if (error) {
    redirect('/invalid-transaction-request')

    return
  }

  route.query.amount = value.amount
  route.query.label = value.label
  route.query.address = value.address
  route.query.tag = value.tag
}
