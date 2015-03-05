# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ExaminationsList',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, verbose_name='ID', auto_created=True)),
                ('month', models.CharField(max_length=2, choices=[('01', 'Styczeń'), ('02', 'Luty'), ('03', 'Marzec'), ('04', 'Kwiecień'), ('05', 'Maj'), ('06', 'Czerwiec'), ('07', 'Lipiec'), ('08', 'Sierpień'), ('09', 'Wrzesień'), ('10', 'Październik'), ('11', 'Listopad'), ('12', 'Grudzień')])),
                ('year', models.IntegerField()),
                ('rate', models.IntegerField()),
                ('sum', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
