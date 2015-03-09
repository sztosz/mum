from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.models import User

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password', 'confirm_password',)

        read_only_fields = ('created_at', 'updated_at',)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        print(instance)
        instance.save()

        password = validated_data.get('password', None)
        confirm_password = validated_data.get('password', None)

        if password and password == confirm_password:
            instance.set_password(password)
            print(instance.set_password(password))
            print(password)
            instance.save()

        update_session_auth_hash(self.context.get('request'), instance)

        return instance
