import json
from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.models import User

from rest_framework import viewsets, views, permissions, status
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
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated(), IsAccountOwner()]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad Request',
            'message': 'Nie można utworzyć konta z tymi danymi.'
        }, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):

    def post(self, request):
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username', None)
        password = data.get('password', None)
        account = authenticate(username=username, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)
                serialized = serializers.UserSerializer(account)

                return Response(serialized.data)

            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'To konto zostało zablokowane.'
                }, status=status.HTTP_401_UNAUTHORIZED)

        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Kombinacja nazwy użytkownika i hasła jest niepoprawna.'
            }, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response([], status=status.HTTP_204_NO_CONTENT)
