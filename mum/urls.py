from django.conf.urls import patterns, include, url
from django.contrib import admin

from rest_framework_nested import routers

from mum.views import IndexView
from authentication import views as auth_views

router = routers.SimpleRouter()
router.register(r'accounts', auth_views.UserViewSet)


urlpatterns = patterns(
    '',

    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', auth_views.LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', auth_views.LogoutView.as_view(), name='logout'),

    url('^.*$', IndexView.as_view(), name='Index'),

)
