# Generated by Django 5.0.4 on 2024-05-14 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0010_username_login'),
    ]

    operations = [
        migrations.AlterField(
            model_name='username',
            name='Login',
            field=models.BooleanField(default='No', null=True),
        ),
    ]
