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
      },
      {
        ruleName: 'minLength',
        value: 3,

      },
    ],
  },

  {
    inputName: 'email',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'email',

    }],
  },
  {
    inputName: 'phone',
    rules: [{
      ruleName: 'required',
    },
    {
      ruleName: 'phone',

    }],
  },

]
