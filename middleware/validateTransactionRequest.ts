import { Context } from '@nuxt/types/app'

const Joi = require('joi')

const schema = Joi.object({
  address: Joi.string()
    .required()
    .regex(/^[a-zA-Z0-9]{35}$/),

  tag: Joi.string()
    .min(4)
    .max(20)
    .regex(/^@[a-zA-Z0-9]+$/)
    .required(),

  amount: Joi.number().precision(8).positive().min(1).max(80000000).required(),

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
