from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework_nested import routers

from mum.views import IndexView
from authentication import views as auth_views

router = routers.SimpleRouter()
router.register(r'accounts', auth_views.UserViewSet)


urlpatterns = patterns(
    '',

    url(r'^api/v1/', include(router.urls)),

    url('^.*$', IndexView.as_view(), name='Index'),

    url(r'^admin/', include(admin.site.urls)),
)
