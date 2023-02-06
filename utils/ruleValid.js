import validator from '@netang/utils/validator'

const {
    validate: $n_validate
} = validator

/**
 * 单个验证真假规则(用于表单验证)
 */
export default function ruleValid (rule) {
    return function(value) {
        return ! $n_validate(value, 'data', rule, '', '该值')
    }
}
