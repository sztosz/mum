from django.contrib.auth.models import User

from rest_framework import viewsets, permissions, status
from rest_framework.response import Response

from . import serializers
from .permissions import IsAccountOwner


class UserViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return [permissions.AllowAny()]

        if self.request.method == 'POST':
            return [permissions.IsAuthenticated(), IsAccountOwner]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad Request',
            'message': 'Can\'t create account with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)
