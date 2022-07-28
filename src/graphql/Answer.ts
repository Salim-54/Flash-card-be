import { objectType, extendType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenScalars } from "../../nexus-typegen";

export const Answer = objectType({
    name: "Answer", 
    definition(t) { 
        t.nonNull.int("id"); 
        t.nonNull.string("answer"); 
        t.nonNull.boolean("correct");
        t.field("answerFor", {
            type: "Question",
            resolve(parent, args, context) {
                return context.prisma.answer.findUnique({where:{id: parent.id}}).answerFor();
            }
        });
    },
});
const deleteMsg: NexusGenScalars["String"] =
  "Hello you have deleted the question successfully!!";

export const AnswerMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.field("answer", {
            type: "Answer",
            args: {
                answer: nonNull(stringArg()),
                questionId: nonNull(intArg()),
            },
            async resolve(parent, args, context, info) {
                const { answer, questionId } = args;
    
                const quizRef = await context.prisma.question.findUnique({
                    where:{
                        id:args.questionId
                    }
                })
                if(!quizRef) {
                    throw new Error("🔥🔥🔥 THE QUESTION YOU'RE TRYING TO ANSWER IS NOT FOUND!")
                    
                }

                const newAnswer =  context.prisma.answer.create({
                    data:{
                        answer,
                        questionId
                    }
                })
                return newAnswer;
            }
        })
        t.field("updateAnswer",{
            type: "Answer",
            args: {
                answerId: nonNull(intArg()),
                newAnswer: nonNull(stringArg()),
            },
            async resolve(parent, args, context, info) {
                const { newAnswer, answerId } = args


                const updatedAnswer = await context.prisma.answer.update({
                    where: {
                        id:answerId
                    },
                    data:{
                        answer:newAnswer,
                        
                    }
                    
                })
                return updatedAnswer;
            }
            
        })
        t.field("deleteAnswer", {
            type: "Answer",
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