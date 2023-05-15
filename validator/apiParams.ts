interface IApiPropsValidator {
  fields: string[];
  params: { [key: string]: string | number | Date | string[] | number[] };
}

export const apiValidator = ({ fields, params }: IApiPropsValidator) => {
  let missingProp = '';

  if (Object.keys(params).length > 0) {
    fields.forEach((it) => {
      if (params[it] === undefined) {
        missingProp = it;
      }
    })
  }
  return missingProp;
};
