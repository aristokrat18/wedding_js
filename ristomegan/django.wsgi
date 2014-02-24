from os import environ
from sys import path

if not environ.get('ENVIRONMENT'):
    project = '/opt/wedding/ristomegan'

    if project not in path:
        path.append(project)

    environ['DJANGO_SETTINGS_MODULE'] = 'ristomegan.settings'

    import django.core.handlers.wsgi
    application = django.core.handls.wsgi.WSGIHandler()