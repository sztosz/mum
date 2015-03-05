from rest_framework import permissions, viewsets
from rest_framework.response import Response

from .models import ExaminationsList
from .serializers import ExaminationsListSerializer
from .permissions import IsAuthor


class ExaminationsListsViewSet(viewsets.ModelViewSet):
    queryset = ExaminationsList.objects.select_related('author').order_by('-created_at')
    serializer_class = ExaminationsListSerializer

    def get_permissions(self):
        return [permissions.IsAuthenticated(), IsAuthor()]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

        return super().perform_create(serializer)

    def list(self, request, username=None):
        if not username:
            username = self.request.user.username
        queryset = self.queryset.filter(author__username=username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
