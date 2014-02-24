from django.conf.urls import patterns, include, url
from django.contrib import admin

from rsvp import urls as rsvp_urls
from www.views import main



admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', main, name='main'),
    url(r'^rsvp/', include(rsvp_urls, namespace='rsvp')),

    url(r'^admin/', include(admin.site.urls)),
)
