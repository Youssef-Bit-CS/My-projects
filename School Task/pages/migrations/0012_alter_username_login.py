# Generated by Django 5.0.4 on 2024-05-14 18:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0011_alter_username_login'),
    ]

    operations = [
        migrations.AlterField(
            model_name='username',
            name='Login',
            field=models.BooleanField(choices=[('Yes', 'Yes'), ('No', 'No')], default='No', null=True),
        ),
    ]
