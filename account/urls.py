from django.urls import include, path
from rest_framework import routers
from .views import UserViewSet, GroupViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('groups', GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api-root/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls'))
]
