/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Answer: { // root type
    answer: string; // String!
    correct: boolean; // Boolean!
    id: number; // Int!
  }
  Mutation: {};
  Query: {};
  Question: { // root type
    id: number; // Int!
    question: string; // String!
  }
  Quiz: { // root type
    description: string; // String!
    id: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Answer: { // field return type
    answer: string; // String!
    answerFor: NexusGenRootTypes['Question'] | null; // Question
    correct: boolean; // Boolean!
    id: number; // Int!
  }
  Mutation: { // field return type
    answer: NexusGenRootTypes['Answer'] | null; // Answer
    deleteAnswer: NexusGenRootTypes['Answer'] | null; // Answer
    deleteQuestion: NexusGenRootTypes['Question'] | null; // Question
    post: NexusGenRootTypes['Quiz']; // Quiz!
    question: NexusGenRootTypes['Question'] | null; // Question
    updateAnswer: NexusGenRootTypes['Answer'] | null; // Answer
    updateQuestion: NexusGenRootTypes['Question'] | null; // Question
  }
  Query: { // field return type
    available: NexusGenRootTypes['Quiz'][]; // [Quiz!]!
  }
  Question: { // field return type
    answers: NexusGenRootTypes['Answer'][]; // [Answer!]!
    id: number; // Int!
    question: string; // String!
    questionFor: NexusGenRootTypes['Quiz'] | null; // Quiz
  }
  Quiz: { // field return type
    description: string; // String!
    id: number; // Int!
    name: string; // String!
    questions: NexusGenRootTypes['Question'][]; // [Question!]!
  }
}

export interface NexusGenFieldTypeNames {
  Answer: { // field return type name
    answer: 'String'
    answerFor: 'Question'
    correct: 'Boolean'
    id: 'Int'
  }
  Mutation: { // field return type name
    answer: 'Answer'
    deleteAnswer: 'Answer'
    deleteQuestion: 'Question'
    post: 'Quiz'
    question: 'Question'
    updateAnswer: 'Answer'
    updateQuestion: 'Question'
  }
  Query: { // field return type name
    available: 'Quiz'
  }
  Question: { // field return type name
    answers: 'Answer'
    id: 'Int'
    question: 'String'
    questionFor: 'Quiz'
  }
  Quiz: { // field return type name
    description: 'String'
    id: 'Int'
    name: 'String'
    questions: 'Question'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    answer: { // args
      answer: string; // String!
      questionId: number; // Int!
    }
    deleteAnswer: { // args
      id: number; // Int!
    }
    deleteQuestion: { // args
      id: number; // Int!
    }
    post: { // args
      description: string; // String!
      name: string; // String!
    }
    question: { // args
      question: string; // String!
      quizId: number; // Int!
    }
    updateAnswer: { // args
      answerId: number; // Int!
      newAnswer: string; // String!
    }
    updateQuestion: { // args
      newQuestion: string; // String!
      questionId: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}