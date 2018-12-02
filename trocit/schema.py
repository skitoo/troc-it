import graphene
import graphql_jwt


class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()


schema = graphene.Schema(mutation=Mutation)
