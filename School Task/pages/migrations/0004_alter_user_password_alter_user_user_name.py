# Generated by Django 5.0.4 on 2024-05-13 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_alter_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='Password',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='User_name',
            field=models.TextField(null=True),
        ),
    ]