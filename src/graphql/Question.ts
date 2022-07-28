import { objectType, extendType, nonNull, stringArg, intArg, idArg } from "nexus";
import { NexusGenScalars } from "../../nexus-typegen";

export const Question = objectType({
    name: "Question", 
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("question");
        t.field("questionFor", {
            type: "Quiz",
            resolve(parent, args, context) {
                return context.prisma.question.findUnique({where:{id: parent.id}}).questionFor();
            }
        });
        t.nonNull.list.nonNull.field("answers", {
            type: "Answer",
            resolve(parent, args, context) {
                return context.prisma.question.findUnique({where: {id: parent.id}}).answers()
            }
        })
    },
});

const deleteMsg: NexusGenScalars["String"] =
  "Hello you have deleted the question successfully!!";


export const QuestionMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.field("question", {
            type: "Question",
            args: {
                quizId: nonNull(intArg()),
                question: nonNull(stringArg()),
            },
            async resolve(parent, args, context, info) {
                const { question, quizId } = args;
    
                const quizRef = await context.prisma.quiz.findUnique({
                    where:{
                        id:args.quizId
                    }
                })
                if(!quizRef) {
                    throw new Error("🔥🔥🔥 THE QUIZ_ID S NOT FOUND!")
                    
                }

                const newQuestion =  context.prisma.question.create({
                    data:{
                        question,
                        quizId
                    }
                })
                return newQuestion;
            }
        })
        t.field("updateQuestion",{
            type: "Question",
            args: {
                questionId: nonNull(intArg()),
                newQuestion: nonNull(stringArg()),
            },
            async resolve(parent, args, context, info) {
                const { questionId, newQuestion } = args


                const updatedQuestion = await context.prisma.question.update({
                    where: {
                        id:questionId
                    },
                    data:{
                        question:newQuestion,
                        
                    }
                    
                })
                return updatedQuestion;
            }
            
        })
        t.field("deleteQuestion", {
            type: "Question",
            args:{
                id: nonNull(intArg())
            },
            //@ts-ignore
            async resolve(parent, args,context, info) {

                const {id} = args

                await context.prisma.question.delete({
                    where:{
                        id
                    }
                })
                return deleteMsg;
            }
        })
    },
})