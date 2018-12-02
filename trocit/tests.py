from django.test import TestCase, Client
from django.contrib.auth.models import User
import json


class GraphQLClient:
    def __init__(self, endpoint):
        self.endpoint = endpoint
        self.client = Client()

    def execute(self, query, variables):
        return self.client.post(self.endpoint, {
            'query': query,
            'variables': json.dumps(variables),
        })


class TestAuth(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('toto', 'toto@toto.com', 'titi')
        self.client = GraphQLClient('/graphql/')

    def test_login(self):
        query = '''
            mutation TokenAuth($username: String!, $password: String!) {
              tokenAuth(username: $username, password: $password) {
                token
              }
            }
        '''
        variables = {
            'username': 'toto',
            'password': 'titi',
        }
        response = self.client.execute(query, variables)
        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(None, response.json()['data']['tokenAuth']['token'])
