export const fields = [
  {
    inputName: 'name',
    type: 'text',
  },
  {
    inputName: 'email',
    type: 'text',
  },
  {
    inputName: 'phone',
    type: 'text',
  },

]

export const fieldsValidationRules = [
  {
    inputName: 'name',
    rules: [
      {
        ruleName: 'required',
        SpecificErrorMessage: 'это поле обязательно',
      },
      {
        ruleName: 'minLength',
        value: 3,
        SpecificErrorMessage: 'длина должна быть не менее 3 символов',

      },
    ],
  },

  {
    inputName: 'email',
    rules: [{
      ruleName: 'required',
      SpecificErrorMessage: 'это поле обязательно',
    },
    {
      ruleName: 'email',
      SpecificErrorMessage: 'пожалуйста введите ваш электронный адрес',

    }],
  },
  {
    inputName: 'phone',
    rules: [{
      ruleName: 'required',
      SpecificErrorMessage: 'это поле обязательно',
    },
    {
      ruleName: 'phone',
      SpecificErrorMessage: 'пожалуйста введите  номер формате 0432386689',

    }],
  },

]
