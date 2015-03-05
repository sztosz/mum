from rest_framework import serializers

from authentication.serializers import UserSerializer
from .models import ExaminationsList


class ExaminationsListSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True, required=False)

    class Meta:
        model = ExaminationsList

        fields = ('id', 'author', 'month', 'year', 'rate', 'sum', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
