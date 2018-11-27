from django.shortcuts import render
from django.utils.translation import get_language
from django.conf import settings


def index(request):
    context = {
        'config': {
            'language': get_language(),
            'availableLanguages': settings.LANGUAGES,
        }
    }
    return render(request, 'index.html', context)
