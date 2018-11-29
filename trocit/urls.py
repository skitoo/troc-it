from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from graphene_django.views import GraphQLView
from . import views
from . import schema

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', GraphQLView.as_view(
        graphiql=settings.DEBUG,
        schema=schema.schema
    )),
    re_path('^.*$', views.index, name='index'),
]
