# Generated by Django 5.0.4 on 2024-05-15 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0018_alter_username_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='username',
            name='About',
            field=models.TextField(default='', null=True),
        ),
    ]