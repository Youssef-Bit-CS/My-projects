# Generated by Django 5.0.4 on 2024-05-13 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_alter_user_email_alter_user_phone_number'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='UserName',
        ),
    ]