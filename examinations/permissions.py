from rest_framework import permissions


class IsAuthor(permissions.BasePermission):
    def has_object_permission(self, request, view, examination_list):
        if request.user:
            return examination_list.author == request.user
        return False
