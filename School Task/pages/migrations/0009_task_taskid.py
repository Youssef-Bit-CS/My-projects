# Generated by Django 5.0.4 on 2024-05-14 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0008_alter_task_complete_alter_username_password_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='TaskID',
            field=models.IntegerField(default=5),
            preserve_default=False,
        ),
    ]
