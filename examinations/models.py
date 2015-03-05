from django.db import models
from django.contrib.auth.models import User

MONTH_CHOICES = (
    ('01', 'Styczeń'),
    ('02', 'Luty'),
    ('03', 'Marzec'),
    ('04', 'Kwiecień'),
    ('05', 'Maj'),
    ('06', 'Czerwiec'),
    ('07', 'Lipiec'),
    ('08', 'Sierpień'),
    ('09', 'Wrzesień'),
    ('10', 'Październik'),
    ('11', 'Listopad'),
    ('12', 'Grudzień'),
)


class ExaminationsList(models.Model):
    author = models.ForeignKey(User)

    month = models.CharField(max_length=2, choices=MONTH_CHOICES, null=False)
    year = models.IntegerField(null=False)

    rate = models.IntegerField(null=False)
    sum = models.IntegerField(null=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
