from operator import mod
from statistics import mode
from django.db import models

# Create your models here.

class User(models.Model):
    email_id = models.CharField(max_length=200)
    password = models.CharField(max_length=16)
    last_login = models.DateTimeField()
    user_id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.email_id


class Show(models.Model):
    show_id = models.AutoField(primary_key=True, auto_created=True) 
    title = models.CharField(max_length=300, null=False)
    year = models.CharField(max_length=5)
    category = models.CharField(max_length=50)
    rating = models.CharField(max_length=20)
    isTrending = models.BooleanField(default=False)
    isBookmarked = models.BooleanField(default=False)
    thumbnail = models.JSONField(None)

    def __str__(self):
        return self.title
    

class UserActivity(models.Model):
    user_id = models.ForeignKey(User, null=True, related_name="user_id_activity", on_delete=models.CASCADE)
    show_id = models.ForeignKey(Show, null=True, related_name="show_id_activity", on_delete=models.CASCADE)
    is_bookmarked = models.BooleanField(default=False)


