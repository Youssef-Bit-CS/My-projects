# Generated by Django 5.0.4 on 2024-05-15 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0023_alter_username_about'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='Description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='task',
            name='Piority',
            field=models.CharField(choices=[('Low', 'Low'), ('Medium', 'Medium'), ('High', 'High')], max_length=20),
        ),
    ]