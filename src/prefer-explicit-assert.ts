import {
  Identifier,
  Transform,
  MemberExpression,
  Options,
  CallExpression,
  AwaitExpression,
} from 'jscodeshift';

export interface TransformOptions extends Options {
  memberExpressions?: boolean | string
}

const RTL_VARIANTS = [
  'getBy',
  'getAllBy',
  'queryBy',
  'queryAllBy',
  'findBy',
  'findAllBy',
];

const RTL_QUERIES = [
  'LabelText',
  'PlaceholderText',
  'Text',
  'AltText',
  'Title',
  'DisplayValue',
  'Role',
  'TestId',
];

export const RTL_QUERY_METHODS = RTL_VARIANTS.reduce(
  (methods, variant) => {
    RTL_QUERIES.forEach(query => methods.push(`${variant}${query}`))
    return methods
  },
  [] as string[],
);

const transform: Transform = (fileInfo, api, options: TransformOptions) => {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  
  const expressionStatements = root.find(j.ExpressionStatement, {
    expression: {
      type: "AwaitExpression",
      argument: {
        type: "CallExpression",
      }
    }
  });

  const callStatements = root.find(j.ExpressionStatement, {
    expression: {
      type: "CallExpression",
    }
  });

  expressionStatements.forEach(nodePath => {
    const { node } = nodePath;
    
    if (((node.expression as AwaitExpression).argument as CallExpression).callee.type === 'MemberExpression') {
      const memberExpression = ((node.expression as AwaitExpression).argument as CallExpression).callee as MemberExpression;
      const { property } = memberExpression

      if (RTL_QUERY_METHODS.includes((property as Identifier).name)) {
          nodePath.replace(
            j.expressionStatement(
              j.callExpression(
                j.memberExpression(
                  j.callExpression(
                    j.identifier('expect'), [nodePath.value.expression]), 
                    j.identifier('toBeInTheDocument')), [])));
      }
    }

    if (((node.expression as AwaitExpression).argument as CallExpression).callee.type === 'Identifier') {
      const identifier = ((node.expression as AwaitExpression).argument as CallExpression).callee as Identifier;
      const { name } = identifier
      
      if (RTL_QUERY_METHODS.includes(name)) {
          nodePath.replace(
            j.expressionStatement(
              j.callExpression(
                j.memberExpression(
                  j.callExpression(
                    j.identifier('expect'), [nodePath.value.expression]), 
                    j.identifier('toBeInTheDocument')), [])));
      }
    }
  });

  callStatements.forEach(nodePath => {
    const { node } = nodePath;

    if (RTL_QUERY_METHODS.includes(((node.expression as CallExpression).callee as Identifier).name)) {
          nodePath.replace(
            j.expressionStatement(
              j.callExpression(
                j.memberExpression(
                  j.callExpression(
                    j.identifier('expect'), [nodePath.value.expression]), 
                    j.identifier('toBeInTheDocument')), [])));
    }

    if (((node.expression as CallExpression).callee.type === 'MemberExpression')) {

      const memberExpression = ((node.expression as CallExpression).callee as MemberExpression);
      const { property } = memberExpression
      
      if (RTL_QUERY_METHODS.includes((property as Identifier).name)) {
          nodePath.replace(
            j.expressionStatement(
              j.callExpression(
                j.memberExpression(
                  j.callExpression(
                    j.identifier('expect'), [nodePath.value.expression]), 
                    j.identifier('toBeInTheDocument')), [])));
      }
    }
  });

  return root.toSource();    
}

export const parser = 'tsx'
export default transform
