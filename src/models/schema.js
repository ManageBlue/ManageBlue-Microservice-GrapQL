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
                    id: "1",
                    projectId: "61c4580b87283c4e5b3a01cb",
                    members: [
                        {
                            id: "1",
                            userId: "615d6e3f148db6592a35fe4d",
                            firstName: "Matej",
                            lastName: "Horvat",
                            totalHours: 100,
                            totalPaid: 700,
                            totalOwed: 1200,
                        },
                        {
                            id: "2",
                            userId: "615dbe8354c1336bde16918e",
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

