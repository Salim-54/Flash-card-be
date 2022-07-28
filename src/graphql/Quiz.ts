import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Prisma } from "@prisma/client";

export const Quiz = objectType({
    name: "Quiz", 
    definition(t) { 
        t.nonNull.int("id"); 
        t.nonNull.string("description"); 
        t.nonNull.string("name");
        t.nonNull.list.nonNull.field("questions", {
            type: "Question",
            resolve(parent, args, context) {
                return context.prisma.quiz.findUnique({where: {id: parent.id}}).questions()
            }
        })
    },
});

export const QuizQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("available", {
            type: "Quiz",
            resolve(parent, args, context) {
                return context.prisma.quiz.findMany();
            }
        })
    },

})

export const QuizMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("post", {
            type: "Quiz",
            args: {
                name: nonNull(stringArg()),
                description: nonNull(stringArg()),
            },
            resolve(parent, args, context) { 
                const newQuiz = context.prisma.quiz.create({  
                    data: {
                        description: args.description,
                        name: args.name,
                    },
                });
                return newQuiz;
            },
        });
    },
});