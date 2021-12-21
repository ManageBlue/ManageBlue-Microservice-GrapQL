const graphql = require('graphql')

const {
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphql

const Project = new GraphQLObjectType({
    name: 'ProjectType',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        members: {type: new GraphQLList(Member)},
        totalHours: {type: GraphQLFloat},
        totalPaid: {type: GraphQLFloat},
        totalOwed: {type: GraphQLFloat},
    })
})

const Member = new GraphQLObjectType({
    name: 'MemberType',
    fields: () => ({
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        totalHours: {type: GraphQLFloat},
        totalPaid: {type: GraphQLFloat},
        totalOwed: {type: GraphQLFloat},
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new GraphQLList(Project),
            resolve(parentValue, args) {
                const values = {
                    id: "TODO",
                    title: "TODO",
                    members: [
                        {
                            id: "TODO",
                            firstName: "Matej",
                            lastName: "Horvat",
                            totalHours: 100,
                            totalPaid: 700,
                            totalOwed: 1200,
                        },
                        {
                            id: "TODO",
                            firstName: "Lan",
                            lastName: "Sovinc",
                            totalHours: 69,
                            totalPaid: 420,
                            totalOwed: 9001,
                        }

                    ],
                    totalHours: 169,
                    totalPaid: 1120,
                    totalOwed: 10201,
                }

                let test = []
                test.push(values)

                console.log(test)

                return test
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})

